import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const cx = classNames.bind(styles);


class DataManagementList extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        const { items } = this.props;
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Telephone</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((i) => {
                            return (
                                <tr key={i.id}>
                                    <td>{i.id}</td>
                                    <td>{i.first_name}</td>
                                    <td>{i.last_name}</td>
                                    <td>{i.email}</td>
                                    <td>{i.telephone}</td>
                                    <td>

                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DataManagementList;
