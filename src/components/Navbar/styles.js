import styled from "styled-components";

export const Container = styled.header`  width: 100%;
  display: flex;
  justify-content: center;
  position: relative; /* flutuante, não fixo */
  top: 0;
  left: 0;
  margin-top: 20px;
  z-index: 999;`;
  

export const NavBar = styled.nav`
width: 95%;
max-width: 1300px;
background: rgba(255, 255, 255, 0.82);
backdrop-filter: blur(18px);
border-radius: 22px;
padding: 12px 20px;
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: 0 12px 36px rgba(0, 0, 0, 0.1);
transition: all 0.3s ease;

@media (max-width: 780px) {
width: 90%;
padding: 10px 26px;
}
`;

export const Logo = styled.div`
display: flex;
align-items: center;
gap: 10px;
font-family: 'Courier New', Courier, monospace;
font-size: 1.35rem;
font-weight: 700;
color: #224a24ff;

img {
width: 50px;
height: 50px;
border-radius: 50%;
object-fit: cover;
border: 2px solid #224a24ff;
}

@media (max-width: 780px) {
font-size: 1.1rem;


img {
  width: 35px;
  height: 35px;
}


}
`;

export const Links = styled.div`
display: flex;
gap: 32px;

a {
text-decoration: none;
color: #1a1a1a;
font-size: 1.05rem;
font-weight: 600;
transition: 0.2s ease;


&:hover {
  color: #2b503fff;
  transform: translateY(-2px);
}


}

@media (max-width: 780px) {
display: none;
}
`;

export const Hamburger = styled.div`
width: 30px;
height: 24px;
display: none;
flex-direction: column;
justify-content: space-between;
cursor: pointer;

span {
width: 100%;
height: 3px;
background: #1a1a1a;
border-radius: 4px;
transition: 0.3s;
}

@media (max-width: 780px) {
display: flex;
}
`;

export const MobileMenu = styled.div`
position: absolute; /* deixa flutuante */
top: 100%; /* logo abaixo da navbar */
right: 0;
width: 80%;
max-width: 220px;
background: rgba(255, 255, 255, 0.95);
backdrop-filter: blur(14px);
padding: 12px;
border-radius: 16px;
box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
display: ${({ open }) => (open ? "flex" : "none")};
flex-direction: column;
gap: 12px;
transition: all 0.3s ease;
z-index: 1000;

a {
text-decoration: none;
color: #1a1a1a;
font-size: 1rem;
font-weight: 600;


&:hover {
  color: #2b503fff;
}

}

@media (max-width: 480px) {
width: 90%;
padding: 10px;
gap: 10px;


a {
  font-size: 0.95rem;
}


}

@media (min-width: 781px) {
display: none;
}
`;
