import React from 'react'

import useUser from '../hooks/useUser'

const User = () => {
  const user = useUser()

  let label = 'user'
  if (user.isAdmin) {
    label = 'admin'
  }

  return (
    <div>
      <label>{label}</label>
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>
      <h3>{user.nickName}</h3>
      <button onClick={user.reset}>RESET</button>
      <button onClick={user.toggleToBeAdmin}>toggle admin mode</button>
      <input type='text' onChange={user.updateNickname} />
      <input type='text' onChange={user.upadteEmail} />
    </div>
  )
}

export default User;
