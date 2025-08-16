import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    width: 100%;
    height: 45px;
    padding: ${RFValue(3)}px;
    margin-top: ${RFValue(6)}px;
    margin-bottom: ${RFValue(12)}px;
    border-radius: 16px;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.BLACK_300};
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.WHITE + '50'};
`;

export const InputContainer = styled.TextInput`
    border: 0;
    flex: 1;
    height: 50px;
    font-size: 16px;
    border-radius: 8px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
    margin-left: 5px;
    color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const LeftIcon = styled.View`

`;

export const RightIcon = styled.View`

`;
