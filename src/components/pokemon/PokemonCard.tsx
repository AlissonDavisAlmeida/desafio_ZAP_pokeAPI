import { Card } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { PokemonInterface } from "./pokemon_interface";

interface PokemonCardProps {
    name: string;
    url: string;
}

function PokemonCard({name, url}: PokemonCardProps) {

    const [pokemon, setpokemon] = useState<PokemonInterface>({} as PokemonInterface)

    useEffect(() => {
      const fetchPokemon = async () => {
        const response = await fetch(url)
        const data:PokemonInterface = await response.json()
        console.log(data)
        setpokemon(data)
      }

        fetchPokemon()
    }, [])
    


    return ( 
        <Card isHoverable>

        </Card>
     );
}

export default PokemonCard;