import React, { useState } from 'react'
import { SafeAreaView, Text, KeyboardAvoidingView, View } from 'react-native'
import { ButtonSocialGoogle } from '@src/components/ButtonSocialGoogle/ButtonSocialGoogle'
import { ButtonSocial } from '@src/components/ButtonSocial/ButtonSocial'
import { useTheme } from 'styled-components'
import Input from '@src/components/Input'
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
    TextDivider
} from './styles'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'

export const Login = () => {
    const { COLORS } = useTheme();
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    function onPressButton() {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }

    const handleRegister = () => {
        navigation.navigate('Register');
    }

    return (
        <LinearGradient
            colors={['rgba(42,123,155,1)', 'rgba(30,140,10,100)', 'rgba(87,199,133,1)']}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={{ flex: 1 }}
        >
            <KeyboardAvoidingView
                behavior="position"
                enabled
            >
                <SafeAreaView>
                    <Container>

                        <ContentHeader>
                            <Title>
                                Grana
                            </Title>
                        </ContentHeader>

                        <ContentBody>
                            <Button
                                iconName='google'
                                title="Continuar com Google"
                                variant="black"
                                onPress={() => { }}
                            />
                            <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginVertical: 8,
                                    marginTop: 13
                                }}>
                                    <View style={{
                                        flex: 1,
                                        height: 1,
                                        backgroundColor: COLORS.BLACK,
                                    }} />
                                    <TextDivider style={{marginHorizontal: 8, color: COLORS.BLACK}}> ou </TextDivider>
                                    <View style={{
                                        flex: 1,
                                        height: 1,
                                        backgroundColor: COLORS.BLACK,
                                    }} />
                            </View>
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
                                <ContentButtonForgotPassword onPress={() => { }}>
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
                            <ButtonSignUp onPress={handleRegister}>
                                <TitleButtonSignUp1>Não tem cadastro ainda?</TitleButtonSignUp1>
                                <TitleButtonSignUp2>Cadastre-se</TitleButtonSignUp2>
                            </ButtonSignUp>

                            {/*<Description>
                                Entrar com redes sociais
                            </Description>

                             <ViewButton>
                                <ButtonSocialGoogle title="Google" />
                                <ButtonSocial iconName="facebook" title="Facebook" />
                            </ViewButton> */}
                        </ContentFooter>

                    </Container>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </LinearGradient>
    )
}
