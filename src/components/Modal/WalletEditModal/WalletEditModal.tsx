import React, { useEffect, useMemo, useRef, useState } from 'react'
import {
    Container,
    ModalTitle,
    Title,
    ObservableContainer,
    ModalActions,
    CancelButton,
    SubmitButton,
    ModalContent,
    ColorContainer,
    ColorCircle
} from './styles'
import { TouchableOpacity, View, Text } from 'react-native'
import InputModal from '@src/components/Input/InputModal';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native';
import BottomSheet from '@gorhom/bottom-sheet';

type WalletEditModalProps = {
    visible: boolean;
    onClose: () => void;
    wallet: any;
    modalTitle: string;
    submitName: string;
}

export const WalletEditModal = ({
    visible,
    onClose,
    wallet,
    modalTitle,
    submitName,
}: WalletEditModalProps) => {

    const { COLORS } = useTheme();
    const COLORSMAP = ['#4CAF50', '#2196F3', '#FFC107', '#9C27B0', '#F44336', '#E91E63', '#00BCD4', '#8BC34A'];

    const [selectedColor, setSelectedColor] = useState(wallet?.color || COLORS[0]);
    const [observable, setObservable] = useState(false);

    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ['50%'], []);

    useEffect(() => {
        if(visible) {
            bottomSheetRef.current?.snapToIndex(0);
        } else {
            bottomSheetRef.current?.close();
        }
    }, [visible])

    return (
        <BottomSheet
            ref={bottomSheetRef}
            index={-1}
            snapPoints={snapPoints}
            enablePanDownToClose
            onClose={onClose}
            backgroundStyle= {{ backgroundColor: COLORS.BLACK_200}}
            handleIndicatorStyle= {{ backgroundColor: COLORS.BLACK_300}}
        >
            <ModalContent>
                <Container >

                    <ModalTitle>{modalTitle}</ModalTitle>
                    <Title>Nome *</Title>
                    <InputModal placeholder='Nome da carteira' />
                    <Title>Saldo *</Title>
                    <InputModal placeholder='0,00'/>
                    <Title>Cor</Title>
                    <ColorContainer>
                        {COLORSMAP.map((color) => (
                            <ColorCircle
                                key={color}
                                color={color}
                                selected={selectedColor === color}
                                onPress={() => setSelectedColor(color)}
                            />
                        ))}
                    </ColorContainer>
                    <ObservableContainer>
                        <Title>Incluir no saldo total</Title>
                        <TouchableOpacity onPress={() => setObservable}>
                            <MaterialCommunityIcons
                                name={observable ? 'eye-outline' : 'eye-off-outline'}
                                size={28}
                                color={observable ? COLORS.GREEN4 : COLORS.WHITE}
                            />
                        </TouchableOpacity>
                    </ObservableContainer>

                    <ModalActions>
                        <CancelButton></CancelButton>
                        <SubmitButton></SubmitButton>
                    </ModalActions>

                    <View >
                        <TouchableOpacity

                            onPress={() => onClose()}
                        >
                            <Text style={{ color: '#fff' }}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity

                            onPress={() => onClose()}
                        >
                            <Text style={{ color: '#fff' }}>{submitName}</Text>
                        </TouchableOpacity>
                    </View>
                </Container>
            </ModalContent>
        </BottomSheet>
    )
}
