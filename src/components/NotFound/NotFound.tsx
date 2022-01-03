import { Container, Number, SubTitle, Text } from "./styled";

export default function NotFound() { 
    return (
        <Container>
            <Number>202</Number>
            <SubTitle>Opa.. Não achamos nada em nossos servidores</SubTitle>
            <Text>Provavelmente isso aconteceu porque o termo que você usou pesquisar não existe ou nos não temos em nossos servidores. Pesquise por outro termo ou veja os sons que selecionamos para você</Text>
        </Container>
    )
}