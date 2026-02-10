import React, { useState } from 'react'
import { SafeAreaView, Text, KeyboardAvoidingView, View, ScrollView } from 'react-native'
import { useTheme } from 'styled-components'
import Input from '@src/components/Input/Input'
import { Button } from '@src/components/Button/Button'
import {
    Container,
    ContentHeader,
    ContentBody,
    ContentFooter,
    Title,
    TitleButtonSignUp1,
    TitleButtonSignUp2,
    ButtonSignUp,
    ContentForgotPassword,
    ContentButtonForgotPassword,
    ContentTextForgotPassword,
    TextDivider
} from './styles'
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

    const handleForgotPassword = () => {
        navigation.navigate('ForgotPassword');
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1}}>
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
                                backgroundColor: COLORS.GREEN4,
                            }} />
                            <TextDivider style={{ marginHorizontal: 8, color: COLORS.GREEN4 }}> ou </TextDivider>
                            <View style={{
                                flex: 1,
                                height: 1,
                                backgroundColor: COLORS.GREEN4,
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
                            <ContentButtonForgotPassword onPress={handleForgotPassword}>
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
                    </ContentFooter>

                </Container>
            </SafeAreaView>
        </ScrollView>
    )
}
