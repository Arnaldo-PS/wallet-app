import React from 'react'
import { SafeAreaView } from 'react-native'
import { ButtonSocialGoogle } from '@src/components/ButtonSocialGoogle/ButtonSocialGoogle'
import { ButtonSocial } from '@src/components/ButtonSocial/ButtonSocial'
import { useTheme } from 'styled-components'
import Input from '../../components/Input'
import {
    Container,
    ContentHeader,
    ContentBody,
    ContentFooter,
    Title,
    Description,
    ViewButton
 } from './styles'

const Login: React.FC = () => {
    const { COLORS } = useTheme();

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
                    iconName="mail-outline"
                    iconColor={COLORS.BLACK}
                    placeholder="Digite seu e-mail"
                />
                <Input
                    leftIcon
                    iconSize={25}
                    iconName="lock-outline"
                    iconColor={COLORS.BLACK}
                    placeholder="Digite sua senha"
                />
            </ContentBody>

            <ContentFooter>

            </ContentFooter>

        </Container>
    </SafeAreaView>
  )
}

export default Login;
