export default function Navbar() {
  return (
    <nav className="bg-[#ffffb4] py-6 shadow-md">
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#5c4033]">
          Louise Flammarion
        </div>

        <ul className="flex space-x-8 text-[#5c4033] text-lg">
          <li>
            <a href="#home" className="hover:text-[#a0522d] transition">
              Início
            </a>
          </li>
          <li>
            <a href="#cachorro" className="hover:text-[#a0522d] transition">
              Imagem Cachorro
            </a>
          </li>
          <li>
            <a href="#sobre" className="hover:text-[#a0522d] transition">
              Sobre
            </a>
          </li>
          <li>
            <a href="#projetos" className="hover:text-[#a0522d] transition">
              Projetos
            </a>
          </li>
          <li>
            <a href="#jogo" className="hover:text-[#a0522d] transition">
              Jogo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}