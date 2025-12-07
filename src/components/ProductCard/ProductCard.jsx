import React from "react";
import { Card } from "./styles"; // apenas Card, sem ComprarButton

export default function ProductCard({ produto }) {
  return (
    <Card>
      <img src={produto.imagem} alt={produto.nome} />
      <div className="info">
        <h3>{produto.nome}</h3>
        <p>{produto.preco}</p>
        <a href={produto.link} target="_blank" rel="noopener noreferrer">
          Comprar
        </a>
      </div>
    </Card>
  );
}
