import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 60px;
    align-items: center;
    justify-content: center;
    margin-top: ${RFValue(15)}px;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    border-radius: ${RFValue(16)}px;
`;

export const Title = styled.Text`
    flex-direction: row;
    align-items: center;
    justify-content:center;
    font-size: 18px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
    color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Content = styled.View`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
    color: ${({ theme }) => theme.COLORS.BLACK};
`;
