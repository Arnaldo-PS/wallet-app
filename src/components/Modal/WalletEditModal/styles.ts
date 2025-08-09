import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.COLORS.BLACK_200};
    padding: ${RFValue(20)}px;
    border-radius: 25px;
`;

export const ModalTitle = styled.Text`
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
    padding-bottom: ${RFValue(10)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const ObservableContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-right: ${RFValue(6)}px;
`;

export const ModalActions = styled.View`

`;

export const CancelButton = styled.View`

`;

export const SubmitButton = styled.View`

`;

export const ModalContent = styled.View`
    flex: 1;
    justify-content: flex-end;
    align-items: center;
`;

export const ColorContainer = styled.View`
  flex-direction: row;
  margin-top: ${RFValue(6)}px;
  margin-bottom: ${RFValue(12)}px;
`;

export const ColorCircle = styled.TouchableOpacity<{ color: string; selected: boolean }>`
  width: ${RFValue(26)}px;
  height: ${RFValue(26)}px;
  border-radius: ${RFValue(16)}px;
  margin-horizontal: ${RFValue(4)}px;
  background-color: ${({ color }) => color};
  border-width: ${({ selected }) => (selected ? 3 : 0)}px;
  border-color: ${({ theme }) => theme.COLORS.WHITE};
`;
