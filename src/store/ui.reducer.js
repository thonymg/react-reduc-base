const INITIAL_STATE = {
  toggleStat: {
    id: '885562',
    isVisible: false,
  },
  responseField: {
    id: '885562',
    isVisible: false,
  },
  toggleForm: {
    isVisible: false,
  },
}

export const uiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_QUESTION_FORM':
      return Object.assign({}, state, {
        toggleForm: {
          isVisible: action.isVisible,
        },
      })

    default:
      return state
  }
}

export default uiReducer
