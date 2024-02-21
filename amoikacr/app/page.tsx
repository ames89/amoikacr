import { PhotoSphere } from "./components/photo-sphere";
import Css from "./page.module.scss";

export default function Page() {
  return (
    <div className={Css.main}>
      <PhotoSphere />
    </div>
  );
}
