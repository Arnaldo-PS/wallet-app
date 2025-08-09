import theme from '../../../styles/theme'

interface ButtonStyle {
    button: {
        backgroundColor: string;
        borderWidth?: number;
        borderColor?: string;
    };

    icon?: {
        color: string;
    }
};

export interface ButtonVariant {
    enabled: ButtonStyle;
    disabled: ButtonStyle;
}

const buttonHome: ButtonVariant = {
    enabled: {
        button:{
            backgroundColor: 'transparent',
            //borderColor: theme.COLORS.GREEN4,
            borderWidth: 1
        },
        icon:{
            color: theme.COLORS.WHITE,
        }
    },
    disabled: {
        button:{
            backgroundColor: theme.COLORS.GRAY_100,
        },
        icon:{
            color: theme.COLORS.WHITE,
        }
    }
}

export const variants = {
    home: buttonHome,
}
