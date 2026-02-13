import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export default function TechIcons() {
  const techMods = import.meta.glob("../assets/icons/tech/*.svg", {
    eager: true,
    import: "default",
  });
  const misMods = import.meta.glob("../assets/icons/mis/*.svg", {
    eager: true,
    import: "default",
  });
  const techSvgs = Object.entries(techMods).map(([key, value]) => {
    const slashI = key.lastIndexOf("-");
    const extI = key.lastIndexOf(".");
    const name = key.slice(slashI + 1, extI);
    return { [name]: value };
  });
  const misSvgs = Object.entries(misMods).map(([key, value]) => {
    const slashI = key.lastIndexOf("-");
    const extI = key.lastIndexOf(".");
    const name = key.slice(slashI + 1, extI);
    return { [name]: value };
  });
  return (
    <>
      <div className="grid grid-cols-3 gap-5">
        {techSvgs.map((svg) => {
          const path = Object.values(svg)[0];
          const name = Object.keys(svg)[0];

          return (
            <Tooltip key={name}>
              <TooltipTrigger>
                <img src={String(path)} alt="javascript" />
              </TooltipTrigger>
              <TooltipContent>{name}</TooltipContent>
            </Tooltip>
          );
        })}
      </div>
      <p className="text-italic text-small">Miscellanous:</p>
      <div className="grid grid-cols-3 gap-5">
        {misSvgs.map((svg) => {
          const path = Object.values(svg)[0];
          const name = Object.keys(svg)[0];

          return (
            <Tooltip key={name}>
              <TooltipTrigger>
                <img src={String(path)} alt="javascript" />
              </TooltipTrigger>
              <TooltipContent>{name}</TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </>
  );
}
