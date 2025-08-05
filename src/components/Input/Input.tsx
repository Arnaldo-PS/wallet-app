import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components'
import { Container, InputContainer, LeftIcon, RightIcon } from './styles'
import { TextInputProps } from 'react-native';

interface InputProps {
    rightIcon?: boolean;
    leftIcon?: boolean;
    iconName: string;
    iconSize?: number;
    iconColor?: string;
}

const Input: React.FC<InputProps & TextInputProps> = ({ rightIcon, leftIcon, iconName, iconSize, iconColor, ...rest }) => {
    const { COLORS } = useTheme();

    return (
        <Container>
            {leftIcon && (
                <LeftIcon>
                    <MaterialIcons
                        name={iconName}
                        size={iconSize}
                        color={iconColor || COLORS.BLACK}
                    />
                </LeftIcon>
            )}
            <InputContainer
                {...rest}
                placeholderTextColor={COLORS.BLACK}
            />
            {rightIcon && (
                <RightIcon>
                    <MaterialIcons
                        name={iconName}
                        size={iconSize}
                        color={iconColor || COLORS.BLACK}
                    />
                </RightIcon>
            )}
        </Container>
    )
}

export default Input
