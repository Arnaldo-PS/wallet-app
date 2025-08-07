import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    padding: ${RFValue(20)}px;
    background-color: ${({ theme }) => theme.COLORS.BLACK_100};
    height: 100%;
`;

export const ContentBody = styled.View`
    padding-left: ${RFValue(20)}px;
    padding-right: ${RFValue(20)}px;
`;

export const ContentHeader = styled.View`
    padding: ${RFValue(20)}px;
    align-items: center;
    justify-content: center;
    padding-top: ${RFValue(150)}px;
`;

export const Title = styled.Text`
    text-align: center;
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.COLORS.GREEN4};
    font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
`;

export const Description = styled.Text`
    text-align: center;
    font-size: ${RFValue(10)}px;
    color: ${({ theme }) => theme.COLORS.GRAY6};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;



