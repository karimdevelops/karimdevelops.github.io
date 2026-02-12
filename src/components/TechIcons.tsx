import jsSvg from "../assets/icons/javascript.svg";
import tsSvg from "../assets/icons/typescript.svg";
import nodeSvg from "../assets/icons/node.svg";
import reactSvg from "../assets/icons/react.svg";
import tanstackSvg from "../assets/icons/tanstack.svg";
import viteSvg from "../assets/icons/vite.svg";
import expressSvg from "../assets/icons/express.svg";
import socketSvg from "../assets/icons/socketio.svg";
import pgSvg from "../assets/icons/postgresql.svg";
import gitSvg from "../assets/icons/git.svg";
import figmaSvg from "../assets/icons/figma.svg";
import dbeaverSvg from "../assets/icons/dbeaver.svg";
import vscodeSvg from "../assets/icons/vscode.svg";
import archSvg from "../assets/icons/archlinux.svg";
import hyprlandSvg from "../assets/icons/hyprland.svg";

export default function TechIcons() {
  return (
    <>
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
      <p className="text-italic text-small">Miscellanous:</p>
      <div className="grid grid-1fr-1fr-1fr grid-gap-30 grid-center">
        <img src={gitSvg} alt="git" />
        <img src={figmaSvg} alt="vite" />
        <img src={dbeaverSvg} alt="vite" />
        <img src={archSvg} alt="arch" />
        <img src={hyprlandSvg} alt="hyprland" />
        <img src={vscodeSvg} alt="postgres" />
      </div>
    </>
  );
}
