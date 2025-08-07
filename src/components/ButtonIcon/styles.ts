import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    align-items: center;
    justify-content: center;
    margin-top: ${RFValue(15)}px;
    border-radius: ${RFValue(25)}px;
`;

export const Title = styled.Text`
    flex-direction: row;
    align-items: center;
    justify-content:center;
    font-size: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
    color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Content = styled.View`
    align-items: center;
    justify-content: center;
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
    color: ${({ theme }) => theme.COLORS.BLACK};
    background-color: ${({ theme }) => theme.COLORS.BLACK_200};
    width: ${RFValue(60)}px;
    height: ${RFValue(60)}px;
    border-radius: 12px;
`;
