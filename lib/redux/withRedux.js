import { Provider } from 'react-redux';
import { initializeStore } from './store';

let reduxStore;
export const getInitializeStore = (initialState) => {
  if (typeof window === 'undefined') {
    return initializeStore(initialState);
  }

  if (!reduxStore) {
    reduxStore = initializeStore(initialState);
  }
  return reduxStore;
};

const withRedux = (PageComponent) => {
  const createWrapper = ({ initialReduxState, ...props }) => {
    const store = getInitializeStore(initialReduxState);
    return (
      <Provider store={store}>
        <PageComponent {...props} />
      </Provider>
    );
  };

  return createWrapper;
};

export default withRedux;
