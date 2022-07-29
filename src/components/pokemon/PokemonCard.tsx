import { Card, Text } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { COLORS } from "../../utils/typesColors";
import PokemonDetailCard from "./pokemonDetailCard";
import { PokemonInterface } from "./pokemon_interface";

interface PokemonCardProps {
    name: string;
    url: string;
}

function PokemonCard({ name, url }: PokemonCardProps) {

    const [pokemon, setpokemon] = useState<PokemonInterface>({} as PokemonInterface)
    const [visible, setvisible] = useState(false)
    const [imageUrl, setimageUrl] = useState("")
    let color = ""

    pokemon.types?.forEach((curr, index) => {
        if (index === 0) {
            color = COLORS[curr.type.name]
        }
    })



    useEffect(() => {
        const fetchPokemon = async () => {
            const response = await fetch(url)
            const data: PokemonInterface = await response.json()
            setpokemon(data)
            setimageUrl(data.sprites.other?.["official-artwork"].front_default!)
        }

        fetchPokemon()
    }, [url, visible])

    const openModalPokemon = ()=>{
        setvisible(true)
    }

    const closeModalPokemon = ()=>{
        setvisible(false)
    }

    return (
        <Card isHoverable isPressable css={{border:`1px solid ${color}`}} onPress={openModalPokemon}>
            <Card.Header css={{ display: "flex", justifyContent: "flex-end" }}>
                <Text color={color} css={{fontFamily:"Poppins", fontWeight:400}}>
                    #{"000".substring(`${pokemon.id}`.length) + `${pokemon.id}`}
                </Text>
            </Card.Header>
            <Card.Image
                objectFit="cover"
                src={imageUrl}            
                height={150}
                
            />
            <Card.Footer css={{backgroundColor:color, display:"flex", justifyContent:"center", flexGrow:1}}>
                <Text 
                    color="#FFFFFF"
                    css={{
                        fontFamily:"Poppins", 
                        fontWeight:400,
                        fontSize:"1.5rem",
                        '&:first-letter':{textTransform:"uppercase",
                    }}}
                    >
                    {name}
                </Text>
            </Card.Footer>
            {visible && <PokemonDetailCard color={color}  pokemon={pokemon}  visible={visible} closeModalPokemon={closeModalPokemon}/>}
        </Card>
    );
}

export default PokemonCard;