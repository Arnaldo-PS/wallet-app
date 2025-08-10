import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
    width: 60px;
    height: 60px;
    align-items: center;
    justify-content: center;
    margin-top: ${RFValue(35)}px;
    margin-left: ${RFValue(35)}px;
    margin-right: ${RFValue(35)}px;
`;

export const Title = styled.Text<{titleColor: string}>`
    flex-direction: row;
    align-items: center;
    justify-content:center;
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
    color: ${({ titleColor }) => titleColor};
`;

export const Content = styled.View<{color: string}>`
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.COLORS.BLACK};
    background-color: ${({ color }) => color};
    width: ${RFValue(120)}px;
    height: ${RFValue(40)}px;
    border-radius: 12px;
`;
