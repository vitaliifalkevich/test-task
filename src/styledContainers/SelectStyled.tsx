import styled from "styled-components";
import expandedIcon from "../assets/img/arrow_expanded.svg";
import collapsedIcon from "../assets/img/arrow_collapsed.svg";

const SelectStyled = styled.div`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border-color: inherit;
    list-style: none;
}
.select {
  position: relative;
  background: #F5F8FA;
  height: 50px;
  margin-top: 21px;
  list-style: none;
  border-radius: 8px;
  li {
    border-radius: 8px;
  }
  &_expand {
    width: 0;
    height: 50px;
    position: absolute;
    top: 0;
    right: 0;
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        background: url(${collapsedIcon}) no-repeat;
        right: 20px;
        width: 11px;
        height: 11px;
        transform: translate(0, -50%);
        z-index: 100;
    }
    &:checked::after {
        background: url(${expandedIcon}) no-repeat;
    }
}
&_expandLabel {
  display: block;
  width: 100%;
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
}
&_close {
  display: none
  }
&_closeLabel {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: none;
}
&_items {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 40px;
}
&_input {
  display: none
  }
&_label {
  transition: all 250ms cubic-bezier(.4,.25,.3,1);
  display: block;
  height: 0;
  font-size: 1.2rem;
  line-height: 50px;
  overflow: hidden;
  background-color: #fff;
  cursor: pointer;
  padding-left: 20px;
  font-size: 14px;
&-placeholder {
    height: 50px;
    font-size: 14px;
    opacity: .8;
    background-color: transparent;
  }
}
&_expand:checked {
  + .select_closeLabel {
     display: block;
     + .select_options {
       background: #ffffff;
       border-radius: 8px;
       padding: 5px 0;
       box-shadow: 0px 3px 8px #00000026;
       margin-top: 15px;
       position: relative;
       z-index: 100;
        .select_label {
          height: 38px;
          line-height: 38px;
          &:hover {
            background-color: #F5F8FA
            }
        }
      + .select_expandLabel {
        display: none
      }
    }
  }
}
&_input:checked + .select_label {
    height: 50px;
    margin-top: -44px;
    background: #F5F8FA;
    padding-top: 2px;
    border-radius: 8px;
}
`;

export default SelectStyled;