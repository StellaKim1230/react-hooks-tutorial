const initialUserState = {
  isAdmin: false,
  nickname: '',
  email: '',
}

const userReducer = (state, action) => {
  const user = state

  switch (action.type) {
    case 'reset': {
      return initialUserState
    }
    case 'toggleToBeAdmin': {
      return { ...user, isAdmin: !state.isAdmin}
    }
    case 'updateEmail': {
      return { ...user, email: action.email}
    }
    case 'updateNickname': {
      return { ...user, email: action.nickname}
    }
    default: {
      throw new Error(`unexpected action.type: ${action.type}`)
    }
  }
}

export default userReducer
