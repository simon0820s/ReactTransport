import Nav from "../components/Nav";
import Inicio from "./Inicio";
import Mision from "./Mision";
import Nosotros from "./Nosotros";
import QuienesSomos from "./QuienesSomos";
import TrabajaConNosotros from "./TrabajaConNosotros";
import Valores from "./Valores";
import Vision from "./Vision";
import Bg from "../components/Bg";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Nav />
      <Bg/>
      <Inicio />
      <Nosotros />
      <QuienesSomos />
      <Mision />
      <Vision />
      <Valores />
      <TrabajaConNosotros />
    </div>
  );
};

export default Home;
