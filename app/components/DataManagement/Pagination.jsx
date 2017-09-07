import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const cx = classNames.bind(styles);


class DataManagementPagination extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { page, pages } = this.props;
        if (page === 1 && pages === 1) return null;
        
        return (
            <div>
                pagination
            </div>
        );
    }
}

export default DataManagementPagination;
