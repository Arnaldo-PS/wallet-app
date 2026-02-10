import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
    Container,
    ModalTitle,
    ModalActions,
} from './styles'
import { useTheme } from 'styled-components/native';
import { ButtonBottomSheet } from '@src/components/Button/ButtonBottomSheet'

type ConfirmBottomSheetProps = {
    visible: boolean;
    onClose: () => void;
    modalTitle: string;
    submitName: string;
    titleColor?: string;
}

export const ConfirmBottomSheet = ({
    visible,
    onClose,
    modalTitle,
    titleColor,
    submitName,
}: ConfirmBottomSheetProps) => {

    const { COLORS } = useTheme();

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

    return (
        <>
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
                        <ModalTitle titleColor={titleColor}>{modalTitle}</ModalTitle>
                        <ModalActions>
                            <ButtonBottomSheet
                                titleColor={COLORS.WHITE}
                                color={COLORS.BLACK_300}
                                title={"Cancelar"}
                                onPress={() => onClose()}
                            />
                            <ButtonBottomSheet
                                titleColor={COLORS.BLACK}
                                color={COLORS.GREEN4}
                                title={submitName}
                                onPress={() => { }}
                            />
                        </ModalActions>
                    </Container>
                </BottomSheetView>
            </BottomSheet>
        </>
    )
};
