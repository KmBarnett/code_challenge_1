const initialState = {
  data: [],
};

const Polygons = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'SELECT_POINT':
      return Object.assign({}, state, {
        data: state.data.concat(action.data),
      });
    case 'REMOVE_POINT':
      return Object.assign({}, state, {
        data: state.data.filter((point) => point.id !== action.data.id),
      });

    default:
      return state;
  }
};

export default Polygons;
