import { IconHeartFilled, IconStarFilled } from "@/assets/icones"
import React from "react"

interface AcomodacaoProps {
    children: React.ReactNode
    local: string
    anfitriao: string
    data: string
    preco: number
    avaliacao: number
    preferidoHospedes: boolean
}

const Acomodacao = ( {children, local, anfitriao, data, preco, avaliacao, preferidoHospedes}: AcomodacaoProps) => {
    return (
        <figure className="relative">

            <div className="absolute w-full flex top-2 justify-between p-2 items-center">
                <div>
                    {preferidoHospedes && (
                        <span className="bg-white rounded-full px-3 py-0.5 font-semibold">Preferido dos Hóspedes</span>
                    )}
                </div>
                
                <IconHeartFilled className="stroke-white opacity-80" aria-label="Ícone favoritos" size={30} />
            </div>

            {/* AQUI ESTÁ VINDO SOMENTE A IMAGEM */}
            {children}

            <figcaption>
                <div className="flex justify-between mt-1.5">
                    <span className="font-semibold text-sm">{local}</span>
                    <div className="flex items-center justify-center gap-0.5">
                        <IconStarFilled className="stroke-white" aria-label="Avaliações" size={14} />
                    <span className="text-sm font-semibold">{avaliacao}</span>
                    </div>
                </div>
                <div>Anfitriã(o): {anfitriao}</div>
                <div>{data}</div>
                <div className="flex gap-1 items-center">
                    <span className="font-semibold">R$ {preco}</span>
                    <span>noite</span>
                </div>
            </figcaption>
        </figure>
    )
}

export default Acomodacao