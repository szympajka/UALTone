import { Component, PureComponent } from 'react';
import { isFunction } from 'lodash';

class CreateComponent extends Component {
  constructor(props) {
    super(props);

    this.CONSTS = {
      ACTION: {
        READY: 'READY'
      }
    };
  }

  reducer(state, action) {
    switch (action.type) {
      case this.CONSTS.ACTION.READY:
        return {
          ...state,
          ...action.payload,
          ready: true
        };
      default:
        return state;
    }
  }

  dispatch(action = { type: null, payload: {} }) {
    if (this.reducer && isFunction(this.reducer)) {
      this.setState((prevState) => {
        let nextAction = action;

        if (isFunction(nextAction)) {
          nextAction = nextAction(prevState);
        }

        return this.reducer(prevState, nextAction);
      });
    } else {
      throw new SyntaxError('Please provide reducer function to use this functionality!');
    }
  }
}

class CreatePureComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.CONSTS = {
      ACTION: {
        READY: 'READY'
      }
    };
  }

  reducer(state, action) {
    switch (action.type) {
      case this.CONSTS.ACTION.READY:
        return {
          ...state,
          ...action.payload,
          ready: true
        };
      default:
        return state;
    }
  }

  dispatch(action = { type: null, payload: {} }) {
    if (this.reducer && isFunction(this.reducer)) {
      this.setState((prevState) => {
        let nextAction = action;

        if (isFunction(nextAction)) {
          nextAction = nextAction(prevState);
        }

        return this.reducer(prevState, nextAction);
      });
    } else {
      throw new SyntaxError('Please provide reducer function to use this functionality!');
    }
  }
}

export default CreateComponent;
export { CreatePureComponent };
