import  PaginaHome  from "./components/home"
import Navbar from "./components/navbar";
import Sobre from "./components/sobre";
import Projetos from "./components/projetos";
import JogoDaSenha from "./components/jogo";
import CachorroImg from "./components/cachorro";

export default function Home() {
  return (
    <main>
      <Navbar />
      <PaginaHome />
      <CachorroImg />
      <Sobre />
      <Projetos />
      <JogoDaSenha />
    </main>
  );
}
