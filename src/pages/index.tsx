import { HomeContainer } from '../styles/homeStyles';

import { Header } from '../components/Header';
import { HomeHero } from '../components/HomeHero';

export default function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
      </main>
    </HomeContainer>
  );
}
