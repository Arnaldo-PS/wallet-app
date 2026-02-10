import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Pressable } from "react-native";

export const Container = styled.View`
    padding: ${RFValue(5)}px;
    padding-top: ${RFValue(20)}px;
    height: 100%;
    background-color: ${({ theme }) => theme.COLORS.BLACK_100};
`;

export const ContentHeader = styled.View`
    width: 100%;
    padding: ${RFValue(20)}px;
    align-items: center;
    justify-content: center;
    padding-bottom: ${RFValue(90)}px;
    padding-top: ${RFValue(80)}px;
`;

export const ContentBody = styled.View`
    padding-left: 20px;
    padding-right: 20px;
`;

export const Title = styled.Text`
    text-align: center;
    font-size: ${RFValue(32)}px;
    margin-top: ${RFValue(40)}px;
    color: ${({ theme }) => theme.COLORS.GREEN4};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const Description = styled.Text`
    margin-top: ${RFValue(80)}px;
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`;

export const ViewButton = styled.View`
    padding: ${RFValue(40)}px;
    padding-top: ${RFValue(10)}px;
    gap: ${RFValue(20)}px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const ContentFooter = styled.View`
    margin-top: 10px;
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
    color: ${({ theme }) => theme.COLORS.GRAY4};
`;

export const TitleButtonSignUp2 = styled.Text`
    font-size: 16px;
    margin-left: 10px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
    color: ${({ theme }) => theme.COLORS.GREEN4};
`;

export const ContentForgotPassword = styled.View`
    width:100%;
    padding-top: 10px;
    padding-right: 10px;
    align-items: flex-end;
    justify-content: flex-end;
`;

export const ContentButtonForgotPassword = styled(Pressable)`
    justify-content: flex-end;
`;

export const ContentTextForgotPassword = styled.Text`
    align-items: flex-end;
    font-size: 16px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
    color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const TextDivider = styled.Text`
    font-size: 16px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;
