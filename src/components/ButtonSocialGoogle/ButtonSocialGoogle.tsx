import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Button, IconeGoogle, Title, Shadow } from './styles'

import GoogleIcon from "../../assets/google.png"

interface Props extends RectButtonProps {
    title: string
}

const ButtonSocialGoogle: React.FC<Props> = ({ title, ...rest}) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <Shadow>
            <Button { ...rest }>
                <IconeGoogle source={GoogleIcon} resizeMode="contain"/>
                <Title>{title}</Title>
            </Button>
        </Shadow>
    </GestureHandlerRootView>
  )
}

export { ButtonSocialGoogle }
