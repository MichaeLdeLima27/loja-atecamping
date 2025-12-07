import styled from "styled-components";

export const Container = styled.footer`
padding: 40px 20px;
background: #4b3b2a;
color: #f4e8d8;
font-family: 'Courier New', Courier, monospace;

@media (max-width: 780px) {
padding: 30px 15px;
}

@media (max-width: 480px) {
padding: 25px 10px;
}
`;

export const Content = styled.div`
max-width: 1200px;
margin: 0 auto;
text-align: center;

/* Mobile centralizando melhor o conteúdo */
@media (max-width: 780px) {
text-align: center;
}
`;

export const FooterLinks = styled.div`
margin: 20px 0;
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 25px;

a {
color: #f4e8d8;
text-decoration: none;
font-weight: 600;
font-size: 1rem;
transition: all 0.2s ease;


&:hover {
  color: #c97c50;
  transform: translateY(-2px);
}


}

/* Mobile */
@media (max-width: 480px) {
gap: 15px;


a {
  font-size: 0.85rem;
}


}
`;

/* Adicionando ícone LinkedIn */
export const SocialIcons = styled.div`
margin-top: 15px;
display: flex;
justify-content: center;
gap: 15px;

a {
display: inline-flex;
align-items: center;
justify-content: center;
color: #f4e8d8;
font-size: 1.25rem;
transition: all 0.2s ease;


&:hover {
  color: #0077b5; /* azul LinkedIn */
}


}

@media (max-width: 480px) {
gap: 10px;


a {
  font-size: 1rem;
}


}
`;

export const Copyright = styled.p`
margin-top: 20px;
font-size: 0.85rem;
color: #f4e8d8;

@media (max-width: 480px) {
font-size: 0.75rem;
}
`;
