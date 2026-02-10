import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    gap: ${RFValue(10)}px;
`;

// SALDO ATUAL

export const BalanceContent = styled(TouchableOpacity)`
    flex-direction: row;
`;

export const BalanceContainer = styled.View`
    padding-left: ${RFValue(12)}px;
    background-color: ${({ theme }) => theme.COLORS.BLACK_200};
    border-radius: 12px;
    width: 100%;
`;

export const BalanceImage = styled.View`
    margin-left: -${RFValue(50)}px;
    margin-top: ${RFValue(16)}px;
`;

export const BalanceTitle = styled.Text`
    padding-left: ${RFValue(3)}px;
    line-height: ${RFValue(14)}px;
    padding-top: ${RFValue(8)}px;
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.COLORS.GRAY4};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const BalanceAmount = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: ${RFValue(24)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

// ENTRADAS E SAIDAS

export const BudgetButtonContainer = styled.View`
    background-color: ${({ theme }) => theme.COLORS.BLACK_200};
    border-radius: 12px;
    padding: ${RFValue(5)}px;
    padding-bottom: ${RFValue(10)}px;
`;

export const BudgetContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-right: ${RFValue(15)}px;
    padding-left: ${RFValue(15)}px;
    margin-bottom: -${RFValue(10)}px;
`;

export const CashInContainer = styled(TouchableOpacity)`
    align-items: center;
    border-radius: 12px;
    padding: ${RFValue(5)}px;
`;

export const CashOutContainer = styled(TouchableOpacity)`
    align-items: center;
    border-radius: 12px;
    padding: ${RFValue(5)}px;
`;

export const CashInTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
    color: ${({ theme }) => theme.COLORS.GRAY4};
    font-size: ${RFValue(11)}px;
`;

export const CashInAmount = styled.Text`
    color: ${({ theme }) => theme.COLORS.GREEN4};
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const CashOutTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
    color: ${({ theme }) => theme.COLORS.GRAY4};
    font-size: ${RFValue(11)}px;
`;

export const CashOutAmount = styled.Text`
    color: ${({ theme }) => theme.COLORS.RED};
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

// BOTOES

export const ButtonContainer = styled.View`
    justify-content: center;
    flex-direction: row;
    gap: ${RFValue(24)}px;
    border-radius: 12px;
    padding: ${RFValue(14)}px;
    padding-top: ${RFValue(0)}px;
    padding-bottom: ${RFValue(0)}px;
`;
