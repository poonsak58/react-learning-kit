import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FakeStore from '../_func/fakestore';

// const cx = classNames.bind(styles);

import Field from '../components/Form/Field';
import Input from '../components/Form/Input';

class HOCFormExample extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        let data = FakeStore.getStore().data;
        console.log('Form has submitted');
        console.log('Form Data', data);
    }

    render() {
        return (
            <div>
                <h1>Higher Order Component (Form Example)</h1>
                <form id="someform" onSubmit={this.onSubmit}>
                    <Field name="myfield1" value="value 1" label="Label number 1" InputComponent={Input} />
                    <Field name="myfield2" value="value 2" label="Label number 2" InputComponent={Input} />
                    <div className="form-group row">
                        <div className="offset-sm-2 col-sm-10">
                            <button type="submit" className="btn btn-primary">Submit Form</button>
                        </div>
                    </div>
                </form>

                <h2>Code</h2>
                <h3>HOC Form</h3>
                <pre>
                    <code>
                        
                    </code>
                </pre>
            </div>
        );
    }
}

HOCFormExample.propTypes = {
};

function mapStateToProps(state) {
    return {

    };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps, null)(HOCFormExample);
