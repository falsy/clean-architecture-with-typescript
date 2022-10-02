import * as React from 'react'
import { useEffect } from 'react'
import { useTokenState } from '@hooks/sessionRecoil'
import di from '@di'
import Login from './logins/Login'
import Board from './boards/Board'

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