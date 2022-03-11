import { ComponentType } from 'react';
import { Provider } from 'react-redux';

import { store } from '../model';

export const withStore = <T,>(Component: ComponentType<T>) => {
  return (hocProps: T) => (
    <Provider store={store}>
      <Component {...(hocProps as T)} />
    </Provider>
  );
};
