import  PaginaHome  from "./components/home"
import Navbar from "./components/navbar";
import Sobre from "./components/sobre";

export default function Home() {
  return (
    <main>
      <Navbar />
      <PaginaHome />
      <Sobre />
    </main>
  );
}
