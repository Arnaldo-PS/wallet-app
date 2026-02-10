import React, { useState } from 'react'
import {
    Container,
    HeaderContent,
    Footer,
    RecordsConteiner,
    ContentFlat,
    ContentFlatIcon,
    ContentFlatTitle,
    ContentFlatDescription,
    ContentFlatAmount,
    ContentFlatHeader,
    ContentFlatBody,
    ContentFlatHeaderTitle,
    ContentFlatHeaderButton,
    ContentFlatSubTitle,
    RecordsButton
} from './styles'
import { Header } from '@src/components/Home/Header'
import { Body } from '@src/components/Home/Body'
import { transaction } from '@src/utils/transaction'
import { FlatList } from 'react-native'
import { WalletBottomSheet } from '@src/components/BottomSheet/WalletBottomSheet';
import { EntradaBottomSheet } from '@src/components/BottomSheet/EntradaBottomSheet';
import { Portal } from 'react-native-paper';
import { useTheme } from 'styled-components'

export const Home = () => {

    const COLORS = useTheme();
    const [newWalletVisible, setNewWalletVisible] = useState(false)
    const [newEntradaVisible, setNewEntradaVisible] = useState(false)
    const [newSaidaVisible, setNewSaidaVisible] = useState(false)

    const handleOpenWallet = () => {
        setNewWalletVisible(true);
    };

    const handleOpenEntrada = () => {
        setNewEntradaVisible(true);
    };

    const handleOpenSaida = () => {
        setNewSaidaVisible(true);
    };

    return (
        <Container>

            <HeaderContent>
                <Header />
            </HeaderContent>

            <Body
                onOpenSaida={handleOpenSaida}
                onOpenEntrada={handleOpenEntrada}
                onOpenWallet={handleOpenWallet} />

            <Footer>
                <RecordsConteiner>
                    <ContentFlatHeader>
                        <ContentFlatHeaderTitle>Últimas transações</ContentFlatHeaderTitle>
                        <RecordsButton>
                            <ContentFlatHeaderButton>Ver todas</ContentFlatHeaderButton>
                        </RecordsButton>
                    </ContentFlatHeader>
                    <FlatList data={transaction}
                        renderItem={({ item }) => (
                            <ContentFlat>
                                <ContentFlatBody>
                                    <ContentFlatIcon source={item.icon} />
                                    <ContentFlatDescription>
                                        <ContentFlatTitle>{item.title}</ContentFlatTitle>
                                        <ContentFlatSubTitle>{item.subtitle}</ContentFlatSubTitle>
                                    </ContentFlatDescription>
                                    <ContentFlatAmount>R$ {item.amount}</ContentFlatAmount>
                                </ContentFlatBody>

                            </ContentFlat>
                        )} />
                </RecordsConteiner>
            </Footer>
            <Portal>
                <WalletBottomSheet
                    modalTitle='Adicionar carteira'
                    visible={newWalletVisible}
                    onClose={() => setNewWalletVisible(false)}
                    submitName='Adicionar'
                />
                <EntradaBottomSheet
                    modalTitle='Adicionar entrada'
                    titleColor={COLORS.COLORS.GREEN4}
                    visible={newEntradaVisible}
                    onClose={() => setNewEntradaVisible(false)}
                    submitName='Adicionar'
                />
                <EntradaBottomSheet
                    modalTitle='Adicionar saída'
                    titleColor={COLORS.COLORS.RED}
                    visible={newSaidaVisible}
                    onClose={() => setNewSaidaVisible(false)}
                    submitName='Adicionar'
                />
            </Portal>
        </Container>
    )
}
