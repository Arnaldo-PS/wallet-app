import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import { FlatList, TouchableOpacity, Text, } from 'react-native';
import {
    Container,
    ModalTitle,
    Wallet
} from './styles'
import { useTheme } from 'styled-components/native';

type SelectWalletBottomSheetProps = {
    visible: boolean;
    onClose: () => void;
    modalTitle: string;
    onSelect: (account: { id: string; name: string }) => void;
}

export const SelectWalletBottomSheet = ({
    visible,
    onClose,
    onSelect,
    modalTitle
}: SelectWalletBottomSheetProps) => {

    const { COLORS } = useTheme();
    const accounts = [
        { id: '1', name: 'Conta Principal' },
        { id: '2', name: 'Poupança' },
        { id: '3', name: 'Carteira Física' },
        { id: '4', name: 'Reserva de Emergência' },
    ];

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

    const handleSelect = (account: { id: string; name: string }) => {
        onSelect(account);
        onClose();
    };

    return (
        <>
            <BottomSheet
                ref={bottomSheetRef}
                snapPoints={[400]}
                index={-1}
                handleIndicatorStyle={{ backgroundColor: "transparent" }}
                backgroundStyle={{ backgroundColor: COLORS.BLACK_200 }}
                backdropComponent={backDrop}
                enablePanDownToClose={true}
                onClose={onClose}
            >
                <BottomSheetView>
                    <Container>
                        <ModalTitle>{modalTitle}</ModalTitle>
                        <FlatList
                            data={accounts}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <Wallet
                                    onPress={() => handleSelect(item)}
                                    style={{ paddingVertical: 15 }}
                                >
                                    <Text style={{ color: COLORS.WHITE, fontSize: 18 }}>
                                        {item.name}
                                    </Text>
                                </Wallet>
                            )}
                        />
                    </Container>
                </BottomSheetView>
            </BottomSheet>
        </>
    )
};
