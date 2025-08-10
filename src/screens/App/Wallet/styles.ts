import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.COLORS.BLACK_100};
    justify-content: center;
    padding: ${RFValue(10)}px;
`;

// HEADER

export const Header = styled.View`
    margin-top: ${RFValue(70)}px;
    flex-direction: row;
    justify-content: space-between;
`;

export const BackButton = styled.View`
    flex-direction: row;
    gap: ${RFValue(10)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
    margin-top: -${RFValue(2)}px;
`;

export const NewButton = styled(TouchableOpacity)`
    width: 80px;
    height: 30px;
    background-color: ${({ theme }) => theme.COLORS.GREEN4};
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    margin-right: ${RFValue(5)}px;
`;

export const NewButtonTitle = styled.Text`
    font-size: ${RFValue(13)}px;
    color: ${({ theme }) => theme.COLORS.BLACK};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

// BODY

export const Body = styled.View`
    width: 100%;
    height: 100%;
`;

export const BudgetContainer = styled.View`
    padding: ${RFValue(15)}px;
    margin-top: ${RFValue(10)}px;
    margin-bottom: ${RFValue(10)}px;
    background-color: ${({ theme }) => theme.COLORS.BLACK_200};
    border-radius: 12px;
`;

export const BudgetTitleContainer = styled.View`
    flex-direction: row;
    gap: 3px;
`;

export const BudgetTitle = styled.Text`
    padding-left: ${RFValue(3)}px;
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.COLORS.GREEN4};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const WalletTitleContainer = styled.View`
    flex-direction: row;
    gap: ${RFValue(10)}px;
`;

export const BudgetAmount = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: ${RFValue(24)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const WalletCounter = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY4};
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const WalletContainer = styled.View`
    padding: ${RFValue(12)}px;
    margin-top: ${RFValue(10)}px;
    background-color: ${({ theme }) => theme.COLORS.BLACK_200};
    border-radius: 12px;
`;

export const WalletContent = styled.View`
`;

export const WalletIcon = styled.View`
    width:18px;
    height:18px;
    border-radius:25px;
    background-color: ${({ color }) => color};
    margin-top: ${RFValue(14)}px;
`;

export const WalletTitle = styled.Text`
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`;

export const WalletAmount = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const WalletActions = styled.View`
    flex-direction: row;
    gap: ${RFValue(8)}px;
    margin-top: ${RFValue(13)}px;
`;

export const ObservableText = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY4};
    font-size: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
    margin-top: ${RFValue(5)}px;
`;

export const WalletDescription = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;
