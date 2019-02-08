//React
import React from 'react';
import { CellPropType } from '../utils/propTypes';
import { parseField } from '../actions/TableActions';
//Components
import { expandIcon } from '../assets/icons/Icon';

const Cell = ({ row, accessor, cellIndex, hiddenColumnsLength, fieldParser }) => {
    const icon = expandIcon({ cellIndex, row, hiddenColumnsLength });

    return <td className={ accessor }>{ icon }<span dangerouslySetInnerHTML={{ __html: parseField(accessor, row, fieldParser) }} /></td>;
};

Cell.propTypes = CellPropType;

export default Cell
