import { Accommodation, AirbnbApi } from "@/types/AirbnbDados"

export async function fetchData(): Promise<AirbnbApi> {
    try {
        const response = await fetch("https://web.codans.com.br/airbnb")
        const dados = response.json()
        return dados
    } catch (e) {
        console.error(e)
        throw e
    }
}

export async function fetchDatabyId( id:string ): Promise<Accommodation | undefined> {
    try {
        const dados = await fetchData()
        const acomodacao = dados.accommodation.find( (item: Accommodation) => {
            return item.slug === decodeURIComponent(id) //remove acentuaçoes caso tenha na ULR
        } )
        return acomodacao
    } catch (e) {
        console.error(e)
        throw e
    }
}

