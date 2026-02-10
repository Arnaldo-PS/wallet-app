import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BLACK_100};
    justify-content: center;
    padding: ${RFValue(10)}px;
`;

export const HeaderContent = styled.View`
    padding-top: ${RFValue(10)}px;
    width: 100%;
    gap: ${RFValue(10)}px;
`;

export const Footer = styled.View`
    flex: 1;
    padding-top: ${RFValue(10)}px;
`;

export const RecordsConteiner = styled.View`
    background-color: ${({ theme }) => theme.COLORS.BLACK_200};
    border-radius: 12px;
    width: 100%;
`;

export const ContentFlat = styled.View`

`;

export const ContentFlatIcon = styled.Image`

`;

export const ContentFlatTitle = styled.Text`
    padding-top: ${RFValue(3)}px;
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const ContentFlatSubTitle = styled.Text`
    font-size: ${RFValue(9)}px;
    color: ${({ theme }) => theme.COLORS.GRAY4};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const ContentFlatDescription = styled.View`
    flex: auto;
    flex-direction: column;
`;

export const ContentFlatAmount = styled.Text`
    padding-top: ${RFValue(10)}px;
    padding-right: ${RFValue(10)}px;
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const ContentFlatHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const ContentFlatBody = styled(TouchableOpacity)`
    flex-direction: row;
    padding: ${RFValue(5)}px;
`;

export const ContentFlatHeaderTitle = styled.Text`
    padding: ${RFValue(10)}px;
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const ContentFlatHeaderButton = styled.Text`
    padding: ${RFValue(10)}px;
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.COLORS.BLUE_PURPLE};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const RecordsButton = styled(TouchableOpacity)`

`;
