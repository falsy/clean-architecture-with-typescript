import React, { useEffect } from "react"
import { SafeAreaView, StyleSheet, ScrollView, StatusBar } from 'react-native'
import { useDispatch, useSelector } from "react-redux"
import { ISessionStateGroup } from '@frameworks/mobile/redux/interfaces/iSession'
import Header from "./commons/Header"
import Login from "./logins/Login"
import Board from "./boards/Board"
import di from '@di'

const Index: React.FC = () => {
  const dispatch = useDispatch()
  const token = useSelector((state: ISessionStateGroup) => state.session.token)

  useEffect(() => {
    (async () => {
      const storageToken = await di.session.getToken()
      if (storageToken) {
        dispatch(di.session.setToken(storageToken))
      }
    })()
  }, [token])

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          {token === '' && (
            <Login />
          )}
          {token !== '' && (
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
  },
})


export default Index