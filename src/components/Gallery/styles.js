import styled from "styled-components";

export const Container = styled.section`
padding: 90px 40px;
text-align: center;
background: #f7f7f7;

h2 {
font-size: 2.5rem;
margin-bottom: 50px;
font-weight: 700;
color: #222;
}
`;

export const Grid = styled.div`  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  justify-items: center;`;

export const Card = styled.div`
position: relative;
overflow: hidden;
border-radius: 20px;
cursor: pointer;
transition: transform 0.4s ease, box-shadow 0.4s ease;

img {
width: 100%;
height: 350px;
object-fit: cover;
border-radius: 20px;
transition: transform 0.4s ease, filter 0.4s ease;
}

&:hover {
transform: translateY(-10px);
box-shadow: 0 25px 45px rgba(0,0,0,0.35);
}

&:hover img {
transform: scale(1.1);
filter: brightness(1.05);
}
`;
