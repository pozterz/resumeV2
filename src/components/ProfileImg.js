import React from "react"
import { ImageContainer, ProfileImage, ProfileContainer } from "./styles"
import { Icon, message, Col } from "antd"
import Social from "./Social"
import { CopyToClipboard } from "react-copy-to-clipboard"

function ProfileImg() {
  return (
    <ProfileContainer>
      <Col md={8}> </Col>
      <Col md={8}>
        <ImageContainer>
          <ProfileImage
            size={200}
            src="http://graph.facebook.com/100005406396686/picture?type=large"
          />
        </ImageContainer>
      </Col>
      <Col md={8}>
        <Social>
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Pozterzz">
            <Icon type="facebook" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@pozterz.jojo">
            <Icon type="medium" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/pozterz/">
            <Icon type="linkedin" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/pozterz">
            <Icon type="github" />
          </a>
          <CopyToClipboard
            text={"tharathep.nu@gmail.com"}
            onCopy={() => message.success("Copied to clipboard.")}
          >
            <Icon type="mail" />
          </CopyToClipboard>
        </Social>
      </Col>
    </ProfileContainer>
  )
}

export default ProfileImg
