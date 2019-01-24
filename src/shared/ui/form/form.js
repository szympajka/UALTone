// ####### Declarations ##########

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isFunction, forEach, isEmpty, includes, mapValues, merge } from 'lodash';

// ########### Composing view ###########

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = mapValues(props.defaultState, (value, key) => ({
      value,
      valid: true
    }));

    this.modified = 0;

    this.handleChange = this.handleChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleChange(event, modifier) {
    const { target } = event;
    const { name } = target;
    let { value } = target;

    if (modifier) {
      value = modifier(value);
    }

    this.modified += 1;

    this.setState({
      [name]: {
        value,
        valid: true
      }
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();

    const { api, onSuccess, onError, onBeforeSubmit, allowEmpty } = this.props;
    let validated = true;

    if (isEmpty(this.state)) {
      return onError();
    }

    forEach(this.state, (el, name) => {
      if ((el && !el.value) && !includes(allowEmpty, name)) {
        this.setState(prevState => ({
          [name]: merge(prevState[name], { valid: false })
        }));

        validated = false;
      } 
    });

    if (validated && onBeforeSubmit && isFunction(onBeforeSubmit)) {
      validated = onBeforeSubmit(this.state, this);
    }

    if (validated) {
      if (api && isFunction(api)) {
        const pms = mapValues(this.state, el => el.value);

        api(pms).then((res) => {
          if (res.success) {
            if (onSuccess && isFunction(onSuccess)) {
              onSuccess(res, this.state);
            }
          } else if (onError && isFunction(onError)) {
            onError(res, this.state);
          }
        });
        // .catch((err) => {
        //   if (onServerError && isFunction(onServerError)) {
        //     onServerError(err);
        //   }
        // });
      }
    }
  }

  render() {
    const { api, onSuccess, onError, onBeforeSubmit, children, defaultState, allowEmpty, ...pms } = this.props;
    return (
      <form {...pms} onSubmit={event => this.handleOnSubmit(event)}>
        {children(this)}
      </form>
    );
  }
}

Form.defaultProps = {
  onSuccess: null,
  onError: null,
  onBeforeSubmit: null,
  defaultState: {},
  allowEmpty: []
};

Form.propTypes = {
  children: PropTypes.func.isRequired,
  api: PropTypes.func.isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
  onBeforeSubmit: PropTypes.func,
  allowEmpty: PropTypes.arrayOf(PropTypes.string),
  defaultState: PropTypes.object
};

export default Form;
