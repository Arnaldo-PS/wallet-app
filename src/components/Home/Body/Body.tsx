import React from 'react'
import {
    Container,
    BalanceContainer,
    BalanceTitle,
    BalanceAmount,
    BudgetContainer,
    CashInTitle,
    CashInAmount,
    CashOutTitle,
    CashOutAmount,
    ButtonContainer,
    CashInContainer,
    CashOutContainer,
    BalanceContent,
    BudgetButtonContainer,
    BalanceImage
} from './styles'
import { ButtonIcon } from '@src/components/ButtonIcon'
import Wallet from '@assets/wallet.svg';
import { useTheme } from 'styled-components';

export const Body = () => {

    const { COLORS } = useTheme();

    return (
        <Container>
            <BalanceContent>
                <BalanceContainer>
                    <BalanceTitle>Saldo atual</BalanceTitle>
                    <BalanceAmount>$12,000.00</BalanceAmount>
                </BalanceContainer>
                <BalanceImage>
                    <Wallet width={38} height={38} fill={COLORS.GRAY4}/>
                </BalanceImage>
            </BalanceContent>
            <BudgetButtonContainer>
                <BudgetContainer>
                    <CashInContainer>
                        <CashInTitle>Entradas</CashInTitle>
                        <CashInAmount>$8,000.00</CashInAmount>
                    </CashInContainer>

                    <CashOutContainer>
                        <CashOutTitle>Saídas</CashOutTitle>
                        <CashOutAmount>$3,000.00</CashOutAmount>
                    </CashOutContainer>
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
                        iconName="piggy"
                        variant="home"
                        onPress={() => { }}
                    />
                    <ButtonIcon
                        title="Carteiras"
                        iconName="wallet"
                        variant="home"
                        onPress={() => { }}
                    />
                </ButtonContainer>
            </BudgetButtonContainer>
        </Container>
    )
}
