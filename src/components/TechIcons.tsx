import jsSvg from "../assets/icons/javascript.svg";
import tsSvg from "../assets/icons/typescript.svg";
import nodeSvg from "../assets/icons/node.svg";
import reactSvg from "../assets/icons/react.svg";
import tanstackSvg from "../assets/icons/tanstack.svg";
import viteSvg from "../assets/icons/vite.svg";
import expressSvg from "../assets/icons/express.svg";
import socketSvg from "../assets/icons/socketio.svg";
import pgSvg from "../assets/icons/postgresql.svg";

export default function TechIcons() {
  return (
    <div className="grid grid-1fr-1fr-1fr grid-gap-30 grid-center">
      <img src={jsSvg} alt="javascript" />
      <img src={tsSvg} alt="typescript" />
      <img src={nodeSvg} alt="node-ts" />
      <img src={reactSvg} alt="react" />
      <img src={viteSvg} alt="vite" />
      <img src={tanstackSvg} alt="tanstack" />
      <img src={expressSvg} alt="express" />
      <img src={socketSvg} alt="socket.io" />
      <img src={pgSvg} alt="postgres" />
    </div>
  );
}
