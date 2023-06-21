/* eslint-disable react/prop-types */
import { Container } from './styles';
import { FiArrowLeft } from "react-icons/fi";

export function ButtonText({ title, ...rest }){
  return (
    <Container
      type="button"
      {...rest}
    >
      <div>
        <FiArrowLeft/>
        {title}
      </div>
    </Container>
  );
}
