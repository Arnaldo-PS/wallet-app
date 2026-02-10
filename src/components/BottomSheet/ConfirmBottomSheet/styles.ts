import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.COLORS.BLACK_200};
    padding: ${RFValue(20)}px;
    padding-top: ${RFValue(0)}px;
    border-radius: 25px;
    height: 260px;
`;

export const ModalTitle = styled.Text<{ titleColor?: string }>`
    align-self: center;
    font-size: ${RFValue(16)}px;
    color: ${({ titleColor, theme }) => titleColor || theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
    padding-bottom: ${RFValue(20)}px;
`;

export const ModalActions = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const CancelButton = styled.View`

`;

export const SubmitButton = styled.View`

`;
