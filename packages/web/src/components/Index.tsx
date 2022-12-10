import React, { useEffect } from 'react'

import Login from './logins/Login'
import Board from './boards/Board'

import { useTokenState } from '../hooks/sessionRecoil'
import di from '../di'

const Index: React.FC = () => {
  const [token, setToken] = useTokenState()

  useEffect(() => {
    (async () => {
      const storageToken = await di.session.getToken()
      if (storageToken) {
        di.session.setToken(storageToken)
        setToken(storageToken)
      }
    })()
  }, [token])

  return (
    <div className={'wrap'}>
      {token === '' && (
        <Login />
      )}
      {token && (
        <Board />
      )}
    </div>
  )
}


export default Index