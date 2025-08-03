import React from 'react'
import { Fontisto } from '@expo/vector-icons';
import { RectButtonProps } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Button, Title, Shadow, FacebookIcon } from './styles'

interface Props extends RectButtonProps {
    title: string
    iconName: React.ComponentProps<typeof Fontisto>["name"]
}

const ButtonSocial: React.FC<Props> = ({ title, iconName, ...rest}) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <Shadow>
            <Button { ...rest }>
                <FacebookIcon name={iconName}/>
                <Title>{title}</Title>
            </Button>
        </Shadow>
    </GestureHandlerRootView>
  )
}

export { ButtonSocial }
