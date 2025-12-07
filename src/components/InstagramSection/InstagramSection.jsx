import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { Container, SocialGrid, Card, SeguirButton } from "./styles";

export default function InstagramSection() {
const redes = [
{ nome: "Instagram", Icon: FaInstagram, link: "https://www.instagram.com/ketlynra_/(https://www.instagram.com/ketlynra_/)" },
{ nome: "Facebook", Icon: FaFacebook, link: "https://www.facebook.com/micheel.cwbrisa(https://www.facebook.com/micheel.cwbrisa)" },
{ nome: "YouTube", Icon: FaYoutube, link: "https://www.youtube.com/@atecamping(https://www.youtube.com/@atecamping)" }
];

return ( <Container id="instagram"> <h2 data-aos="fade-up">Nossas Redes Sociais</h2> <SocialGrid>
{redes.map((r, i) => (
<Card
key={i}
data-aos="fade-up"
data-aos-delay={i * 150}
data-aos-once="true"
> <div className="icon">
<r.Icon size={28} color="#5a3e2b" /> {/* ícone marrom */} </div> <h3>{r.nome}</h3> <SeguirButton href={r.link} target="_blank">Seguir</SeguirButton> </Card>
))} </SocialGrid> </Container>
);
}
