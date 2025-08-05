import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 60px;
    padding: 0 12px;
    margin-top: 10px;
    border-radius: 8px;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY6};
`;

export const InputContainer = styled.TextInput`
    border: 0;
    flex: 1;
    height: 50px;
    font-size: 16px;
    border-radius: 8px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
    margin-left: 5px;
    /* background-color: tomato; */
`;

export const LeftIcon = styled.View`

`;

export const RightIcon = styled.View`

`;
