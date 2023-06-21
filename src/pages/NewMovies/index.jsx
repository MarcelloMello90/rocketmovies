import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { FiArrowLeft  } from "react-icons/fi";



import { Container, Form } from './styles';

export function NewMovies() {
  return(
    <Container>
      <Header/>

      <main>
        <Form>
          <header>
            <Link to="/"> <FiArrowLeft/> Voltar </Link>
            <h1> Novo Filme </h1>
          </header>

          <Input className="inputTitle" placeholder="Título" />
          <Input className="inputTitle" placeholder="Sua nota (de 0 a 5)" />
          <Textarea placeholder="Observações" />

          <Section title="Marcadores">
            <div className='bookmarks'>
              <NoteItem value="React" />
              <NoteItem value="Novo marcador" isNew/>
            </div>
          </Section>
          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  );
} 
