const defaultState = {
  count: 0,
};

const ADD_COUNT = "ADD_COUNT";
const REMOVE_COUNT = "REMOVE_COUNT";

export const countReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_COUNT:
      return { ...state, count: state.count + action.payload };
    case REMOVE_COUNT:
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

export const addCountAction = (payload) => ({
  type: ADD_COUNT,
  payload: payload,
});

export const removeCountAction = (payload) => ({
  type: REMOVE_COUNT,
  payload: payload,
});
