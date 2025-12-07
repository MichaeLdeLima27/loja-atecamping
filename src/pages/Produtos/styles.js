import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 1300px;
  margin: 120px auto 80px;
  padding: 0 20px;
`;

export const Titulo = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;

  span {
    display: block;
    margin-top: 6px;
    font-size: 1.1rem;
    font-weight: 400;
    color: #555;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 28px;
  margin-top: 40px;
`;

export const VerMais = styled.a`
  display: block;
  margin: 40px auto 0;
  width: fit-content;
  background: #605849ff;
  color: white;
  padding: 12px 28px;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 400;
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    background: #4d391f33;
    transform: scale(1.03);
  }
`;
