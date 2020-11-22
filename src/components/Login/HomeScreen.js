import React, { memo } from 'react';
import Background from './Background';
import Logo from './Logo';
import Header from './Header';
import Button from './Button';
import Paragraph from './Paragraph';

const HomeScreen = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>Hoşgeldiniz</Header>

    <Paragraph>
      Uygulamaya giriş yaparak hayatını planla :)
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Giriş Yap
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('RegisterScreen')}
    >
      Kaydol
    </Button>
  </Background>
);

export default memo(HomeScreen);
