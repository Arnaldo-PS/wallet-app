import React from 'react'
import { Container, ContentBody, Description, Title, ContentHeader } from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import { Button } from '@src/components/Button'
import { useNavigation } from '@react-navigation/native'

export const InitialPage = () => {
    const navigation = useNavigation();

    const handleRegister = () => {
        navigation.navigate('Register');
    }

    const handleLogin = () => {
        navigation.navigate('Login');
    }

    return (
        <LinearGradient
            colors={['rgba(42,123,155,1)', 'rgba(30,140,10,100)', 'rgba(87,199,133,1)']}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={{ flex: 1 }}
        >
            <Container>
                <ContentHeader>
                    <Title>Assuma o controle da sua vida financeira hoje!</Title>
                    <Description>Organize seus gastos, acompanhe seus objetivos e transforme sua relação com o dinheiro.</Description>
                </ContentHeader>

                <ContentBody>
                    <Button
                        iconName='google'
                        title="Continuar com Google"
                        variant="black"
                        onPress={() => {}}
                    />
                    <Button
                        iconName='mail'
                        title="Continuar com email"
                        variant="login"
                        onPress={handleRegister}
                    />
                    <Button
                        title="Já possuo conta"
                        variant="transparent"
                        onPress={handleLogin}
                    />
                </ContentBody>
            </Container>
        </LinearGradient>
    )
}
