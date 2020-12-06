import React, { useState } from "react"
import { StyleSheet, View, TextInput, Button } from 'react-native'
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
    <View style={styles.loginForm}>
      <TextInput style={styles.inputView} onChangeText={text => onChangeId(text)} value={userId} placeholder={'ID'} />
      <TextInput style={styles.inputView} onChangeText={text => onChangePw(text)} value={userPw} placeholder={'Password'} />
      <Button onPress={handleClickAccreditation} title="Login" />
    </View>
  )
}

const styles = StyleSheet.create({
  loginForm: {
    padding: 60
  },
  inputView: {
    paddingLeft: 10,
    paddingRight: 10,
    height: 50, 
    borderColor: '#bbbbbb', 
    borderWidth: 1,
    color: '#000000',
    marginBottom: 10
  },
})


export default Login