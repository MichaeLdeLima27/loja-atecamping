import styled from "styled-components";

export const Container = styled.section`
padding: 30px 20px;
text-align: center;
background: #f6f6f6ff;

h2 {
font-size: 1.8rem;
font-weight: 700;
color: #4b3b2a;
margin-bottom: 50px;


@media (max-width: 780px) {
  font-size: 1.5rem;
  margin-bottom: 30px;
}


}
`;

export const SocialGrid = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
justify-items: center;
gap: 50px;
margin-left: 400px;

@media (max-width: 1024px) {
grid-template-columns: repeat(3, 1fr);
gap: 30px;
}

@media (max-width: 780px) {
grid-template-columns: repeat(2, 1fr);
gap: 20px;
margin-left: 0; /* remove margem fixa */
margin-right: 0;
}

@media (max-width: 480px) {
grid-template-columns: 1fr;
gap: 15px;
}
`;

export const Card = styled.div`
background: #fafafaff;
border: 2px solid #d9c6a5;
border-radius: 12px;
padding: 15px 10px;
text-align: center;
width: 160px;
transition: all 0.2s ease;

&:hover {
transform: translateY(-3px);
box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.icon {
width: 50px;
height: 50px;
margin: 0 auto 10px;
border-radius: 50%;
background: #f4e8d8;
display: flex;
align-items: center;
justify-content: center;


img {
  width: 28px;
  height: 28px;
  object-fit: contain;
}


}

h3 {
font-size: 1rem;
color: #4b3b2a;
margin-bottom: 10px;


@media (max-width: 780px) {
  font-size: 0.9rem;
}


}
`;

export const SeguirButton = styled.a`
display: inline-block;
padding: 6px 18px;
background: #5a463aff;
color: #fff;
border-radius: 20px;
font-weight: 600;
font-size: 0.85rem;
text-decoration: none;
transition: all 0.2s ease;

&:hover {
background: #b3663d;
transform: translateY(-1px);
}

@media (max-width: 780px) {
padding: 5px 14px;
font-size: 0.8rem;
}
`;
