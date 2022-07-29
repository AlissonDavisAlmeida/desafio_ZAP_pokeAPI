import { Col, Container, Input, Row, Text } from "@nextui-org/react";
import Image from "next/image";
import pokeBall from "../../public/Pokeball.png"
import search from "../../public/Vector.png"

interface LayoutProps {
    children: React.ReactNode;
}


function Layout({ children }: LayoutProps) {
    return (
        <Container
            display="flex"
            direction="column"
            alignItems="flex-start"
            css={{
                backgroundColor: "#F7F7F7",
                borderRadius: "12px",
                padding: "24px 16px 0px",
                boxShadow: "0px 8px 16px 4px rgba(0, 0, 0, 0.25);"
            }}>
            <Row css={{ display: "flex", alignItems: "center" }}>

                <Image src={pokeBall} alt="pokeball" width={34} height={34} />

                <Col css={{ display: "flex", marginLeft: "10px" }}>
                    <Text css={{ fontFamily: "Poppins", fontStyle: "normal", fontSize: "2rem" }}>Pokédex</Text>

                </Col>
            </Row>
            <Row
                css={{
                    boxSizing: "border-box",
                    border: "1px solid #E0E0E0",
                    borderRadius: "8px",
                    padding: "4px 8px",
                    backgroundColor: "#FFFFFF"
                }}
            >
                <Input
                    fullWidth
                    borderWeight="light"
                    bordered
                    color="default"
                    size="md"
                    width="50%"
                    shadow={false}
                    placeholder="Procurar"
                    contentLeft={
                        <Image src={search} alt="search" width={10} height={10} />
                    }
                />
            </Row>
            <Row>

                {children}
            </Row>
        </Container>

    );
}

export default Layout;