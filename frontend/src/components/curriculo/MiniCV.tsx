import Image from "next/image";

export default function MiniCV() {
  return (
    <div className="flex-1 flex flex-col-reverse gap-6 md:flex-row lg:flex-col-reverse xl:flex-row items-center md:items-start lg:items-center xl:items-start bg-black border border-zinc-800 rounded-2xl px-6 pt-6">

      <div className="relative min-w-72 h-full xl:self-end">
      <Image src="/foto.jpg" alt="Foto de perfil" width={450} height={450} />
      </div>

      <div className="flex flex-col gap-5 self-center py-6 items-center md:items-start lg:items-center xl:items-start">
        <div className="flex flex-col items-center md:items-start lg:items-center xl:items-start">
          <span className="bg-gradient-to-r from-red-500 via-white to-white text-transparent bg-clip-text text-2xl font-bold">Antonio Júnior</span>
          <span className="text-white">Desenvolvedor Frontend</span>
        </div>
        <p className="text-white text-center md:text-left lg:text-center xl:text-left">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>
      
    </div>
  )
}