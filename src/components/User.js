import React, { useReducer } from 'react'

// import useUser from '../hooks/useUser'
import userReducer from '../hooks/userReducer'

const initialUserState = {
  isAdmin: false,
  nickname: '',
  email: '',
}

const User = () => {
  // const user = useUser()
  const [user, dispatch] = useReducer(userReducer, initialUserState)

  let label = 'user'
  if (user.isAdmin) {
    label = 'admin'
  }

  const reset = () => dispatch({ type: 'reset'})
  const toggleToBeAdmin = () => dispatch({ type: 'toggleToBeAdmin' })
  const updateNickname = event => dispatch({ type: 'updateNickname', nickname: event.target.value })
  const updateEmail = event => dispatch({ type: 'updateEmail', email: event.target.value })

  return (
    <div>
      <label>{label}</label>
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>
      <h3>{user.nickName}</h3>
      <button onClick={reset}>RESET</button>
      {/* <button onClick={user.reset}>RESET</button> */}
      {/* <button onClick={user.toggleToBeAdmin}>toggle admin mode</button> */}
      <button onClick={toggleToBeAdmin}>toggle admin mode</button>
      {/* <input type='text' onChange={user.updateNickname} />
      <input type='text' onChange={user.upadteEmail} /> */}
      <input type='text' onChange={updateNickname} />
      <input type='text' onChange={updateEmail} />
    </div>
  )
}

export default User;
