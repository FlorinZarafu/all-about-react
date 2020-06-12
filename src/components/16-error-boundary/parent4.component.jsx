import React from "react";
import Hero from "./error-boundary.component";
import ErrorBoundary from "./error.component";

class Parent4 extends React.Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <Hero heroName="batman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Superman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary>
      </div>
    );
  }
}
export default Parent4;
