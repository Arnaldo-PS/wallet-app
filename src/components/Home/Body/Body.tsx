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
import { ButtonIcon } from '@src/components/Button/ButtonIcon'
import Wallet from '@assets/wallet.svg';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

export const Body = () => {

    const { COLORS } = useTheme();
    const navigation = useNavigation();
    const balanceAmount = 23750;
    const cashIn = 7200;
    const cashOut = 2200;

    const handleWallet = () => {
        navigation.navigate('Wallet');
    }

    return (
        <Container>
            <BalanceContent>
                <BalanceContainer>
                    <BalanceTitle>Saldo atual</BalanceTitle>
                    <BalanceAmount>R$ {new Intl.NumberFormat('pt-BR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }).format(balanceAmount)}</BalanceAmount>
                </BalanceContainer>
                <BalanceImage onPress={handleWallet}>
                    <Wallet width={38} height={38} fill={COLORS.GRAY4} />
                </BalanceImage>
            </BalanceContent>
            <BudgetButtonContainer>
                <BudgetContainer>
                    <CashInContainer>
                        <CashInTitle>Entradas</CashInTitle>
                        <CashInAmount>R$ {new Intl.NumberFormat('pt-BR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }).format(cashIn)}</CashInAmount>
                    </CashInContainer>

                    <CashOutContainer>
                        <CashOutTitle>Saídas</CashOutTitle>
                        <CashOutAmount>R$ {new Intl.NumberFormat('pt-BR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }).format(cashOut)}</CashOutAmount>
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
