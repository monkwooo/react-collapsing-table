//React
import React from 'react';
import { RowPropType } from '../utils/propTypes';
//Components
import Cell from './Cell';
import ExpandedRow from './ExpandedRow';

const Row = ({ row, visibleColumns, hiddenColumns, expandRow, rowIndex, fieldParser }) => {
    const hiddenColumnsLength = hiddenColumns.length;

    const cells = visibleColumns.map(({ accessor }, index) => {
        return <Cell key={ accessor }
                     row={ row }
                     cellIndex={ index }
                     accessor={ accessor }
                     expandRow={ expandRow }
                     fieldParser={fieldParser}
                     hiddenColumnsLength={ hiddenColumnsLength } />
    });

    var onClick = null;
    if(
      // IS_HIDDEN_COULMNS
      (hiddenColumnsLength > 0) &&
      // IS_NOT_EMPTY_ROW
      Object.keys(row).length > 1
    ){
      onClick = () => expandRow({ rowIndex });
    }

    const expandedRow = row.isOpen ?
        <tr className="expanded-row" key='expandedRow'>
          <td colSpan={ visibleColumns.length }>
            <ExpandedRow row={ row }
                         fieldParser={fieldParser}
                         columns={ hiddenColumns }/>
          </td>
        </tr> : null;

    return (
        [
            <tr key='normalRow' onClick={ onClick }>
                { cells }
            </tr>,
            expandedRow
        ]
    );
};

Row.propTypes = RowPropType;

export default Row
