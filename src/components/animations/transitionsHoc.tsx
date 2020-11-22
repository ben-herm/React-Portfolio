import React, { useState, useEffect } from "react";
import { Transition } from "react-transition-group";

interface WithLoadingProps {
  loading: boolean;
  inProp: boolean;
  duration: number;
  style: {};
}

const transitionHoc = <P extends object>(Component: React.ComponentType<P>) => {
  class WithTransition extends React.Component<P & WithLoadingProps> {
    constructor(props) {
      super(props);
    }

    state = {
      defaultStyle: {
        transition: `opacity ${1000}ms ease-in-out, margin-top ${1000}ms ease-in-out`,
        opacity: 0,
      },
      transitionStyles: {
        entering: { opacity: 1, marginTop: 100 },
        entered: { opacity: 1, marginTop: 100 },
        exiting: { opacity: 0, marginTop: 0 },
        exited: { opacity: 0, marginTop: 0 },
      },
    };

    render() {
      const { ...props } = this.props;
      return (
        <Transition in={true} timeout={1000}>
          {(state) => (
            <Component
              style={{
                  marginTop:200,
                ...this.state.defaultStyle,
                ...this.state.transitionStyles[state],
                ...this.props.style,
              }}
              {...(props as P)}
            />
          )}
        </Transition>
      );
    }
  }
  return WithTransition;
};

export default transitionHoc;
