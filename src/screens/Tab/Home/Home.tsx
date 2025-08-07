import React from 'react'
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
    ContentFlatSubTitle
} from './styles'
import { Header } from '@src/components/Home/Header'
import { Body } from '@src/components/Home/Body'
import { transaction } from '@src/utils/transaction'
import { FlatList, Text } from 'react-native'

export const Home = () => {
    return (
        <Container>

            <HeaderContent>
                <Header />
            </HeaderContent>

            <Body />

            <Footer>
                <RecordsConteiner>
                    <ContentFlatHeader>
                        <ContentFlatHeaderTitle>Minhas transações</ContentFlatHeaderTitle>
                        <ContentFlatHeaderButton>Ver todas</ContentFlatHeaderButton>
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
                                    <ContentFlatAmount>$ {item.amount}</ContentFlatAmount>
                                </ContentFlatBody>

                            </ContentFlat>
                        )} />
                </RecordsConteiner>
            </Footer>

        </Container>
    )
}
