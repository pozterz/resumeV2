import React from "react"
import { Divider } from "antd"
import { BioContainer, DividerHeader, BioText } from "./styles"
import * as moment from "moment"

const age = (day, unit = "years") => {
  return moment().diff(day, unit)
}

function Bio() {
  return (
    <BioContainer>
      <Divider orientation="left">
        <DividerHeader>Bio</DividerHeader>
      </Divider>
      <BioText>
        <p>Tharathep Numuean (Jo)</p>
        <p>I'm ({age("02/02/1994")} years old) </p>
        <p>
          Graduated with a Bachelor Degree in Department of Computer Engineering
          at the Prince of Songkla University, Phuket Campus
        </p>
        <p>
          I'm working for Pi R Square as full stack developer.({age("01/10/2018")} years {age("01/10/2018", 'month') - (age("01/10/2018") * 12)} months)
        </p>
        <p>
          My hobbies is write some tech blog in medium and play online games (ROV (Arena of Valor), Overwatch).
        </p>
      </BioText>
    </BioContainer>
  )
}

export default Bio
