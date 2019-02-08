//React
import React from 'react';
import { ExpandedRowPropType } from '../utils/propTypes';
import { parseField } from '../actions/TableActions';
//Components

const ExpandedRow = ({ row, columns, colspan, fieldParser }) => {
    const listOfHiddenAttributes = columns.map(({ accessor, label }) => {
        return <p className="child-cell" key={ accessor }>
                  <span className="child-label">{ label }</span>
                  <span className="child-content" dangerouslySetInnerHTML={{ __html: parseField(accessor, row, fieldParser) }} />
               </p>
    });

    return (
      <div className="child-expanded">
        { listOfHiddenAttributes }
      </div>
    );
};

ExpandedRow.propTypes = ExpandedRowPropType;

export default ExpandedRow
