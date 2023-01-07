import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #25262c;
  min-height: 100vh;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const AppContainer = styled.div`
  background-color: #1b1c22;
  display: flex;
  padding: 30px;
  padding-bottom: 0px;
  height: 500px;
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const TextHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 35px;
  font-weight: 500;
`

export const TextImg = styled.img`
  height: 300px;
  width: 350px;
  margin-top: 50px;
`
export const TextTypeContainer = styled.div`
  width: 350px;
  background-color: transparent;
  border-radius: 15px;
  margin-left: 20px;
  margin-top: 20px;
`
export const ButtonsContainer = styled.ul`
  display: flex;
  border: 1px solid #cbd5e1;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 0px;
  margin: 0px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`

export const ButtonItems = styled.li`
  list-style: none;
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${props => props.color};
`
export const TextArea = styled.textarea`
  width: 100%;
  height: 80%;
  background-color: transparent;
  outline: none;
  font-weight: ${props => props.fontWeight};
  font-style: ${props => props.fontStyle};
  text-decoration: ${props => props.textDecoration};
  color: #f8fafc;
  font-size: 18px;
  padding-top: 10px;
  padding-left: 10px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`
