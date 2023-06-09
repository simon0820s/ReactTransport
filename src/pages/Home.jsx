import Nav from "../components/Nav";
import Inicio from "./Inicio";
import Mision from "./Mision";
import Nosotros from "./Nosotros";
import QuienesSomos from "./QuienesSomos";
import TrabajaConNosotros from "./TrabajaConNosotros";
import Valores from "./Valores";
import Vision from "./Vision";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 ...">
      <Nav />
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
