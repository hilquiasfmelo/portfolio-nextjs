import { ProjectItem } from '../ProjectItem';
import { SectionTitle } from '../SectionTitle';

import { Container } from './styles';

export function Projects() {
  return (
    <Container>
      <SectionTitle title="#Ultimos projetos" />

      <section>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </section>
    </Container>
  );
}
