import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { SiteIcon } from "../icons/SiteIcons";

const ProjectCard = () => {
  const handleOnClick = () => {
    window.open("https://github.com/", "_blank", "noopener,noreferrer");
  };

  return (
    <div
      onClick={handleOnClick}
      // Added 'group' for hover effects, relative positioning, and overflow-hidden for the light layers
      className="group relative flex w-full cursor-pointer overflow-hidden rounded-3xl border border-white/60 bg-white/30 backdrop-blur-2xl backdrop-saturate-150 transition-transform duration-300"
    >
      {/* 1. Scrolling Shine Layer (Brightens slightly on card hover) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/90 to-transparent bg-fixed opacity-40 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-70" />

      {/* 2. Edge Light Dispersion Layer */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_2px_15px_rgba(255,255,255,1)]" />

      {/* 3. Content Wrapper (Needs relative + z-index to sit above the light layers) */}
      <div className="relative z-10 flex w-full items-start gap-4 p-6">
        {/* Left Icon (Wrapped in a subtle glass circle for aesthetics) */}
        <div className="shrink-0 rounded-full bg-white/50 p-2 shadow-sm border border-white/80">
          <SiteIcon className="size-6 text-slate-700" />
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-lg font-semibold leading-tight text-slate-800">
            Git desktop
          </h3>

          <div className="relative mt-2 h-fit overflow-hidden">
            <p className="text-sm line-clamp-3 text-slate-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam
              voluptatibus ad molestiae ex similique soluta. Impedit quam
              voluptatum dignissimos! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Asperiores accusamus placeat natus distinctio
              repellat.
            </p>

            {/* Fade (Adjusted to blend with the glass background instead of solid color) */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white/60 to-transparent blur-[1px]" />
          </div>
        </div>

        {/* Right Icon */}
        <button
          className="shrink-0 rounded-xl bg-white/40 p-2 text-slate-700 transition-all duration-200 hover:bg-white/80 hover:shadow-sm"
          aria-label="Open project"
        >
          <LuSquareArrowOutUpRight className="size-5" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
