// src/redux/store.js
import { createStore } from 'redux';

const initialState = {
  // Define your initial state here
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Define your actions here
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
