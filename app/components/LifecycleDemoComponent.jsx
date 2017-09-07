import React, {Component} from 'react';

const nydString = 'Not yet Defined';

class Component1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: props.firstName && props.lastName ? `${props.firstName} ${props.lastName}` : nydString
        };
    }

    // Component is going to mount - happens before the DOM is ready.  Happens once.
    componentWillMount() {
        console.log('Beginning Component mount sequence');
    }

    // Component has mounted (And DOM is ready - run after the first render())
    componentDidMount() {
        console.log('Component has mounted - DOM is rendered');
    }

    // Incomming Props are passed here first
    componentWillReceiveProps(nextProps) {
        console.log('---------------------- START COMPONENT LIFECYLCLE NEW PROPS PASSED TO COMPONENT');
        console.log('New props passed to the component', nextProps);
        if (nextProps.firstName && nextProps.lastName) {
            this.setState(() => {
                return {
                    fullName: `${nextProps.firstName} ${nextProps.lastName}`
                };
            });
        }
    }

    // Checks whether the properties have changed or the state has changed
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Checking if we should update the component', nextProps.firstName, nextProps.lastName);
        if (nextProps.firstName === this.props.firstName && nextProps.lastName === this.props.lastName) {
            console.log('Since the data has not changed, we do not want to continue down the lifecycle');
            console.log('---------------------- NEW PROPS MATCHED OLD PROPS -> No change in props');            
            return false;
        }
        return true;
    }

    // Acknowledges that an update is taking place, with the new props and new state
    componentWillUpdate(nextProps, nextState) {
        console.log('Confirming - we ARE updating the component');
    }

    // After an update has taken place, with access to the previous props and previous state
    componentDidUpdate(prevProps, prevState) {
        console.log('Component data (props or state) has been updated');
        console.log('---------------------- END COMPONENT LIFECYCLE BEFORE RENDER');
    }

    componentWillUnmount() {
        console.log('Component is being unmounted');
    }

    render() {
        const { firstName, lastName } = this.props;
        const { fullName } = this.state;
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Prop: First Name</th>
                            <th>Prop: Last Name</th>
                            <th>State: Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{firstName || nydString}</td>
                            <td>{lastName || nydString}</td>
                            <td>{fullName || nydString}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Component1;
