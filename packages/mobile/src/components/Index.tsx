import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';
import {useTokenState} from '../hooks/sessionRecoil';

import di from '../di';

const Index: React.FC = () => {
  const [token, setToken] = useTokenState();

  useEffect(() => {
    (async () => {
      const storageToken = await di.session.getToken();
      if (storageToken) {
        di.session.setToken(storageToken);
        setToken(storageToken);
      }
    })();
  }, [setToken, token]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          hello world
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
    height: '100%',
  },
});

export default Index;
