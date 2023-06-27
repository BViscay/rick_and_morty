import PopUp from "../components/PopUp/PopUp";
function Bienvenida() {
  return (
    <div
      className="bienvenida"
      style={{
        backgroundImage: 'url("./img/BGBienvenida")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <PopUp />
    </div>
  );
}

export default Bienvenida;
