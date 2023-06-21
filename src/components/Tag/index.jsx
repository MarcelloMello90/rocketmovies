/* eslint-disable react/prop-types */
import { Container } from "./styles";
import { FiX } from "react-icons/fi";
import { RiAddLine } from "react-icons/ri";


export function Tag({ onClick, isNew, value, ...rest }) {
  return(
    <Container isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />
      <button onClick={onClick} className={isNew ? "button-add" : "button-delete"}> {isNew ? <RiAddLine/> :  <FiX/>} </button>
     
      
    </Container>
  );
}