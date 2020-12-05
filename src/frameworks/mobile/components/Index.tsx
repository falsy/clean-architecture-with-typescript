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
import Test from '../../../di/test'

const Index: React.FC = () => {
  const dispatch = useDispatch()
  const token = useSelector((state: ISessionStateGroup) => state.session.token)
  // console.log(di)
  useEffect(() => {
    // const storageToken = di.session.getToken()
    // if (storageToken) {
    //   dispatch(di.session.setToken(storageToken))
    // }
  }, [token])

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          {/* {token === '' && (
            <View>
              <Text>no login</Text>
            </View>
          )}
          {token && ( */}
            <Test />
            <View>
              <Text>login</Text>
            </View>
          {/* )} */}
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