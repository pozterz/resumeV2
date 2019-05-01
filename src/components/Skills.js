import React from "react"
import { Icon, Divider } from "antd"
import { BioContainer, DividerHeader } from "./styles"

function Skills() {
  return (
    <BioContainer>
      <Divider orientation="left">
        <DividerHeader>Skills</DividerHeader>
      </Divider>
      <Divider>
        <DividerHeader>Expert</DividerHeader>
      </Divider>
      <Divider>
        <DividerHeader>Intermediate</DividerHeader>
      </Divider>
      <Divider>
        <DividerHeader>Interesting</DividerHeader>
      </Divider>
    </BioContainer>
  )
  }
  
export default Skills