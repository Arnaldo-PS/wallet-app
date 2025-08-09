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
    ContentFlatSubTitle,
    RecordsButton
} from './styles'
import { Header } from '@src/components/Home/Header'
import { Body } from '@src/components/Home/Body'
import { transaction } from '@src/utils/transaction'
import { FlatList } from 'react-native'

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

        </Container>
    )
}
