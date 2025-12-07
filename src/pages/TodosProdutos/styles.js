import styled from "styled-components";

export const Container = styled.section`  padding: 60px 20px;
text-align: center;
background: #f7f7f7;`;

export const Titulo = styled.h2`
font-size: 2.2rem;
margin-bottom: 50px;
font-weight: 700;
color: #222;

span {
display: block;
font-size: 1.2rem;
margin-top: 10px;
font-weight: 400;
color: #555;
}
`;

export const Grid = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 30px;
justify-items: center;

@media (max-width: 1200px) {
grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 900px) {
grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 600px) {
grid-template-columns: 1fr;
}
`;

export const VerMais = styled.a`
display: inline-block;
margin-top: 40px;
margin-right: 15px;
padding: 12px 28px;
background: #335541ff;
color: #fff;
border-radius: 30px;
text-decoration: none;
font-weight: 600;
font-size: 1rem;
transition: 0.3s ease;

&:hover {
background: #14241aff;
transform: translateY(-2px);
}
`;

export const VoltarHome = styled.a`
display: inline-block;
margin-top: 40px;
padding: 12px 28px;
background: #777;
color: #fff;
border-radius: 30px;
text-decoration: none;
font-weight: 600;
font-size: 1rem;
transition: 0.3s ease;

&:hover {
background: #555;
transform: translateY(-2px);
}
`;
