//React
import React from 'react';
import { shape, string, func } from 'prop-types'
//Components

const Search = ({ searchString, actions }) => {
    return (
        <div>
            <input onChange={ actions.searchRows } value={ searchString }/>
            <button onClick={ actions.clearSearch }>Clear</button>
            <button onClick={ actions.removeColumn }>Remove Column</button>
            <button onClick={ actions.addColumn }>Add Column</button>
        </div>
    );
};

Search.PropTypes = {
    searchString: string.isRequired,
    actions: shape({
        sortColumn: func.isRequired,
        previousPage: func.isRequired,
        nextPage: func.isRequired,
    })
};

export default Search