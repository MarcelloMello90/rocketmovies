/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function TagView({ title }) {
  return(
    <Container>
      <span>
        {title}
      </span>
    </Container>
  );
}