import { renderToString } from "react-dom/server";
import Css from "./quienes-somos.module.scss";

const QuienesSomos: React.FC = () => {
  return (
    <div>
      <h1>Hola Mundo</h1>
      <p>
        Somos un grupo de compitas que nos gusta sentirnos en comunidad y
        compartir en las buenas y en las malas, siempre pensando en el bienestar
        propio y de los demás para ser mejores personas cada día
      </p>
      <p>
        Síguenos en nuestro{" "}
        <a
          className={Css.rainbowText}
          href="https://www.instagram.com/amoikacr"
        >
          instagram
        </a>{" "}
        para mas contenido
      </p>
    </div>
  );
};

export default renderToString(<QuienesSomos />);
