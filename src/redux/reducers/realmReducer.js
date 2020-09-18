const realm = (state = {}, action) => {
    switch (action.type) {
      case 'SET_REALM':
        return action.payload;
      default:
        return state;
    }
  };

  // user will be on the redux state at:
  // state.realm
  export default realm;
