import { Container, Content, FooterLinks, Copyright } from "./styles";

export default function Footer() {
const links = [
{ nome: "Home", href: "/" },
{ nome: "Produtos", href: "/todos-produtos" },
{ nome: "Blog", href: "/blog" },
{ nome: "Contato", href: "/contato" }
];

return ( <Container> <Content> <FooterLinks>
{links.map((link, i) => ( <a key={i} href={link.href}>{link.nome}</a>
))} </FooterLinks> <Copyright>ATÉ Camping © {new Date().getFullYear()} - Todos os direitos reservados</Copyright> </Content> </Container>
);
}

