import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LifecycleDemoComponent from '../components/LifecycleDemoComponent';

const possibleNames = [
    { firstName: 'Roland', lastName: 'Flanagan' },
    { firstName: 'Mike', lastName: 'Busted' },
    { firstName: 'John', lastName: 'Nguyen' },
    { firstName: 'Pavel', lastName: 'Chiddler' },
    { firstName: 'Steve', lastName: 'Wopmnbey' },
];


class ComponentLifecycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentName: null,
            intervalPointer: null
        };

        this.changeName = this.changeName.bind(this);
        this.changeNameTimer = this.changeNameTimer.bind(this);
    }

    componentDidMount() {
        this.changeNameTimer();
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalPointer);
    }

    changeNameTimer() {
        const iTimer = setInterval(() => {
            this.changeName();
        }, 2000);
        this.setState(() => {
            return {
                intervalPointer: iTimer
            };
        });
    }

    changeName() {
        const min = 0;
        const max = possibleNames.length - 1;
        const idx = Math.floor(Math.random() * ((max - min) + 1)) + min;
        this.setState(() => {
            return {
                currentName: possibleNames[idx]
            };
        });
    }

    render() {
        const { currentName } = this.state;
        const lcProps = {
            firstName: currentName && currentName.firstName,
            lastName: currentName && currentName.lastName
        };

        return (
            <div>
                <h1>Component Lifecycle</h1>
                <LifecycleDemoComponent {...lcProps} />
            </div>
        );
    }
}

ComponentLifecycle.propTypes = {
};

function mapStateToProps(state) {
    return {

    };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps, null)(ComponentLifecycle);
