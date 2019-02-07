//React
import React, { Component }  from 'react';
import { TablePropType } from '../utils/propTypes';
//Components
import Search from './Search';
import Columns from './Columns';
import Rows from './Rows';
import Pagination from './Pagination';
import { calculateRows, sortColumn, nextPage, previousPage, expandRow } from '../actions/TableActions'
import { resizeTable } from '../actions/ResizeTableActions'
import { searchRows, clearSearch } from '../actions/SearchActions';
import cloneDeep from 'lodash/cloneDeep';
import isEqual from 'lodash/isEqual';

export class Table extends Component {
    constructor(props) {
      super()
      const {
        columns,
        rows = [],
        rowSize = 10,
        currentPage = 1,
        defaultSortColumn = props.columns.reduce((prev, curr) => {
            return prev.priorityLevel < curr.priorityLevel ? prev : curr;
        }).accessor,
        column = defaultSortColumn,
        direction = 'ascending'
      } = props;

      this.state = {
        columns: columns.map(column => ({ ...column, isVisible: true })),
        initialRows: cloneDeep(rows),
        rows: cloneDeep(rows),
        searchString: '',
        pagination: {
          rowSize,
          currentPage,
        },
        sort: {
          defaultSortColumn,
          column,
          direction,
        }
      }

      this.resizeTable = this.resizeTable.bind(this);
      this.sortRows = this.sortRows.bind(this);
      this.nextPage = this.nextPage.bind(this);
      this.previousPage = this.previousPage.bind(this);
      this.expandRow = this.expandRow.bind(this);
      this.searchRows = this.searchRows.bind(this);
      this.clearSearch = this.clearSearch.bind(this);
    }

    componentWillMount(){
        window.addEventListener('resize', this.resizeTable);
    }

    componentDidMount(){
        this.resizeTable();
    }

    componentDidUpdate(prevProps){
      if(
        !isEqual(prevProps.rows, this.props.rows) ||
        !isEqual(prevProps.columns, this.props.columns)
      ){
        this.setState({
          columns: this.props.columns.map(c => ({ ...c, isVisible: true })),
          initialRows: cloneDeep(this.props.rows),
          rows: cloneDeep(this.props.rows)
        }, this.resizeTable);
      }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeTable);
    }

    resizeTable() {
        this.setState(resizeTable({ width: window.innerWidth, state: this.state }))
    };

    sortRows({ column }) {
      this.setState(sortColumn({ column, state: this.state }));
    }

    nextPage() {
      this.setState(nextPage({ state: this.state }));
    };

    previousPage() {
      this.setState(previousPage({ state: this.state }));
    };

    expandRow({ rowIndex }) {
      this.setState(expandRow({ rowIndex, state: this.state }));
    }

    searchRows({ target: { value }}) {
        this.setState(searchRows({ searchString: value, state: this.state }));
    }

    clearSearch() {
      this.setState(clearSearch({ state: this.state }));
    }

    render(){
      const { columns, pagination: { currentPage, rowSize }, rows, } = this.state;
      const displayedRows = calculateRows({ state: this.state })
      const visibleColumns = Object.assign([], columns.filter(column => column.isVisible));
      const hiddenColumns = Object.assign([], columns.filter(column => !column.isVisible));

      return (
          <div>
              <div className="react-collapse-header">
                <Pagination currentPage={ currentPage }
                            totalRows={ rows.length }
                            rowSize={ rowSize }
                            nextPage={ this.nextPage }
                            previousPage={ this.previousPage } />
                <Search searchString={ this.state.searchString }
                        searchRows={ this.searchRows }
                        clearSearch={ this.clearSearch } />
              </div>
              <table className="react-collapsible">
                  <Columns columns={ visibleColumns }
                           sortRows={ this.sortRows }
                           sort={ this.state.sort } />
                  <Rows rows={ displayedRows }
                        visibleColumns={ visibleColumns }
                        hiddenColumns={ hiddenColumns }
                        expandRow={ this.expandRow } />
              </table>
          </div>
      );
    }
};

Table.propTypes = TablePropType;

export default Table
