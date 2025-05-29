export default function PaginaHome() {
    return (
        <main id="home" className="bg-[#f6e4ae] min-h-screen flex flex-col items-center justify-center text-[#5c4033]">
            <h1 className="text-5xl mb-4">Bem-vindo(a), esse é meu portfolio</h1>
            <button className="bg-[#d2b48c] text-white px-6 py-2 rounded-lg mt-4 hover:brightness-110">
                <a href="#sobre">Conheça-me um pouco mais clicando aqui!</a>
            </button>
        </main>
    );
}