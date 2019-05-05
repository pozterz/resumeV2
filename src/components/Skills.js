import React from "react"
import { Row, Divider } from "antd"
import { BioContainer, DividerHeader } from "./styles"
import go from '../assets/Go-Logo_Black.png'
import ant from '../assets/ant-icon.svg'

function Skills() {
  return (
    <BioContainer>
      <Divider orientation="left">
        <DividerHeader>Skills</DividerHeader>
      </Divider>
      <Divider>
        <DividerHeader>Expert</DividerHeader>
      </Divider>
      <Row type="flex" justify="space-around">
        <i class="fab fa-3x fa-react" />
        <i class="fab fa-3x fa-html5" />
        <i class="fab fa-3x fa-css3-alt" />
        <i class="fab fa-3x fa-js-square" />
      </Row>
      <Row type="flex" justify="space-around" style={{ marginTop: '.7rem' }}>
        <i class="fab fa-3x fa-laravel"/>
        <i class="fab fa-3x fa-php" />
        <i class="fab fa-3x fa-node-js" />
        <i class="fab fa-3x fa-bootstrap" />
        <img src={ant} height="60px" style={{ filter: 'grayscale(1)' }}/>
      </Row>
      <Divider>
        <DividerHeader>Intermediate</DividerHeader>
      </Divider>
      <Row type="flex" justify="space-around">
        <i class="fab fa-3x fa-git" />
        <i class="fab fa-3x fa-docker" />
        <i class="fab fa-3x fa-angular" />
        <i class="fab fa-3x fa-less" />
        <i class="fab fa-3x fa-sass" />
      </Row>
      <Divider>
        <DividerHeader>Interesting</DividerHeader>
      </Divider>
      <Row type="flex" justify="space-around">
        <i class="fab fa-3x fa-vuejs" />
        <img src={go} alt="Golang" height="66px" />
      </Row>
    </BioContainer>
  )
}

export default Skills
