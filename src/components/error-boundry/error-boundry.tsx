import React from 'react';

import './error-boundry.scss';

type StateType = {
  hasError: boolean,
}
export class ErrorBoundary extends React.Component<React.ReactNode, StateType> {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong!</h1>;
    }
    return this.props.children;
  }
}
