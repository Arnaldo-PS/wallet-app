import React, { useState } from 'react'
import { AntDesign, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components'
import { Container, InputContainer, LeftIcon, RightIcon } from './styles'
import { TextInputProps, TouchableOpacity } from 'react-native';

interface InputProps extends TextInputProps{
    rightIcon?: boolean;
    leftIcon?: boolean;
    iconName: keyof typeof AntDesign.glyphMap;
    iconSize?: number;
    iconColor?: string;
    secureTextEntry?: boolean;
}

const Input = ({
    rightIcon,
    leftIcon,
    iconName,
    iconSize,
    iconColor,
    secureTextEntry,
    ...rest
}: InputProps) => {
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
