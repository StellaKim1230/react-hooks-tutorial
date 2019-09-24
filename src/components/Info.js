import React, { useState, useEffect } from 'react'

const Info = () => {
  const [name, setName] = useState('')
  const [nickname, setNickname] = useState('')

  // useEffect(() => {
  //   console.log('렌더링이 완료되었습니다.')
  //   console.log({
  //     name,
  //     nickname
  //   })
  // }, )

  // useEffect(() => {
  //   console.log('마운트 될 때만 실행됩니다.')
  // }, [])

  // useEffect(() => {
  //   console.log(name)
  // },[name])

  useEffect(() => {
    console.log('effect')
    console.log(name)
    return () => {
      console.log('업데이트 되기 전, cleanup')
      console.log(name)
    }
  
    // eslint-disable-next-line
  }, [name])

  const onChangeName = e => {
    setName(e.target.value)
  }

  const onChangeNickname = e => {
    setNickname(e.target.value)
  }

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름: </b> {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
    </div>
  )
}

export default Info
