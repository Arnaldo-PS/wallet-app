import React from 'react'
import { TouchableOpacityProps } from 'react-native';
import { Container, Title, Content } from './styles'
import { variants } from './Variant';

interface IButtonBottomSheetProps {
    onPress: () => void;
    title?: string,
    disabled?: boolean;
    variant?: 'home';
    style?: TouchableOpacityProps['style'];
    color: string;
    titleColor: string;
}

export const ButtonBottomSheet: React.FC<IButtonBottomSheetProps> = ({
    onPress = () => { },
    title,
    disabled,
    variant = 'home',
    style,
    color,
    titleColor
}) => {
    const buttonVariant = variants[variant]
    const buttonStyle = disabled ? buttonVariant.disabled : buttonVariant.enabled

    return (
        <Container
            onPress={onPress}
            style={[buttonStyle.button, style]}
        >
            <Content color={color}>
                <Title titleColor={titleColor}>{title}</Title>
            </Content>
        </Container>
    )
}
