import styled from "styled-components/native";

export const Container = styled.View`
    height: 60px;
    width: 100%;
    padding: 0 12px;
    justify-content: center;
    border-radius: 8px;
    margin-top: 10px;
    flex-direction: row;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY6};
`;

export const InputContainer = styled.TextInput`
    border: 0;
    width: 85%;
    height: 45px;
    border-radius: 8px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
    font-size: 14px;
`;

export const LeftIcon = styled.View`
    position: absolute;
    left: 10px;
`;

export const RightIcon = styled.View`
    position: absolute;
    right: 10px;
`;
