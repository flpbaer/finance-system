import React from 'react'
import { Container } from './style'
import AnCard from '../AnalyticalCard/AnCard'


type Props = {
    income: number;
    expense: number;
}

function Resume({income, expense}: Props) {


  return (
    <Container>
        <AnCard title='Entrada' value={income} />
        <AnCard title='Saída' value={expense}/>
    </Container>
  )
}

export default Resume