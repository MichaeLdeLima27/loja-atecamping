import styled from "styled-components";

export const Card = styled.div`
width: 280px;       /* largura fixa igual à Home */
height: 380px;      /* altura fixa igual à Home */
border-radius: 16px;
overflow: hidden;
box-shadow: 0 5px 15px rgba(0,0,0,0.1);
display: flex;
flex-direction: column;
justify-content: space-between;
background: #fff;

img {
width: 100%;
height: 220px;
object-fit: cover; /* mantém proporção e não corta */
background: #f7f7f7;
}

.info {
padding: 10px;
display: flex;
flex-direction: column;
justify-content: space-between;
flex-grow: 1;
}

h3 {
font-size: 1rem;
margin: 0 0 10px 0;
font-weight: 600;
}

p {
font-size: 0.9rem;
font-weight: 500;
margin: 0 0 10px 0;
}

a {
display: inline-block;
text-align: center;
background: #335541ff;
color: #fff;
padding: 8px 15px;
border-radius: 20px;
text-decoration: none;
font-weight: 600;
font-size: 0.9rem;
transition: 0.3s ease;


&:hover {
  background: #14241aff;
  transform: translateY(-2px);
}


}

@media (max-width: 780px) {
margin: 0 auto; /* centraliza horizontalmente */
text-align: center;


.info {
  align-items: center; /* centraliza texto e botão */
}

a {
  margin: 0 auto; /* centraliza o botão */
}


}
`;
