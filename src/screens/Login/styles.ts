import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Pressable } from "react-native";

export const Container = styled.View`
    padding: ${RFValue(5)}px;
    padding-top: ${RFValue(20)}px;
`;

export const ContentHeader = styled.View`
    width: 100%;
    padding: ${RFValue(20)}px;
    align-items: center;
    justify-content: center;
`;

export const ContentBody = styled.View`
    padding-left: 20px;
    padding-right: 20px;
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

export const ContentFooter = styled.View`
    margin-top: 30px;
    align-items: center;
    justify-content: center;
`;

export const ButtonSignUp = styled(Pressable)`
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const TitleButtonSignUp1 = styled.Text`
    font-size: 16px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
    color: ${({ theme }) => theme.COLORS.GRAY4}
`;

export const TitleButtonSignUp2 = styled.Text`
    font-size: 16px;
    margin-left: 10px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
    color: ${({ theme }) => theme.COLORS.BLUE}
`;
