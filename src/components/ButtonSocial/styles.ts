import styled from "styled-components/native";
import { Fontisto } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from "react-native-responsive-fontsize";

export const Button = styled(RectButton)`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: ${RFValue(130)}px;
    height: ${RFValue(50)}px;
    border-radius: ${RFValue(10)}px;
    background-color: ${({ theme }) => theme.COLORS.BLUE};
`;

export const FacebookIcon = styled(Fontisto)`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Title = styled.Text`
    font-size: ${RFValue(17)}px;
    margin-left: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
    color: ${({ theme }) => theme.COLORS.WHITE};
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
