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
    RecordsButton,
    FilterContent,
    Body,
    MonthTitle,
} from './styles'
import { transaction } from '@src/utils/transaction'
import { FlatList, TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components'
import { CaretLeftIcon, CaretRightIcon } from 'phosphor-react-native'

export const Dashboard = () => {

    const COLORS = useTheme();

    return (
        <Container>

            <HeaderContent>
                <FilterContent>

                    <TouchableOpacity>
                        <CaretLeftIcon size={30} color='white'/>
                    </TouchableOpacity>

                    {/* <FilterTitle>Selecione o mês</FilterTitle> */}

                    <TouchableOpacity>
                        <MonthTitle>Agosto</MonthTitle>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <CaretRightIcon size={30} color='white'/>
                    </TouchableOpacity>

                </FilterContent>
            </HeaderContent>

            <Body>

            </Body>

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
