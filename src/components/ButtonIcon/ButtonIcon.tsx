import React from 'react'
import { TouchableOpacityProps } from 'react-native';
import { Container, Title, Content } from './styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { variants } from './Variant';
import { useTheme } from 'styled-components';

interface IButtonProps {
    onPress: () => void;
    title?: string,
    iconName?: keyof typeof MaterialCommunityIcons.glyphMap;
    disabled?: boolean;
    variant?: 'home';
    style?: TouchableOpacityProps['style'];
}

export const ButtonIcon: React.FC<IButtonProps> = ({
    onPress = () => { },
    title,
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
            onPress={onPress}
            style={[buttonStyle.button, style]}
        >
            <Content>
                {iconName && (
                    <MaterialCommunityIcons
                        name={iconName}
                        color={COLORS.BLUE_PURPLE}
                        style={{
                            marginRight: 0,
                        }}
                        size={40}
                    />
                )}
                <Title>{title}</Title>
            </Content>
        </Container>
    )
}
