import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.COLORS.BLACK_200};
    padding: ${RFValue(20)}px;
    padding-top: ${RFValue(0)}px;
    border-radius: 25px;
    height: 550px;
`;

export const ModalTitle = styled.Text`
    align-self: center;
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
    margin-bottom: ${RFValue(20)}px;
`;

export const Wallet = styled(TouchableOpacity)`
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
    margin-bottom: ${RFValue(12)}px;
    background-color:  ${({ theme }) => theme.COLORS.BLACK_300};
    border-radius: 16px;
    align-items: center;
`;
