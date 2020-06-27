import styled from "styled-components";


const CheckboxStyled = styled.div`
.container {
  margin-top: 21px;
  display: block;
  position: relative;
  padding-left: 20px;
  margin-bottom: 12px;
  margin-left: 6px;
  cursor: pointer;
  font-size: 14px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  a {
    text-decoration: underline;
    color: #0094FF;
    &:hover {
      text-decoration: none;
    }
  }
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
}
.checkmark {
  position: absolute;
  top: 1px;
  left: 0;
  height: 14px;
  width: 14px;
  border: 1px solid #0094FF;
  border-radius: 3px;
  box-sizing: border-box;
  &:after {
    content: "";
    position: absolute;
    display: none;
    left: 3.5px;
    top: -0.5px;
    width: 3px;
    height: 8px;
    border: solid #0094FF;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
}
.container input:checked ~ .checkmark {
  background-color: #ffffff;;
}
.container input:checked ~ .checkmark:after {
  display: block;
}
`;

export default CheckboxStyled;