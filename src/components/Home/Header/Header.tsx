import React from 'react'
import {
    Container,
    UserPhoto,
    WelcomeContent,
    WelcomeTitle,
    UserName
} from './styles'

export const Header = () => {
    return (
        <Container>
            <UserPhoto source={require('../../../assets/caverinha.jpg')} />
            <WelcomeContent>
                <WelcomeTitle>Boa noite!</WelcomeTitle>
                <UserName>Arnaldo</UserName>
            </WelcomeContent>
        </Container>
    )
}
