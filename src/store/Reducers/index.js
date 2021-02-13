import defaultState from '../States/index'
import * as type from '../Types'
function reducer(state = defaultState, action) {
  if (action.type === type.SETDATA) {
    return { ...state, data: action.payload }
  }
  return state
}
export default reducer
