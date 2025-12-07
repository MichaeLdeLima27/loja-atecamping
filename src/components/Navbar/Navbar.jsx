import { useState } from "react";
import { Container, NavBar, Logo, Links, Hamburger, MobileMenu } from "./styles";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <NavBar>
        <Logo>
          <img src="/logo.webp" alt="Logo ATÉ Camping" />
          Até Camping
        </Logo>

        <Links>
          <a href="https://collshp.com/lojaatecamping?share_channel_code=1" target="blank">Loja</a>
          <a href="#youtube">YouTube</a>
          <a href="#instagram">Redes Sociais</a>
          <a href="#Galeria">Galeria</a>
        </Links>

        <Hamburger onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </Hamburger>
      </NavBar>

      <MobileMenu open={open}>
        <a href="https://collshp.com/lojaatecamping?share_channel_code=1" target="blank" onClick={() => setOpen(false)}>Loja</a>
        <a href="#youtube" onClick={() => setOpen(false)}>YouTube</a>
        <a href="#instagram" onClick={() => setOpen(false)}>Redes Sociais</a>
        <a href="#Galeria" onClick={() => setOpen(false)}>Galeria</a>
      </MobileMenu>
    </Container>
  );
}
