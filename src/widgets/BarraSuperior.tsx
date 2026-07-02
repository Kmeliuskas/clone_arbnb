import { IconSearch, IconUserCircle } from "@/assets/icones"
import Logo from "@/components/Logo"
import Link from "next/link"
import BotaoIcone from "@/components/BotaoIcone"

const BarraSuperior = () => {
    return (
        <div className=" py-6 flex justify-between items-center">

          <Logo />

          <div className="flex gap-6">
            <Link className="font-semibold" href={"/"}>Acomodações</Link>
            <Link className="opacity-60" href={"/"}>Experiências</Link>
          </div>

          <BotaoIcone text="Entrar" icone={<IconUserCircle aria-label="Ícone de usuário" size={20} />}></BotaoIcone>

        </div>
    )
}

export default BarraSuperior