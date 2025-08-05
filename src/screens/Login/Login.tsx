import React, { useState } from 'react'
import { SafeAreaView, Text } from 'react-native'
import { ButtonSocialGoogle } from '@src/components/ButtonSocialGoogle/ButtonSocialGoogle'
import { ButtonSocial } from '@src/components/ButtonSocial/ButtonSocial'
import { useTheme } from 'styled-components'
import Input from '../../components/Input'
import { Button } from '@src/components/Button/Button'
import {
    Container,
    ContentHeader,
    ContentBody,
    ContentFooter,
    Title,
    Description,
    ViewButton,
    TitleButtonSignUp1,
    TitleButtonSignUp2,
    ButtonSignUp,
    ContentForgotPassword,
    ContentButtonForgotPassword,
    ContentTextForgotPassword,
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
                        Grana
                    </Title>
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

                    <ContentForgotPassword>
                        <ContentButtonForgotPassword onPress={() => {}}>
                            <ContentTextForgotPassword>Recuperar Senha</ContentTextForgotPassword>
                        </ContentButtonForgotPassword>
                    </ContentForgotPassword>

                    <Button
                        title="Entrar"
                        variant="login"
                        onPress={onPressButton}
                    />
                </ContentBody>

                <ContentFooter>
                    <ButtonSignUp onPress={() => {}}>
                        <TitleButtonSignUp1>Não tem cadastro ainda?</TitleButtonSignUp1>
                        <TitleButtonSignUp2>Cadastre-se</TitleButtonSignUp2>
                    </ButtonSignUp>

                    <Description>
                        Entrar com redes sociais
                    </Description>

                    <ViewButton>
                        <ButtonSocialGoogle title="Google" />
                        <ButtonSocial iconName="facebook" title="Facebook" />
                    </ViewButton>
                </ContentFooter>

            </Container>
        </SafeAreaView>
    )
}

export default Login;
