import React from 'react'
import { TouchableOpacityProps } from 'react-native';
import { Container, Title, Content } from './styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { variants } from './Variant';
import { useTheme } from 'styled-components';
import cashIn from '@assets/cash-in.svg'
import cashOut from '@assets/cash-out.svg'
import piggy from '@assets/piggy-plus.svg'
import wallet from '@assets/wallet-plus.svg'

interface IButtonProps {
    onPress: () => void;
    title?: string,
    iconName?: 'cash-plus' | 'cash-minus' | 'piggy' | 'wallet';
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

      const iconsMap = {
        'cash-plus': cashIn,
        'cash-minus': cashOut,
        'piggy': piggy,
        'wallet': wallet,
        };

        const IconComponent = iconName ? iconsMap[iconName] : null;

    return (
        <Container
            onPress={onPress}
            style={[buttonStyle.button, style]}
        >
            <Content>
                {IconComponent && <IconComponent width={35} height={35} fill={COLORS.GRAY4} />}
                <Title>{title}</Title>
            </Content>
        </Container>
    )
}
