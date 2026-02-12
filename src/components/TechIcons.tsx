import jsSvg from "../assets/javascript.svg";
import tsSvg from "../assets/typescript.svg";
import nodeSvg from "../assets/node.svg";
import reactSvg from "../assets/react.svg";
import tanstackSvg from "../assets/tanstack.svg";
import viteSvg from "../assets/vite.svg";
import expressSvg from "../assets/express.svg";
import socketSvg from "../assets/socketio.svg";
import pgSvg from "../assets/postgresql.svg";

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
