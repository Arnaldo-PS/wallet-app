import React from 'react'
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { Container, Title, Content } from './styles'
import { AntDesign } from '@expo/vector-icons'
import { variants } from './Variant';
import { useTheme } from 'styled-components';

interface IButtonProps {
    title: string;
    onPress: () => void;
    iconName?: keyof typeof AntDesign.glyphMap;
    isLoading?: boolean;
    disabled?: boolean;
    variant?: 'primary' | 'outline' | 'black';
    style?: TouchableOpacityProps['style'];
}

export const Button: React.FC<IButtonProps> = ({
    title,
    onPress = () => { },
    isLoading,
    iconName,
    disabled,
    variant = 'primary',
    style,
}) => {
    const { COLORS } = useTheme();
    const buttonVariant = variants[variant]
    const buttonStyle = disabled ? buttonVariant.disabled : buttonVariant.enabled

    return (
        <Container
            disabled={isLoading || disabled}
            onPress={onPress}
            style={[buttonStyle.button, style]}
        >
            {isLoading? (
                <ActivityIndicator color={COLORS.GRAY1} />
            ) : (
                <Content>
                    {iconName && (
                        <AntDesign
                            name={iconName}
                            color={buttonStyle.icon.color}
                            style={{
                                marginRight: 15,
                            }}
                            size={25}
                        />
                    )}
                </Content>
            )}
            <Title>{title}</Title>
        </Container>
    )
}
