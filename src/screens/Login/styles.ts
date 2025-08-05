import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    padding: ${RFValue(5)}px;
    padding-top: ${RFValue(20)}px;
`;

export const ContentHeader = styled.View`
    padding: ${RFValue(20)}px;
    align-items: center;
    justify-content: center;
`;

export const ContentBody = styled.View`
    padding-left: 20px;
    padding-right: 20px;
`;

export const ContentFooter = styled.View`

`;

export const Title = styled.Text`
    text-align: center;
    font-size: ${RFValue(25)}px;
    margin-top: ${RFValue(40)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM}
`;

export const Description = styled.Text`
    margin-top: ${RFValue(60)}px;
    margin-bottom: ${RFValue(10)}px;
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT}
`;

export const ViewButton = styled.View`
    flex-direction: row;
    gap: ${RFValue(5)}px;
`;
