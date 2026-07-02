import { SiteIcon, type SiteIconProps } from "../icons/SiteIcons";
import { MdArrowOutward } from "react-icons/md";

export interface ProjectCardProps {
  to?: string;
  title?: string;
  description?: string;
  iconPref?: SiteIconProps;
}

const ProjectCard = ({
  to = "#",
  title = "Github",
  description = "abc",
  iconPref = {},
}: ProjectCardProps) => {
  const handleOnClick = () => {
    window.open(to, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      onClick={handleOnClick}
      // Reduced white background opacity and blur for a clearer, less frosty glass
      className="group relative flex w-full cursor-pointer overflow-hidden rounded-3xl border border-white/40 bg-white/10 backdrop-blur-lg backdrop-saturate-150 transition-transform duration-300"
    >
      {/* 1. Scrolling Shine Layer (Softened intensity) */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-transparent via-white/40 to-transparent bg-fixed opacity-30 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-60" />

      {/* 2. Edge Light Dispersion Layer (Softened inset shadow) */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_1px_8px_rgba(255,255,255,0.3)]" />

      {/* 3. Content Wrapper */}
      <div className="relative z-10 flex w-full items-start gap-4 p-6">
        {/* Left Icon (Slightly more transparent) */}

        <SiteIcon
          className="text-slate-700 mr-0"
          color={iconPref.color}
          icon={iconPref.icon}
          iconColor={iconPref.iconColor}
          size={iconPref.size}
        />

        {/* Content */}
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-lg font-semibold leading-tight text-slate-800">
            {title}
          </h3>

          <div className="relative mt-2 h-fit overflow-hidden">
            <p className="text-sm line-clamp-3 text-slate-700 leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Right Icon (Slightly more transparent) */}
        <button
          className="shrink-0 rounded-xl bg-white/30 p-2 text-slate-700 transition-all duration-200 hover:bg-white/60 hover:shadow-sm"
          aria-label="Open project"
        >
          <MdArrowOutward className="size-5" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
