import styled from "styled-components";

export const Container = styled.section`
width: 100%;
padding: 80px 20px;
background: #2d413106;
text-align: center;

h2 {
font-size: 2rem;
color: #26342dff;
margin-bottom: 40px;
font-weight: 600;
letter-spacing: 1px;
}
`;

export const VideoGrid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 25px;
max-width: 1200px;
margin: 0 auto;

iframe {
width: 100%;
height: 180px;
border-radius: 12px;
border: 1px solid rgba(255, 255, 255, 0.06);
background: #1a1a1a;
transition: transform 0.25s ease, border-color 0.25s ease;


&:hover {
  transform: translateY(-3px);
  border-color: #00ff7f; 
}


}

/* Ajuste mobile */
@media (max-width: 480px) {
grid-template-columns: 1fr; /* um vídeo por linha */
iframe {
height: 160px; /* altura ajustada para mobile */
}
}

@media (min-width: 768px) {
iframe {
height: 200px;
}
}

@media (min-width: 1024px) {
iframe {
height: 220px;
}
}
`;
