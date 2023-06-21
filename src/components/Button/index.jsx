/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function Button({color, backgroundColor, title, loading = false, ...rest}) {
  return(
    <Container 
      type="button"
      disabled={loading}
      color= {color}
      backgroundColor = {backgroundColor}
      {...rest}  
    >
      { loading ? 'Carregando...' : title }
    </Container>
  )
}