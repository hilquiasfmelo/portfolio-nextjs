import { Container, TextContainer, InfosContainer, CodeItem } from './styles';

import profile from '../../assets/profile.png';

export function HomeHero() {
  return (
    <Container>
      <img src={profile} alt="Hilquias Ferreira Melo" />

      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Hilquias</h2>
        </TextContainer>

        <InfosContainer>
          <CodeItem>
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Hilquias,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Ferreira Melo</span>
            </div>
            {'\u007B'}
          </CodeItem>

          <CodeItem>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Função: <span className="blue">Dev FullStack,</span>
            </div>
            <div>
              Empresa: <span className="blue">Free Lance</span>
            </div>
            {'\u007B'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}
