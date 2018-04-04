export default function({ dispatch }) {
  return next => action => {
    // if the action doesn't have a payload or
    // if payload doesn't have a .then (not a promise )
    // send it on
    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    // make sure the action's promise resolves
    action.payload
      .then(function(response) {
        // create a new action with the old type,
        // but replace the payload promise with the response data
        const newAction = { ...action, payload: response };
        // send it through again
        dispatch(newAction);
      });
  }
}
