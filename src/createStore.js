export default function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action)
  }

  function getState() {
    return state;
  }
  
  dispatch({type: '@@INITIAL'})

  return {
    dispatch,
    getState
  }
}

function render() {
  const container = document.getElementById('container');
}
