import * as React from 'react'
import { useEffect } from 'react'

import di from '@di'
import { useTokenState } from '@hooks/sessionRecoil'
import Login from "@frameworks/web/components/logins/Login";

const withAuth = (WrappedComponent: any) => ({...props}) => {
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

    if(token === '')
        return <Login />

    return (
        <WrappedComponent {...props}/>
    )
}


export default withAuth