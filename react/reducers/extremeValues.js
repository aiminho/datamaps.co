import { Map } from 'immutable'
import { EDIT_ROW, UPLOAD_DATA, CHANGE_DOMAIN_START_VALUE } from '../constants/ActionTypes'

export default function extremeValues(state = Map(), action) {
  switch (action.type) {
    case EDIT_ROW: {
      const { value } = action
      if (value < state.get('min')) return state.set('min', value)
      if (value > state.get('max')) return state.set('max', value)
      return state
    }

    case UPLOAD_DATA: {
      const values = action.data.map((item) => item.get('value'))
      return state.merge({ min: values.min(), max: values.max() })
    }

    case CHANGE_DOMAIN_START_VALUE:
      return state.set('customMin', action.value)

    default:
      return state
  }
}