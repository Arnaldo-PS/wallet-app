import React from 'react'
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { Container, Title, Content } from './styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { variants } from './Variant';
import { useTheme } from 'styled-components';

interface IButtonProps {
    onPress: () => void;
    iconName?: keyof typeof MaterialCommunityIcons.glyphMap;
    isLoading?: boolean;
    disabled?: boolean;
    variant?: 'home';
    style?: TouchableOpacityProps['style'];
}

export const ButtonIcon: React.FC<IButtonProps> = ({
    onPress = () => { },
    isLoading,
    iconName,
    disabled,
    variant = 'home',
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
            {isLoading ? (
                <ActivityIndicator color={COLORS.GRAY1} />
            ) : (
                <Content>
                    {iconName && (
                        <MaterialCommunityIcons
                            name={iconName}
                            color={COLORS.GREEN4}
                            style={{
                                marginRight: 0,
                            }}
                            size={35}
                        />
                    )}
                </Content>
            )}
        </Container>
    )
}
