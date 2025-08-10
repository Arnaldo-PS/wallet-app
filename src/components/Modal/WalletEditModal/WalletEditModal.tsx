import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
    Container,
    ModalTitle,
    Title,
    ObservableContainer,
    ModalActions,
    ColorContainer,
    ColorCircle
} from './styles'
import { TouchableOpacity } from 'react-native'
import InputModal from '@src/components/Input/InputModal';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native';
import { ButtonBottomSheet } from '@src/components/Button/ButtonBottomSheet'

type WalletEditModalProps = {
    visible: boolean;
    onClose: () => void;
    wallet?: any;
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

    const [selectedColor, setSelectedColor] = useState(null);
    const [observable, setObservable] = useState(false);

    const bottomSheetRef = useRef<BottomSheet>(null);

    useEffect(() => {
        if (visible) {
            bottomSheetRef.current?.expand();
        } else {
            bottomSheetRef.current?.close();
        }
    }, [visible]);

    const backDrop = useCallback((props: any) => (
        <BottomSheetBackdrop
            {...props}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
            style={{ backgroundColor: COLORS.BLACK_200 }}
        />
    ), [])

    useEffect(() => {
        if (wallet) {
            setSelectedColor(wallet.color || COLORS[0]);
            setObservable(wallet.observable ?? false);
        }
    }, [wallet]);

    return (
        <BottomSheet
            ref={bottomSheetRef}
            index={-1}
            handleIndicatorStyle={{ backgroundColor: "transparent" }}
            backgroundStyle={{ backgroundColor: COLORS.BLACK_200 }}
            backdropComponent={backDrop}
            enablePanDownToClose={true}
            onClose={onClose}
        >
            <BottomSheetView>
                <Container >
                    <ModalTitle>{modalTitle}</ModalTitle>
                    <Title>Nome *</Title>
                    <InputModal placeholder='Nome da carteira'>{wallet?.title}</InputModal>
                    <Title>Saldo *</Title>
                    <InputModal placeholder='0,00'>{wallet?.amount}</InputModal>
                    <Title>Cor</Title>
                    <ColorContainer>
                        {COLORSMAP.map((color) => (
                            <ColorCircle
                                key={color}
                                color={color}
                                selected={wallet?.iconColor === color}
                                onPress={() => setSelectedColor(color)}
                            />
                        ))}
                    </ColorContainer>
                    <ObservableContainer>
                        <Title>Incluir no saldo total</Title>
                        <TouchableOpacity onPress={() => setObservable(prev => !prev)}>
                            <MaterialCommunityIcons
                                name={observable ? 'eye-outline' : 'eye-off-outline'}
                                size={28}
                                color={observable ? COLORS.GREEN4 : COLORS.WHITE}
                            />
                        </TouchableOpacity>
                    </ObservableContainer>

                    <ModalActions>
                        <ButtonBottomSheet
                            titleColor={ COLORS.WHITE }
                            color={ COLORS.BLACK_300 }
                            title={"Cancelar"}
                            onPress={() => onClose()}
                        />
                        <ButtonBottomSheet
                            titleColor={ COLORS.BLACK }
                            color={ COLORS.GREEN4 }
                            title={submitName}
                            onPress={() => { }}
                        />
                    </ModalActions>
                </Container>
            </BottomSheetView>
        </BottomSheet>
    )
}
