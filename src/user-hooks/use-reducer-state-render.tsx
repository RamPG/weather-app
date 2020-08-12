import React from 'react';

export function useReducerStateRender<T>(
  isLoading: boolean, isError: boolean, data: T, Component: React.FunctionComponent<{data: T}>,
): JSX.Element {
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Error!</h1>;
  }
  return <Component data={data} />;
}
