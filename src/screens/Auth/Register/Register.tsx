import React, { useState } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { useTheme } from 'styled-components'
import Input from '@src/components/Input'
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
} from './styles'
import { useNavigation } from '@react-navigation/native'

export const Register = () => {
    const { COLORS } = useTheme();
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    function onPressButton() {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }

    const handleLogin = () => {
        navigation.navigate('Login');
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
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
                            iconName="person"
                            iconColor={COLORS.BLACK}
                            autoCapitalize='none'
                            autoCorrect={false}
                            keyboardType='default'
                            placeholder="Digite seu nome"
                        />
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
                            title="Cadastrar"
                            variant="login"
                            onPress={onPressButton}
                        />
                    </ContentBody>

                    <ContentFooter>
                        <ButtonSignUp onPress={handleLogin}>
                            <TitleButtonSignUp1>Já possui uma conta?</TitleButtonSignUp1>
                            <TitleButtonSignUp2>Fazer login</TitleButtonSignUp2>
                        </ButtonSignUp>
                    </ContentFooter>

                </Container>
            </SafeAreaView>
        </ScrollView>
    )
}
