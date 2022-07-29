import { FormElement, Grid } from '@nextui-org/react'
import type { NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'
import PokemonCard from '../components/pokemon/PokemonCard'
import { PokemonListInterface } from '../components/pokemon/pokemon_interface'
import Layout from '../components/ui/Layout'

import debounce from "lodash/debounce"

const Home: NextPage = () => {

  const [pokemonList, setpokemonList] = useState<PokemonListInterface>()
  const [clear, setclear] = useState(false)

  useEffect(() => {
      const fetchData = async () => {
          const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
          const data:PokemonListInterface = await response.json()
          console.log(data)
          setpokemonList(data)
      }
      fetchData()
  }, [clear])
  
  const handleChange = (event: React.ChangeEvent<FormElement>) => {

    if(event.target.value.length >= 3) {

      search(event.target.value)
    }else{
      setclear(prevState => !prevState)
    }
  }

  const search = 
    debounce(async(value)=>{
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      const data:PokemonListInterface = await response.json()

      const filteredList = data.results.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(value.toLowerCase())
      })


      setpokemonList(prevState =>({...prevState!,results: filteredList}))

    }, 1000)
    


  return (
    <Layout onSearch={handleChange}>
      <Grid.Container gap={2} justify="center">
        {pokemonList?.results.map(pokemon =>{
          return(
            <Grid key={pokemon.name} sm={3} xs={6}  md={2} lg={2}>
              <PokemonCard {...pokemon}/>
            </Grid>
          )
        })}
      </Grid.Container>
    </Layout>
  )
}

export default Home


