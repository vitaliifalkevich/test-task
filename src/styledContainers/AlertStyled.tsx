import styled from 'styled-components'

const AlertStyled = styled.div`
.alert {
  left: 0;
  width: 100%;
  padding: 3px 20px;
  box-sizing: border-box;
  border-radius: 5px;
  position: absolute;
  bottom: 0px;
  max-height: 100px;
  height: 100%;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  &.success {
    background: #9ddf9d;
  }
  &.warning {
    background: #ff8564;
  }
}
`

export default AlertStyled
