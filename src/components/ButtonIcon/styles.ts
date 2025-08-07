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
    font-size: 18px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
    color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Content = styled.View`
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 12px;
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
    color: ${({ theme }) => theme.COLORS.BLACK};
`;
