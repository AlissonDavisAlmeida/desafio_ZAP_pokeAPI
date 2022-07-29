import { Grid } from '@nextui-org/react'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import PokemonCard from '../components/pokemon/PokemonCard'
import { PokemonListInterface } from '../components/pokemon/pokemon_interface'
import Layout from '../components/ui/Layout'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {

  const [pokemonList, setpokemonList] = useState<PokemonListInterface>()

  useEffect(() => {
      const fetchData = async () => {
          const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
          const data:PokemonListInterface = await response.json()
          setpokemonList(data)
      }

      fetchData()
  }, [])
  


  return (
    <Layout>
      <Grid.Container gap={2} justify="center">
        {pokemonList?.results.map(pokemon =>{
          return(
            <Grid key={pokemon.name} xs={4}>
              <PokemonCard {...pokemon}/>
            </Grid>
          )
        })}
      </Grid.Container>
    </Layout>
  )
}

export default Home


