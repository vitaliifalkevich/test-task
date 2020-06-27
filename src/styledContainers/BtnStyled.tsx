import styled from 'styled-components'
import { lighten, darken } from 'polished'

const BtnStyled = styled.div`
margin-top: 55px;
button {
  width: 343px;
  height: 62px;
  background: #0094FF;
  border-radius: 31px;
  border: none;
  color: #ffffff;
  cursor: pointer;
  font-size: 14px;
  &:focus, &:hover {
    outline: none;
    background: ${lighten(0.10, '#0094FF')};
  }
  &:focus {
    border: 2px solid ${darken(0.10, '#0094FF')}
  }
  &.disabled, &.disabled:focus, &.disabled:hover {
  background: #d3d3d3;
  cursor: default;
  }
  
}
`

export default BtnStyled
