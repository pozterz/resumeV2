import React from "react"
import { Divider } from "antd"
import { BioContainer, DividerHeader, BioText } from "./styles"
import * as moment from 'moment'

const age = () => {
  const birthDay = "02/02/1994"
  return moment().diff(birthDay, 'years')
}

function Bio() {
  return (
    <BioContainer>
      <Divider orientation="left">
        <DividerHeader>
          Bio
        </DividerHeader>
      </Divider>
      <BioText>
        Tharathep Numuean (Jo) <br/>
        I'm ({age()} years old)
      </BioText>
    </BioContainer>
  )
}

export default Bio
