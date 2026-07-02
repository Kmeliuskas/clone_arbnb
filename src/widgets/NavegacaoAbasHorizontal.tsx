'use client'
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css'

import BotaoIcone from "@/components/BotaoIcone"
import { IconAdjustmentsHorizontal } from "@/assets/icones"
import Link from "next/link"
import Image from "next/image"
import { Icons } from "@/types/AirbnbDados"

interface NavegacaoAbasHorizontalProps {
  icons: Icons[]
}


const NavegacaoAbasHorizontal = ( props: NavegacaoAbasHorizontalProps ) => {

  //ICONES VINDOS DIRETAMENTE DA API
  const icones = props.icons

    return (
        <div className="flex flex-row items-center">
            
            {/* Navegação de filtro */}
            <Swiper spaceBetween={10} slidesPerView={3} breakpoints={{ 640: {slidesPerView: 3}, 764: {slidesPerView: 4}, 1024: {slidesPerView: 6}, 1280: {slidesPerView: 9},}} >
                {icones.map( (icone, indice) => (
                    <SwiperSlide key={indice}>
                        <Link className="flex flex-col items-center hover:text-red-500" href={icone.url}>
                            <Image className="" src={icone.source} alt={icone.description} width={24} height={24} />
                            <span className="text-center text-sm">{icone.description}</span>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Ícone de filtro */}

            <BotaoIcone text={"Filtros"} icone={<IconAdjustmentsHorizontal aria-label="Ícone de filtro" size={20} />} />
        </div>
    )
}

export default NavegacaoAbasHorizontal