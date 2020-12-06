import React from "react"
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native'
import { useDispatch } from "react-redux"
import di from '@di'

const Header: React.FC = () => {
  const dispatch = useDispatch()

  const handleClickLogout = () => {
    dispatch(di.session.removeToken())
  }

  return (
    <View>
      <Text>React with Clean architecture</Text>
      <Button onPress={handleClickLogout} title="Logout" />
    </View>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
})

export default Header