import { shape, arrayOf, array, bool, object, number, string, func } from 'prop-types';

//Building Blocks
export const Column = shape({
    accessor: string.isRequired,
    label: string.isRequired,
    isVisible: bool.isRequired,
})

export const Columns = arrayOf(Column)

export const InitialColumn = shape({
    accessor: string.isRequired,
    label: string.isRequired,
})

export const InitialColumns = arrayOf(InitialColumn)

export const Sort = shape({
    direction: string.isRequired,
    column: string.isRequired,
    defaultSortColumn: string.isRequired,
})

//Components
export const CellPropType = {
    row: object.isRequired,
    accessor: string.isRequired,
    cellIndex: number.isRequired,
    expandRow: func.isRequired,
    hiddenColumnsLength: number.isRequired,
    fieldParser: func
};

export const ColumnPropType = {
  accessor: string.isRequired,
  label: string.isRequired,
  onClick: func.isRequired,
  sort: Sort.isRequired,
};

export const ColumnsPropType = {
    columns: Columns.isRequired,
    sortRows: func.isRequired,
    sort: Sort.isRequired,
};

export const ExpandedRowPropType = {
    row: object.isRequired,
    columns: Columns.isRequired,
    fieldParser: func
};

export const PaginationPropType = {
    currentPage: number.isRequired,
    totalRows: number.isRequired,
    rowSize: number.isRequired,
    previousPage: func.isRequired,
    nextPage: func.isRequired,
};

export const RowPropType = {
    row: object.isRequired,
    visibleColumns: Columns.isRequired,
    hiddenColumns: Columns.isRequired,
    expandRow: func.isRequired,
    rowIndex: number.isRequired,
    fieldParser: func
};

export const RowsPropType = {
    rows: array.isRequired,
    visibleColumns: Columns.isRequired,
    hiddenColumns: Columns.isRequired,
    expandRow: func.isRequired,
};

export const SearchPropType = {
    searchString: string.isRequired,
    searchRows: func.isRequired,
    clearSearch: func.isRequired,
};

export const TablePropType = {
    rows: array,
    columns: InitialColumns.isRequired,
    rowSize: number,
    currentPage: number,
    defaultSortColumn: string,
    column: string,
    direction: string,
    fieldParser: func
};
