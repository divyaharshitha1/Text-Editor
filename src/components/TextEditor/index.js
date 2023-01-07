import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  MainContainer,
  AppContainer,
  ImageContainer,
  TextHeading,
  TextImg,
  TextTypeContainer,
  ButtonItems,
  Button,
  ButtonsContainer,
  TextArea,
} from './styledComponents'

class TextEditor extends Component {
  state = {isBold: false, isItalic: false, isUnderline: false}

  render() {
    const {isBold, isItalic, isUnderline} = this.state
    return (
      <MainContainer>
        <AppContainer>
          <ImageContainer>
            <TextHeading>Text Editor</TextHeading>
            <TextImg
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageContainer>
          <TextTypeContainer>
            <ButtonsContainer>
              <ButtonItems>
                <Button
                  data-testid="bold"
                  onClick={() => this.setState({isBold: !isBold})}
                  color={isBold ? '#faff00' : '#f1f5f9'}
                >
                  <VscBold size={25} />
                </Button>
              </ButtonItems>
              <ButtonItems>
                <Button
                  data-testid="italic"
                  onClick={() => this.setState({isItalic: !isItalic})}
                  color={isItalic ? '#faff00' : '#f1f5f9'}
                >
                  <GoItalic size={25} />
                </Button>
              </ButtonItems>
              <ButtonItems>
                <Button
                  data-testid="underline"
                  onClick={() => this.setState({isUnderline: !isUnderline})}
                  color={isUnderline ? '#faff00' : '#f1f5f9'}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </ButtonItems>
            </ButtonsContainer>
            <TextArea
              fontWeight={isBold ? 'bold' : 'normal'}
              fontStyle={isItalic ? 'italic' : 'normal'}
              textDecoration={isUnderline ? 'underline' : 'normal'}
              rows="30"
              cols="10"
            />
          </TextTypeContainer>
        </AppContainer>
      </MainContainer>
    )
  }
}

export default TextEditor
