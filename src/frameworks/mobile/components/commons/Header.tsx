import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { useSetToken } from '../../hooks/sessionRecoil'
import di from '@di'

const Header: React.FC = () => {
  const setUserToken = useSetToken();

  const handleClickLogout = () => {
    di.session.removeToken()
    setUserToken('')
  }

  return (
    <View style={styles.headerView}>
      <View style={styles.title}>
        <Text style={styles.titleText}>React with Clean architecture</Text>
      </View>
      <View style={styles.logoutBtn}>
        <Button onPress={handleClickLogout} title="Logout" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerView: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: '#dddddd'
  },
  title: {
    width: '70%',
    height: 50,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 18
  },
  logoutBtn: {
    width: '30%',
    height: 50,
    justifyContent: 'center'
  }
})

export default Header