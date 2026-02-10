import React, { useState } from 'react'
import { AntDesign, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components'
import { Container, InputContainer, LeftIcon, RightIcon } from './styles'
import { TextInputProps, TouchableOpacity } from 'react-native';

interface InputModalProps extends TextInputProps{
    rightIcon?: boolean;
    leftIcon?: boolean;
    iconName: keyof typeof AntDesign.glyphMap;
    iconSize?: number;
    iconColor?: string;
    secureTextEntry?: boolean;
    placeholder?: string;
}

const Input = ({
    rightIcon,
    leftIcon,
    iconName,
    iconSize,
    iconColor,
    secureTextEntry,
    placeholder,
    ...rest
}: InputModalProps) => {
    const { COLORS } = useTheme();

    const [secury, setSecury] = useState();

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
                secureTextEntry={secury}
                underlineColorAndroid='transparent'
                placeholderTextColor={COLORS.GRAY3}
                placeholder={placeholder}
            />
            {rightIcon && (
                <RightIcon>
                    <TouchableOpacity onPress={() => setSecury(!secury)}>
                        <MaterialCommunityIcons
                            name={secury ? 'eye' : 'eye-off'}
                            size={iconSize}
                            color={iconColor || COLORS.GRAY3}
                        />
                    </TouchableOpacity>
                </RightIcon>
            )}
        </Container>
    )
}

export default Input
