import Image from "next/image";

export function ProjetoCard({ link, image, title, description, className }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div
        className={`bg-stone-50 border border-stone-200 rounded-3xl shadow-md hover:shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 ${className} cursor-pointer`}
      >
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="w-full h-60 object-cover rounded-b-none"
        />
        <div className="p-6">
          <h2 className="text-stone-800 text-2xl font-bold mb-2 text-center">
            {title}
          </h2>
          <p className="text-stone-600 text-center">{description}</p>
        </div>
      </div>
    </a>
  );
}
