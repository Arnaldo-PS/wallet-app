import React, { useState } from 'react'
import {
    Container,
    Header,
    Body,
    BackButton,
    Title,
    NewButton,
    BudgetContainer,
    BudgetTitle,
    BudgetAmount,
    WalletCounter,
    WalletContent,
    WalletContainer,
    WalletIcon,
    WalletTitle,
    WalletAmount,
    WalletActions,
    BudgetTitleContainer,
    ObservableText,
    WalletDescription,
    WalletTitleContainer,
    NewButtonTitle
} from './styles'
import WalletSvg from '@assets/wallet.svg';
import { useTheme } from 'styled-components';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FlatList, TouchableOpacity } from 'react-native';
import { wallet as walletData } from '@src/utils/wallet'
import { WalletEditModal } from '@src/components/Modal/WalletEditModal';
import { useNavigation } from '@react-navigation/native';

export const Wallet = () => {

    const { COLORS } = useTheme();
    const [wallet, setWallet] = useState(walletData);
    const [editModalVisible, setEditModalVisible] = useState(false)
    const [newModalVisible, setNewModalVisible] = useState(false)
    const [selectedWallet, setSelectedWallet] = useState<any>(null);
    const navigation = useNavigation();

    const amount = wallet
        .filter(item => item.observable)
        .reduce((acc, item) => acc + item.amount, 0);

    const toggleObservable = (id) => {
        setWallet(prev =>
            prev.map(item =>
                item.id === id ? { ...item, observable: !item.observable } : item
            )
        )
    }

    return (
        <Container>
            <Header>
                <BackButton>
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <MaterialCommunityIcons color={COLORS.WHITE} size={30} name='arrow-left' />
                    </TouchableOpacity>
                    <Title>Carteiras</Title>
                </BackButton>
                <NewButton onPress={() => setNewModalVisible(true)} >
                    <NewButtonTitle>
                        + Nova
                    </NewButtonTitle>
                </NewButton>
            </Header>
            <Body>
                <BudgetContainer>
                    <BudgetTitleContainer>
                        <WalletSvg width={28} height={28} fill={COLORS.GREEN4} />
                        <BudgetTitle>Saldo Total</BudgetTitle>
                    </BudgetTitleContainer>
                    <BudgetAmount>R$ {new Intl.NumberFormat('pt-BR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }).format(amount)}
                    </BudgetAmount>
                    <WalletCounter>
                        {wallet.filter(item => item.observable).length} de {wallet.length} carteiras
                    </WalletCounter>
                </BudgetContainer>
                <FlatList data={wallet}
                    renderItem={({ item }) => (
                        <WalletContainer>
                            <WalletDescription>
                                <WalletTitleContainer>
                                    <WalletIcon color={item.iconColor}></WalletIcon>
                                    <WalletContent>
                                        <WalletTitle>{item.title}</WalletTitle>
                                        <WalletAmount>R$ {new Intl.NumberFormat('pt-BR', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2
                                        }).format(item.amount)}
                                        </WalletAmount>
                                    </WalletContent>
                                </WalletTitleContainer>
                                <WalletActions>
                                    <TouchableOpacity onPress={() => toggleObservable(item.id)}>
                                        <MaterialCommunityIcons
                                            name={item.observable ? 'eye-outline' : 'eye-off-outline'}
                                            size={24}
                                            color={item.observable ? COLORS.GREEN4 : COLORS.GRAY4}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => {
                                        setEditModalVisible(true);
                                        setSelectedWallet(item);
                                    }}>
                                        <MaterialCommunityIcons
                                            name='file-edit-outline'
                                            size={24}
                                            color={COLORS.GRAY4}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => { }}>
                                        <MaterialCommunityIcons
                                            name='delete-outline'
                                            size={24}
                                            color={COLORS.GRAY4}
                                        />
                                    </TouchableOpacity>
                                </WalletActions>
                            </WalletDescription>
                            {!item.observable && (
                                <ObservableText>Não incluída no saldo total</ObservableText>
                            )}
                        </WalletContainer>
                    )} />
            </Body>
            <WalletEditModal
                wallet={selectedWallet}
                modalTitle='Editar carteira'
                visible={editModalVisible}
                onClose={() => setEditModalVisible(false)}
                submitName='Atualizar'
            />
            <WalletEditModal
                modalTitle='Adicionar carteira'
                visible={newModalVisible}
                onClose={() => setNewModalVisible(false)}
                submitName='Adicionar'
            />
        </Container>
    )
}
