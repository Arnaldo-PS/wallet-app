import React from 'react'
import {
    Container,
    Header,
    BalanceConteiner,
    BalanceTitle,
    BalanceAmount,
    Body,
    BudgetConteiner,
    CashInTitle,
    CashInAmount,
    CashOutTitle,
    CashOutAmount,
    Footer,
    RecordsConteiner,
    CashTitle,
    CashAmount,
    ButtonConteiner,
    HeaderContent,
    UserPhoto,
    WelcomeTitle
} from './styles'
import { ButtonIcon } from '@src/components/ButtonIcon'

export const Home = () => {
    return (
        <Container>

            <Header>
                <HeaderContent>
                    <UserPhoto />
                    <WelcomeTitle>Boa noite, {'\n'} Arnaldo</WelcomeTitle>
                </HeaderContent>
            </Header>

            <Body>
                <BalanceConteiner>
                    <BalanceTitle>Saldo atual</BalanceTitle>
                    <BalanceAmount>$ 12,000.00</BalanceAmount>
                </BalanceConteiner>
                <BudgetConteiner>
                    <CashTitle>
                        <CashInTitle>Entradas</CashInTitle>
                        <CashOutTitle>Saídas</CashOutTitle>
                    </CashTitle>
                    <CashAmount>
                        <CashInAmount>$ 8,000.00</CashInAmount>
                        <CashOutAmount>$ 3,000.00</CashOutAmount>
                    </CashAmount>
                </BudgetConteiner>
                <ButtonConteiner>
                    <ButtonIcon
                        iconName="cash-plus"
                        variant="home"
                        onPress={() => { }}
                    />
                    <ButtonIcon
                        iconName="cash-minus"
                        variant="home"
                        onPress={() => { }}
                    />
                    <ButtonIcon
                        iconName="piggy-bank-outline"
                        variant="home"
                        onPress={() => { }}
                    />
                    <ButtonIcon
                        iconName="cash-multiple"
                        variant="home"
                        onPress={() => { }}
                    />
                </ButtonConteiner>
            </Body>

            <Footer>
                <RecordsConteiner>

                </RecordsConteiner>
            </Footer>

        </Container>
    )
}
