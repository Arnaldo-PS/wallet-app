import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.COLORS.BLACK_200};
    padding: ${RFValue(20)}px;
    padding-top: ${RFValue(0)}px;
    border-radius: 25px;
    height: 550px;
`;

export const ModalTitle = styled.Text<{ titleColor?: string }>`
    align-self: center;
    font-size: ${RFValue(16)}px;
    color: ${({ titleColor, theme }) => titleColor || theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
    padding-bottom: ${RFValue(20)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const ModalActions = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const CancelButton = styled.View`

`;

export const SubmitButton = styled.View`

`;

export const DropdownContainer = styled.TouchableOpacity`
    margin-top: ${RFValue(6)}px;
    height: 50px;
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.WHITE + '50'};
    border-radius: 16px;
    padding-horizontal: ${RFValue(12)}px;
    background-color: ${({ theme }) => theme.COLORS.BLACK_300};
    justify-content: center;
    margin-bottom: ${RFValue(12)}px;
`;

export const DropdownText = styled.Text<{ isPlaceholder?: boolean }>`
    font-size: 16px;
    color: ${({ theme, isPlaceholder }) => isPlaceholder ? '#aaa' : theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`;
