import { Col, Container, FormElement, Input, Row, Text } from "@nextui-org/react";
import Image from "next/image";
import pokeBall from "../../public/Pokeball.png"
import search from "../../public/Vector.png"

interface LayoutProps {
    children: React.ReactNode;
    onSearch?: (event: React.ChangeEvent<FormElement>) => void;
}


function Layout({ children, onSearch }: LayoutProps) {
    return (
        <Container
            fluid
            display="flex"
            direction="column"
            alignItems="flex-start"
            css={{
                backgroundColor: "#F7F7F7",
                borderRadius: "12px",
                padding: "24px 16px 0px",
                marginBottom: "24px",
                boxShadow: "0px 8px 16px 4px rgba(0, 0, 0, 0.25);"
            }}>
            <Row css={{ display: "flex", alignItems: "center" }}>

                <Image src={pokeBall} alt="pokeball" width={34} height={34} />

                <Col css={{ display: "flex", marginLeft: "10px" }}>
                    <Text css={{ fontFamily: "Poppins",
                                 fontWeight:700,
                                 lineHeight:"32px", 
                                 fontStyle: "normal", 
                                 fontSize: "2rem",
                                 letterSpacing:"$wide" }}>Pokédex</Text>

                </Col>
            </Row>
            <Row
                css={{
                    boxSizing: "border-box",
                    marginTop:"10px",
                    border: "1px solid #E0E0E0",
                    borderRadius: "8px",
                    backgroundColor: "#FFFFFF"
                }}
            >
                <Input
                    onChange={onSearch}
                    fullWidth
                    borderWeight="light"
                    bordered
                    color="default"
                    size="md"
                    width="50%"
                    shadow={false}
                    placeholder="Procurar"
                    contentLeft={
                        <Image src={search} alt="search" width={15} height={15} />
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