import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { agodaLearningService } from '../services';
import List from '../components/DataManagement/List';
import Pagination from '../components/DataManagement/Pagination';

// const cx = classNames.bind(styles);

class DataManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            items: [],
            page: 1,
            pages: 1
        };
    }

    componentDidMount() {
        agodaLearningService().userList({})
        .then((request) => {
            this.setState(() => {
                return {
                    items: request.data.usersList
                };
            });
        })
        .catch((err) => {
            console.log('Error Loading Data List', err);
        });
    }

    render() {
        console.log('Rendering Data Management Container');
        const { items, page, pages } = this.state;
        const paginationLinks = (pages >= 1 && <Pagination page={page} pages={pages} />);

        return (
            <div>
                <h1>Data Management</h1>
                <List items={items} />
                {paginationLinks}
            </div>
        );
    }
}

DataManagement.propTypes = {
};

function mapStateToProps(state) {
    return {

    };
}

export default connect(mapStateToProps, null)(DataManagement);
