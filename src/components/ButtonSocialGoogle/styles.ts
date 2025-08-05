import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from "react-native-responsive-fontsize";

export const Button = styled(RectButton)`
    flex-direction: row;
    align-items: center;
    width: ${RFValue(105)}px;
    height: ${RFValue(50)}px;
    justify-content: center;
    border-radius: ${RFValue(16)}px;
    background-color: ${({ theme }) => theme.COLORS.WHITE_100};
`;

export const IconeGoogle = styled.Image`
    width: ${RFValue(25)}px;
    height: ${RFValue(25)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(13)}px;
    margin-left: ${RFValue(7)}px;
    color: ${({ theme }) => theme.COLORS.GRAY3};
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`;

export const Shadow = styled.View`
    shadow-color: #000;
    shadow-offset: 0px 3px;
    shadow-opacity: 0.2;
    shadow-radius: 4.65px;
    elevation: 5;
    border-radius: ${RFValue(10)}px;
    background-color: transparent;
`;


