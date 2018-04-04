export default function({ dispatch }) {
  return next => action => {
    // if the action doesn't have a payload or
    // if payload doesn't have a .them (not a promise )
    // send it on
    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    con
  };
}
