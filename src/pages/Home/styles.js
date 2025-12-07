import styled from "styled-components";

export const Container = styled.section`  height: 100vh;
  width: 100%;
  background: url("https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80")
    center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px; /* evita que o conteúdo encoste na borda em telas pequenas */`;

export const Content = styled.div`  text-align: center;
  color: #fff;`;

export const Title = styled.h1`
font-size: 3rem;
font-weight: 700;
margin-bottom: 2rem;
text-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);

@media (max-width: 780px) {
font-size: 2rem; /* menor no mobile */
}

@media (max-width: 480px) {
font-size: 1.6rem; /* ainda menor em celulares pequenos */
}
`;

export const Buttons = styled.div`
display: flex;
gap: 2rem;
justify-content: center;
flex-wrap: wrap; /* permite quebrar os botões se não couberem */

a {
padding: 14px 32px;
background: rgba(0, 0, 0, 0.6);
border-radius: 8px;
color: #fff;
font-size: 1.2rem;
transition: 0.3s;


&:hover {
  background: rgba(0, 0, 0, 0.8);
}

@media (max-width: 780px) {
  font-size: 1rem;
  padding: 12px 24px;
}

@media (max-width: 480px) {
  font-size: 0.9rem;
  padding: 10px 20px;
}

}
`;
