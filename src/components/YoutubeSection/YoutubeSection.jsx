import { Container, VideoGrid } from "./styles";

export default function YoutubeSection() {
  const videos = [
    "https://www.youtube.com/embed/Byza3D-KlEY",
    "https://www.youtube.com/embed/Ms2wt6xoA7Q",
    "https://www.youtube.com/embed/3C9xc4mL2pA"
  ];

  return (
    <Container id="youtube">
      <h2>Últimos vídeos do canal</h2>
      <VideoGrid>
        {videos.map((v, i) => (
          <iframe key={i} src={v} title="youtube video" allowFullScreen />
        ))}
      </VideoGrid>
    </Container>
  );
}
