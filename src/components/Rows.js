//React
import React from 'react';
import { RowsPropType } from '../utils/propTypes';
//Components
import Row from './Row';

const Rows = ({ rows, visibleColumns, hiddenColumns, expandRow, fieldParser }) => {
    const tableRows = rows.map((row, index) => {
        return <Row key={ index }
                    rowIndex={ index }
                    row={ row }
                    visibleColumns={ visibleColumns }
                    hiddenColumns={ hiddenColumns }
                    fieldParser={ fieldParser }
                    expandRow={ expandRow } />
    });

    return (
        <tbody>
            { tableRows }
        </tbody>
    );
};

Rows.propTypes = RowsPropType;

export default Rows
