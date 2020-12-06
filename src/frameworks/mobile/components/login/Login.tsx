import React, { useState } from "react"
import {
  StyleSheet,
  View,
  TextInput,
  Button
} from 'react-native'
import { useDispatch } from "react-redux"
import di from '@di'

const Login: React.FC = () => {
  const dispatch = useDispatch()

  const [userId, onChangeId] = useState('')
  const [userPw, onChangePw] = useState('')

  const handleClickAccreditation = async () => {
    dispatch(await di.session.login(userId, userPw))
  }

  return (
    <View>
      <TextInput onChangeText={text => onChangeId(text)} value={userId} placeholder={'ID'} />
      <TextInput onChangeText={text => onChangePw(text)} value={userPw} placeholder={'Password'} />
      <Button onPress={handleClickAccreditation} title="Login" />
    </View>
  )
}


export default Login