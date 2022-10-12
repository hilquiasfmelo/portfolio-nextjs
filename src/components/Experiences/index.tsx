import { ExperienceItem } from '../ExperienceItem';
import { SectionTitle } from '../SectionTitle';
import { Container } from './styles';

export function Experiences() {
  return (
    <Container>
      <SectionTitle title="#02 Anos" description="de experiência" />

      <section>
        <ExperienceItem
          year="2019"
          title="Dev FullSctack"
          description="Development FullStack nas melhores tecnologias do mercado"
        />
        <ExperienceItem
          year="2020"
          title="Dev FullSctack"
          description="Development FullStack nas melhores tecnologias do mercado"
        />
        <ExperienceItem
          year="2021"
          title="Dev FullSctack"
          description="Development FullStack nas melhores tecnologias do mercado"
        />
        <ExperienceItem
          year="2022"
          title="Dev FullSctack"
          description="Development FullStack nas melhores tecnologias do mercado"
        />
      </section>
    </Container>
  );
}
