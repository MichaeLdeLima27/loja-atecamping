import { Container, Grid, Card } from "./styles";

export default function Gallery({ imagens }) {
return ( <Container> <h2>Galeria de Imagens</h2> <Grid>
{imagens.map((img, i) => ( <Card key={i}>
<img src={img} alt={`Foto ${i + 1}`} /> </Card>
))} </Grid> </Container>
);
}
