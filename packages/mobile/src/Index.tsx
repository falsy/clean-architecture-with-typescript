import React, { useEffect } from 'react'
import { SafeAreaView, StyleSheet, ScrollView, StatusBar } from 'react-native'

import Header from './components/commons/Header'
import Login from './components/logins/Login'
import Board from './components/boards/Board'

import {useTokenState} from './hooks/sessionRecoil'
import di from './di'

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
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          {!token && (
            <Login />
          )}
          {token && (
            <>
              <Header />
              <Board />
            </>
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
    height: '100%'
  }
})

export default Index
