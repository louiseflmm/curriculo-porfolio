import { ProjetoCard } from "./projetoCard";

export default function Projetos() {
  return (
    <section id="projetos" className="bg-stone-50">
      <div className="container min-h-screen px-6 py-12">
        <div className="flex justify-center mt-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#5c4033] border-b-4 border-amber-200 pb-2">
            PROJETOS
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <ProjetoCard
            link="https://www.qualicontcariri.com.br/"
            image="/conversores.png"
            title="CONVERSORES"
            description="Site feito para conversão de valores de moeda, temperatura e medida, feito com NextJS."
          />

          <ProjetoCard
            link="https://site-fanta-blond.vercel.app/"
            image="/dado.png"
            title="COMPONENTE DADO"
            description="Site trabalhando com um componente de um dado usando NextJS."
          />

          <ProjetoCard
            link="https://pet-dev-three.vercel.app/"
            image="/jogododado.png"
            title="JOGO DO DADO"
            description="Site de um jogo de dados para dois jogadores, criado em NextJS."
          />
        </div>
      </div>
    </section>
  );
}
