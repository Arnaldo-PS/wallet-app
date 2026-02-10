import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
    Container,
    ModalTitle,
    Title,
    ModalActions,
    DropdownContainer,
    DropdownText
} from './styles'
import InputModal from '@src/components/Input/InputModal';
import { useTheme } from 'styled-components/native';
import { ButtonBottomSheet } from '@src/components/Button/ButtonBottomSheet'
import { useCurrencyInput } from '@src/hooks/useCurrencyInput';
import { Portal } from 'react-native-paper';
import { SelectWalletBottomSheet } from '../SelectWalletBottomSheet';

type EntradaBottomSheetProps = {
    visible: boolean;
    onClose: () => void;
    entrada?: any;
    modalTitle: string;
    submitName: string;
    titleColor?: string;
}

export const EntradaBottomSheet = ({
    visible,
    onClose,
    entrada,
    modalTitle,
    titleColor,
    submitName,
}: EntradaBottomSheetProps) => {

    const { COLORS } = useTheme();
    const currency = useCurrencyInput(entrada?.amount ? entrada.amount * 100 : 0)
    const [selectWalletVisible, setSelectWalletVisible] = useState(false)
    const [selectedAccount, setSelectedAccount] = useState<{ id: string, name: string } | null>(null);

    const bottomSheetRef = useRef<BottomSheet>(null);

    useEffect(() => {
        if (visible) {
            bottomSheetRef.current?.expand();
        } else {
            bottomSheetRef.current?.close();
            setSelectedAccount(null);
            currency.onChangeText('');
        }
    }, [visible]);

    const handleSelectWallet = () => {
        setSelectWalletVisible(true);
    };

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
                snapPoints={['88%']}
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
                        <Title>Nome *</Title>
                        <InputModal
                            placeholder='Ex: Delivery'
                            iconName='edit'
                        >{entrada?.title}</InputModal>
                        <Title>Descrição</Title>
                        <InputModal
                            placeholder='Ex: Combo para comemorar'
                            iconName='edit'
                        >{entrada?.description}</InputModal>
                        <Title>Valor *</Title>
                        <InputModal
                            placeholder='0'
                            keyboardType='numeric'
                            onChangeText={currency.onChangeText}
                            iconName='creditcard'
                        >{currency.formatted}</InputModal>

                        <Title>Carteira *</Title>
                        <DropdownContainer onPress={handleSelectWallet}>
                            <DropdownText isPlaceholder={!selectedAccount}>
                                {selectedAccount ? selectedAccount.name : 'Selecione a carteira'}
                            </DropdownText>
                        </DropdownContainer>

                        <Title>Categoria *</Title>
                        <DropdownContainer onPress={handleSelectWallet}>
                            <DropdownText >Selecione a categoria principal
                            </DropdownText>
                        </DropdownContainer>

                        <Title>SubCategoria</Title>
                        <DropdownContainer onPress={handleSelectWallet}>
                            <DropdownText>Selecione a categoria secundária
                            </DropdownText>
                        </DropdownContainer>

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
                <Portal>
                    <SelectWalletBottomSheet
                        modalTitle='Selecione a carteira'
                        visible={selectWalletVisible}
                        onClose={() => setSelectWalletVisible(false)}
                        onSelect={(account) => setSelectedAccount(account)}
                    />
                </Portal>
            </BottomSheet>
        </>
    )
};
