import "../styles/components/CubeComponents.css"; // Asegúrate de enlazar el CSS

const CubeComponent = () => {
  return (
    <div className="frame">
      <div className="center">
        <div className="cube">
          <div className="side front"></div>
          <div className="side back"></div>
          <div className="side right"></div>
          <div className="side left"></div>
          <div className="side top"></div>
          <div className="side bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default CubeComponent;
