import { Col, Grid, Image, Input, Modal, Progress, Row, Text } from "@nextui-org/react";
import { PokemonInterface } from "./pokemon_interface";
import pokeball from "../../public/Pokeball-large.png";
import { COLORS } from "../../utils/typesColors";
import { useEffect } from "react";

interface PokemonDetailCardProps {
    pokemon: PokemonInterface;
    color: string;
    visible: boolean;
    closeModalPokemon: () => void;
}

function PokemonDetailCard({ pokemon, visible, closeModalPokemon, color }: PokemonDetailCardProps) {


    useEffect(() => {
        console.log(pokemon)
    }, [])

    return (
        <Modal
            css={{ padding: 10 }}
            aria-labelledby="modal-title"
            onClose={closeModalPokemon}
            open={visible}
        >
            <Modal.Header
                noPadding
                css={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Row
                    justify="space-between"
                    align="flex-start"
                    css={{
                        height: "120px",
                        padding: "$5",
                        backgroundColor: color,
                        borderRadius: "12px 12px 0px 0px",
                        backgroundImage: "url(" + pokeball.src + ")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 3% top 60%",
                    }}

                >
                    <Col >
                        <Text css={{
                            fontFamily: "Poppins",
                            letterSpacing: "$wide",
                            color: "#FFFFFF",
                            fontWeight: 700,
                            fontSize: "1.5rem",
                            '&:first-letter': {
                                textTransform: "uppercase",
                            }
                        }}>
                            {pokemon.name}
                        </Text>
                    </Col>
                    <Col>
                        <Text color={"#FFFFFF"}
                            css={{
                                fontFamily: "Poppins",
                                fontWeight: 700, textAlign: "right",
                                marginRight: "$10"
                            }}>

                            #{"000".substring(`${pokemon.id}`.length) + `${pokemon.id}`}
                        </Text>

                    </Col>
                </Row>
                <Row css={{ position: "absolute", top: "$15" }}>

                    <Image
                        src={pokemon.sprites.other?.["official-artwork"].front_default!}
                        alt={pokemon.name}
                        width={200}
                    />

                </Row>


            </Modal.Header>

            <Modal.Body
                css={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "$24",
                    overflow: "hidden"
                }}
            >
                <Row justify="center" align="center" gap={1}>
                    {pokemon.types?.map((type, index) => (
                        <Text key={type.slot}
                            color="#FFFFFF"
                            css={{
                                fontFamily: "Poppins",
                                fontSize: "10",
                                width: "4rem",
                                textAlign: "center",
                                padding: "0 5px",
                                backgroundColor: COLORS[type.type.name],
                                '&:first-letter': { textTransform: "uppercase" },
                                borderRadius: "12px"
                            }}
                        >
                            {type.type.name}
                        </Text>
                    ))}
                </Row>
                <Row justify="center" gap={1}>
                    <Text
                        color={color}
                        css={{
                            fontFamily: "Poppins",
                            fontSize: "1.5rem",
                            fontWeight: 700,
                            letterSpacing: "$wide",
                        }}
                    >
                        Habilidades
                    </Text>
                </Row>
                <Row justify="center" gap={1}>
                    {pokemon.abilities?.map((ability, index) => (
                        <Text
                            key={ability.slot}
                            size="1.0rem"
                            css={{
                                fontFamily: "Poppins",
                                fontWeight: 700,
                                textAlign: "center",
                                backgroundColor: "#858585",
                                color: "#FFFFFF",
                                width:"auto",
                                borderRadius: "12px",
                                padding: "2px 8px"
                            }}
                        >
                            {ability.ability.name}
                        </Text>
                    ))}
                </Row>
                <Row >
                    <Grid.Container gap={1}>

                        <Grid xs={2} css={{ display: "flex", flexDirection: "column" }}>

                            {pokemon.stats?.map((stat, index) => (
                                <Row key={stat.stat.name} justify="flex-end">
                                    <Text
                                        size={"1.0rem"}
                                        css={{
                                            fontFamily: "Poppins",
                                            fontweight: 700,
                                            color: `${color}`,
                                        }}
                                    >
                                        {
                                            stat.stat.name.split("-").length > 1 ?
                                                stat.stat.name.split("-")[0].substring(0,1).toUpperCase() + 
                                                stat.stat.name.split("-")[1].substring(0,2).toUpperCase()
                                                :
                                                stat.stat.name.split("-")[0].substring(0, 2).toUpperCase()}
                                    </Text>
                                </Row>
                            ))}
                        </Grid>
                        <Grid
                            xs={1}
                        >
                            <Col

                                css={{
                                    backgroundColor: "#E0E0E0",
                                    width: "1px",
                                    height: "100%",

                                }}

                            ></Col>
                        </Grid>
                        <Grid xs={9} css={{display:"flex", flexDirection:"column"}}>
                            {pokemon.stats?.map((stat, index) => (
                                <Row key={stat.stat.name} align="center">
                                    <Text
                                        size={"1.0rem"}
                                        css={{
                                            fontFamily: "Poppins",
                                            fontweight: 400,
                                            marginRight: "$3",
                                        }}
                                    >
                                        {"000".substring(`${stat.base_stat}`.length) + `${stat.base_stat}`}
                                    </Text>
                                    <Progress
                                        shadow
                                        color="success"
                                        value={stat.base_stat}
                                        max={200}
                                        css={{
                                            color: "$accents3",
                                            backgroundColor: `${color}80`,
                                            flexGrow: 1,
                                        }} />
                                </Row>
                            ))}
                        </Grid>
                    </Grid.Container>
                </Row>
            </Modal.Body>
        </Modal>
    );
}

export default PokemonDetailCard;