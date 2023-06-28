import PopUp from "../components/PopUp/PopUp";
import Background from "../img/BGBienvenida.png";
function Bienvenida() {
  return (
    <div
      className="bienvenida"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <PopUp />
    </div>
  );
}

export default Bienvenida;
