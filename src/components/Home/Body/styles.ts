import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    padding-top:${RFValue(20)}px;
    width: 100%;
    gap: ${RFValue(10)}px;
`;

export const BalanceContainer = styled.View`
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.BLACK_200};
    border-radius: 12px;
`;

export const BalanceTitle = styled.Text`
    padding-top: ${RFValue(8)}px;
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const BalanceAmount = styled.Text`
    color: ${({ theme }) => theme.COLORS.GREEN4};
    font-size: ${RFValue(22)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const BudgetContainer = styled.View`
    padding:${RFValue(10)}px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.BLACK_200};
    border-radius: 12px;
`;

export const CashInTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: ${RFValue(11)}px;
`;

export const CashInAmount = styled.Text`
    color: ${({ theme }) => theme.COLORS.GREEN4};
    font-size: 24;
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const CashOutTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: ${RFValue(11)}px;
`;

export const CashOutAmount = styled.Text`
    color: ${({ theme }) => theme.COLORS.RED};
    font-size: 24;
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const ButtonContainer = styled.View`
    justify-content: center;
    flex-direction: row;
    gap: ${RFValue(24)}px;
    border-radius: 12px;
    padding: ${RFValue(14)}px;
    padding-top: ${RFValue(0)}px;
`;

export const CashTitle = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    padding-bottom: ${RFValue(5)}px;
    padding-horizontal: ${RFValue(40)}px;
`;

export const CashAmount = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    padding-horizontal: ${RFValue(10)}px;
`;
