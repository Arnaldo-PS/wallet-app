import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { ButtonSocialGoogle } from '@src/components/ButtonSocialGoogle/ButtonSocialGoogle'
import { ButtonSocial } from '@src/components/ButtonSocial/ButtonSocial'
import { useTheme } from 'styled-components'
import Input from '../../components/Input'
import { Button}  from '@src/components/Button/Button'
import {
    Container,
    ContentHeader,
    ContentBody,
    ContentFooter,
    Title,
    Description,
    ViewButton
 } from './styles'

const Login = () => {
    const { COLORS } = useTheme();
    const [loading, setLoading] = useState(false);

    function onPressButton() {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }

  return (
    <SafeAreaView>
        <Container>

            <ContentHeader>
                <Title>
                    Seja bem vindo(a) {"\n"} ao App Carteira
                </Title>

                <Description>
                    Entrar com redes sociais
                </Description>

                <ViewButton>
                    <ButtonSocialGoogle title="Google"/>
                    <ButtonSocial iconName="facebook" title="Facebook"/>
                </ViewButton>
            </ContentHeader>

            <ContentBody>
                <Input
                    leftIcon
                    iconSize={25}
                    secureTextEntry={false}
                    iconName="mail"
                    iconColor={COLORS.BLACK}
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='email-address'
                    placeholder="Digite seu e-mail"
                />
                <Input
                    leftIcon
                    rightIcon
                    iconSize={25}
                    secureTextEntry
                    iconName="lock"
                    iconColor={COLORS.BLACK}
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='default'
                    placeholder="Digite sua senha"

                />

                <Button
                    title="Entrar"
                    variant="primary"
                    onPress={onPressButton}
                />
            </ContentBody>

            <ContentFooter>

            </ContentFooter>

        </Container>
    </SafeAreaView>
  )
}

export default Login;
