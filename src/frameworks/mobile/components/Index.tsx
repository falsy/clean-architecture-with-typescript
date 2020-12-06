import React, { useEffect } from "react"
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native'
import { useDispatch, useSelector } from "react-redux"
import { ISessionStateGroup } from '@frameworks/mobile/redux/interfaces/iSession'
import di from '@di'
import Header from "./commons/Header"
import Login from "./login/Login"

const Index: React.FC = () => {
  const dispatch = useDispatch()
  const token = useSelector((state: ISessionStateGroup) => state.session.token)

  useEffect(() => {
    (async () => {
      const storageToken = await di.session.getToken()
      console.log(storageToken)
      if (storageToken) {
        dispatch(di.session.setToken(storageToken))
      }
    })()
  }, [token])

  console.log(token);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          {token === '' && (
            <Login />
          )}
          {token !== '' && (
            <Header />
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
})


export default Index