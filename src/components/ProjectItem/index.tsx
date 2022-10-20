import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';

import { ProjectContainer } from './styles';

export function ProjectItem() {
  return (
    <ProjectContainer imgUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
      <section>
        <div className="overlay" />
        <div className="text">
          <h1>Projeto 01</h1>
          <h2>- Website</h2>
        </div>
      </section>

      <button type="button">
        <Link href="/project">
          <a>
            Ver mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </ProjectContainer>
  );
}
