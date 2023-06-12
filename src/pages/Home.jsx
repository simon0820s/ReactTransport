import Nav from "../components/Nav";
import Inicio from "./Inicio";
import MisionVision from "./Mision";
import Nosotros from "./Nosotros";
import QuienesSomos from "./QuienesSomos";
import TrabajaConNosotros from "./TrabajaConNosotros";
import Valores from "./Valores";

const Home = () => {
  return (
    <div className="w-screen bg-gradient-to-r from-indigo-500 ...">
      <Nav />
      <Inicio />
      <Nosotros/>
      <QuienesSomos/>
      <MisionVision/>
      <Valores/>
      <TrabajaConNosotros/>
    </div>
  );
};

export default Home;
