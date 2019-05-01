import React from "react"
import { QuoteContainer, QuoteText } from "./styles"
import TextLoop from "react-text-loop"

function Quote() {
  return (
    <QuoteContainer>
      <QuoteText style={{ marginRight: "1rem" }}>Keep</QuoteText>
      <TextLoop springConfig={{ stiffness: 180, damping: 10 }}>
        <QuoteText>learning.</QuoteText>
        <QuoteText>growing.</QuoteText>
        <QuoteText>positive thinking.</QuoteText>
        <QuoteText>relax.</QuoteText>
        <QuoteText>getting better.</QuoteText>
        <QuoteText>your mind.</QuoteText>
        <QuoteText>your heart.</QuoteText>
        <QuoteText>your eyes on the stars.</QuoteText>
        <QuoteText>your dreams alive.</QuoteText>
        <QuoteText>moving forward.</QuoteText>
      </TextLoop>
      <QuoteText style={{ marginLeft: "1rem" }}>— me</QuoteText>
    </QuoteContainer>
  )
}

export default Quote
