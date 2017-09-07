import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FakeStore from '../../_func/fakestore';

import Input from './Input';
// const cx = classNames.bind(styles);


class Field extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changed: false,
            value: props.value || '',
            initialValue: props.value || '',
            error: null
        };

        this.validate = this.validate.bind(this);
        this.hasChanged = this.hasChanged.bind(this);
        this.updateValue = this.updateValue.bind(this);

        // Update the store with any initial value
        FakeStore.getStore().setData(props.name, props.value);
    }

    validate = () => {
        const defaultValidators = {
            isRequired: (value) => {
                return true;
            },
            isNumeric: (value) => {
                return true;
            }
        };
    }

    updateValue(value) {
        const hasError = this.validate();
        FakeStore.getStore().setData(this.props.name, {
            value,
            changed: true,
            valid: !(hasError)
        });

        this.setState(() => {
            return {
                changed: true,
                value,
                valid: !(hasError)
            };
        });
    }

    hasChanged() {
        return (this.state.changed && this.state.initialValue !== this.state.value);
    }

    render() {
        const { InputComponent, label } = this.props || Input;
        return (
            <div className={'form-group row' + (this.hasChanged() ? ' has-warning' : '')}>
                <label htmlFor={this.props.name} className="col-sm-2 col-form-label">{label}</label>
                <div className="col-sm-10">
                    <InputComponent {...this.props} value={this.state.value} onUpdate={this.updateValue} />
                    {this.hasChanged() && <div className="form-control-feedback">This value has changed</div>}
                </div>
            </div>
        )
    }
}

Field.propTypes = {

};

export default Field;
