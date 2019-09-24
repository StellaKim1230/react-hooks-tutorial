import { useState } from 'react'

const useUser = () => {
  const [isAdmin, setBeAdmin] = useState(false)
  const [nickName, setNickName] = useState('')
  const [email, setEmail] = useState('')

  const reset = () => {
    setBeAdmin(false)
    setNickName('')
    setEmail('')
  }

  const toggleToBeAdmin = () => setBeAdmin(!isAdmin)
  const updateNickname = event => {
    const nickName = event.target.value

    setNickName(nickName)
  }

  const upadteEmail = event => {
    const email = event.target.value

    setEmail(email)
  }

  return {
    isAdmin,
    nickName,
    email,
    reset,
    toggleToBeAdmin,
    updateNickname,
    upadteEmail
  }
}

export default useUser
