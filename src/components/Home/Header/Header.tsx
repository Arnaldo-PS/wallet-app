import React from 'react'
import {
    Container,
    UserPhoto,
    WelcomeContent,
    WelcomeTitle,
    UserName,
    PhotoContainer
} from './styles'

export const Header = () => {

    const hora = new Date().getHours();

    const saudacao = () => {
        if (hora >= 5 && hora < 12) return "Bom dia!";
        if (hora >= 12 && hora < 18) return "Boa tarde!";
        return "Boa noite!";
    }

    return (
        <Container>
            <PhotoContainer>
                <UserPhoto source={require('../../../assets/caverinha.jpg')} />
            </PhotoContainer>
            <WelcomeContent>
                <WelcomeTitle>{saudacao()}</WelcomeTitle>
                <UserName>Arnaldo</UserName>
            </WelcomeContent>
        </Container>
    )
}
