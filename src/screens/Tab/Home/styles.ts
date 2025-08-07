import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BLACK_100};
    align-items: center;
    justify-content: center;
    padding: ${RFValue(10)}px;
`;

export const Header = styled.View`
    padding-top: ${RFValue(10)}px;
    width: 100%;
    gap: ${RFValue(10)}px;
`;

export const BalanceConteiner = styled.View`
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

export const Body = styled.View`
    padding-top:${RFValue(20)}px;
    flex: 1;
    width: 100%;
    gap: ${RFValue(10)}px;
`;

export const BudgetConteiner = styled.View`
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

export const Footer = styled.View`
`;

export const RecordsConteiner = styled.View`

`;

export const ButtonConteiner = styled.View`
    justify-content: center;
    flex-direction: row;
    gap: ${RFValue(10)}px;
    background-color: ${({ theme }) => theme.COLORS.BLACK_200};
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
