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
    Description
} from './styles'
import { useNavigation } from '@react-navigation/native'

export const ForgotPassword = () => {
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
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
            <SafeAreaView>
                <Container>

                    <ContentHeader>
                        <Title>
                            Recuperar senha
                        </Title>
                        <Description>Insira seu email a baixo para que possamos te enviar uma chave de recuperação.</Description>
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

                        <Button
                            title="Enviar"
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
