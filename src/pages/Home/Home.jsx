import Navbar from "../../components/Navbar/Navbar";
import Produtos from "../Produtos/Produtos";
import YoutubeSection from "../../components/YoutubeSection/YoutubeSection";
import InstagramSection from "../../components/InstagramSection/InstagramSection";
import Gallery from "../../components/Gallery/Gallery";
import Footer from "../../components/Footer/Footer";

export default function Home() {
const imagens = [
    "./barraca_linda.jpg",
    "./camping1.jpg",
    "./camping2.jpg",
    "./camping3.jpg",
    "./camping4.jpg",
    "./camping5.jpg",
    "./camping6.jpg",
    "./camping7.jpg",
];

return (
    <>
    <Navbar />
    <Produtos />
    <YoutubeSection />
    <Gallery imagens={imagens} />
    <InstagramSection />
    <Footer />
    </>
);
}
