import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    padding: ${RFValue(10)}px;
    flex-direction: row;
    gap: ${RFValue(10)}px;
`;

export const WelcomeContent = styled(TouchableOpacity)`

`;

export const UserPhoto = styled.Image`
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    width: ${RFValue(46)}px;
    height: ${RFValue(46)}px;
    border-radius: ${RFValue(25)}px;
`;

export const WelcomeTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
    color: ${({ theme }) => theme.COLORS.GRAY4};
    font-size: ${RFValue(10)}px;
    margin-top: ${RFValue(5)}px;
`;

export const UserName = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.POPPINSBOLD};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: ${RFValue(15)}px;
    margin-top: -${RFValue(5)}px;
`;

export const PhotoContainer = styled(TouchableOpacity)`

`;
