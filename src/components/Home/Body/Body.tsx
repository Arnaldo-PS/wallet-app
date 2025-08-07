import React from 'react'
import {
    Container,
    BalanceContainer,
    BalanceTitle,
    BalanceAmount,
    BudgetContainer,
    CashTitle,
    CashInTitle,
    CashInAmount,
    CashOutTitle,
    CashOutAmount,
    CashAmount,
    ButtonContainer
} from './styles'
import { ButtonIcon } from '@src/components/ButtonIcon'


export const Body = () => {
    return (
        <Container>
            <BalanceContainer>
                <BalanceTitle>Saldo atual</BalanceTitle>
                <BalanceAmount>$ 12,000.00</BalanceAmount>
            </BalanceContainer>
            <BudgetContainer>
                <CashTitle>
                    <CashInTitle>Entradas</CashInTitle>
                    <CashOutTitle>Saídas</CashOutTitle>
                </CashTitle>
                <CashAmount>
                    <CashInAmount>$ 8,000.00</CashInAmount>
                    <CashOutAmount>$ 3,000.00</CashOutAmount>
                </CashAmount>
            </BudgetContainer>
            <ButtonContainer>
                <ButtonIcon
                    title="Entrada"
                    iconName="cash-plus"
                    variant="home"
                    onPress={() => { }}
                />
                <ButtonIcon
                    title="Saída"
                    iconName="cash-minus"
                    variant="home"
                    onPress={() => { }}
                />
                <ButtonIcon
                    title="Cofrinhos"
                    iconName="piggy-bank-outline"
                    variant="home"
                    onPress={() => { }}
                />
                <ButtonIcon
                    title="Carteiras"
                    iconName="cash-multiple"
                    variant="home"
                    onPress={() => { }}
                />
            </ButtonContainer>
        </Container>
    )
}
