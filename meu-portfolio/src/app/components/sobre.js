export default function Sobre() {
    return (
    <section id="sobre" className="bg-[#f5f5dc] py-16 px-8 text-[#5c4033]">
      <div className="max-w-5xl mx-auto flex items-center gap-12">
        
        <div className="flex-shrink-0">
          <img 
            src="/louise.jpg" 
            alt="Foto de perfil" 
            className="w-78 h-78 rounded-full object-cover border-4 border-[#d2b48c] shadow-lg"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-6">Sobre Mim</h2>
          <p className="text-lg leading-relaxed mb-4">
            Olá! Eu sou <strong>Louise Flammarion</strong>, uma desenvolvedora em constante evolução, motivada a criar soluções web
            elegantes, funcionais e intuitivas. Atualmente estou focada no desenvolvimento
            frontend utilizando <strong>React</strong> e <strong>Next.js</strong>, além de construir interfaces
            modernas com <strong>Tailwind CSS</strong>.
          </p>
          <p className="text-lg leading-relaxed">
            Sou uma pessoa curiosa, que ama aprender constantemente, explorar novas tecnologias
            e transformar ideias em realidade. Nos meus projetos, priorizo sempre a experiência
            do usuário, a performance e a estética.
          </p>
        </div>

      </div>
    </section>
    );
}