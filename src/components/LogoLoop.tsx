import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";

export type LogoItem =
  | {
      node: React.ReactNode;
      href?: string;
      title?: string;
      ariaLabel?: string;
    }
  | {
      src: string;
      alt?: string;
      href?: string;
      title?: string;
      srcSet?: string;
      sizes?: string;
      width?: number;
      height?: number;
    };

export interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: "left" | "right";
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

const isNodeItem = (item: LogoItem): item is { node: React.ReactNode } => {
  return "node" in item;
};


const cx = (...parts: Array<string | false | null | undefined>) =>
  parts.filter(Boolean).join(" ");

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2,
} as const;

const toCssLength = (value?: number | string): string | undefined =>
  typeof value === "number" ? `${value}px` : value ?? undefined;

const LogoLoop = React.memo<LogoLoopProps>(
  ({
    logos,
    speed = 100,
    direction = "left",
    width = "100%",
    logoHeight = 32,
    gap = 64,
    pauseOnHover = true,
    fadeOut = false,
    fadeOutColor = "#fff",
    className,
    style,
  }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const seqRef = useRef<HTMLUListElement>(null);

    const [copyCount, setCopyCount] = useState<number>(ANIMATION_CONFIG.MIN_COPIES);

    const [isHovered, setIsHovered] = useState(false);
    const [seqWidth, setSeqWidth] = useState(0);
    

    const updateWidth = useCallback(() => {
      const container = containerRef.current;
      const seq = seqRef.current;
      if (!container || !seq) return;
      const width = seq.getBoundingClientRect().width;
      const count =
        Math.ceil(container.getBoundingClientRect().width / width) +
        ANIMATION_CONFIG.COPY_HEADROOM;
      setSeqWidth(width);
      setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, count));
    }, []);

    useEffect(() => {
      updateWidth();
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
    }, [updateWidth]);

    useEffect(() => {
      const images = seqRef.current?.querySelectorAll("img") ?? [];
      if (images.length === 0) return;
      let loaded = 0;
      const handleLoad = () => {
        loaded++;
        if (loaded === images.length) updateWidth();
      };
      images.forEach((img) => {
        if (img.complete) return handleLoad();
        img.addEventListener("load", handleLoad);
        img.addEventListener("error", handleLoad);
      });
      return () => {
        images.forEach((img) => {
          img.removeEventListener("load", handleLoad);
          img.removeEventListener("error", handleLoad);
        });
      };
    }, [logos]);

    useEffect(() => {
      const track = trackRef.current;
      if (!track || seqWidth === 0) return;
      let offset = 0;
      let animationId: number;
      let lastTime: number | null = null;
      const velocity = direction === "left" ? speed : -speed;

      const animate = (time: number) => {
        if (!lastTime) lastTime = time;
        const delta = (time - lastTime) / 1000;
        lastTime = time;
        if (!(pauseOnHover && isHovered)) {
          offset += velocity * delta;
          offset = ((offset % seqWidth) + seqWidth) % seqWidth;
          track.style.transform = `translateX(-${offset}px)`;
        }
        animationId = requestAnimationFrame(animate);
      };
      animationId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationId);
    }, [seqWidth, speed, direction, isHovered, pauseOnHover]);

    const cssVars: Record<string, string | number> = useMemo(
  () => ({
    "--logoloop-gap": `${gap}px`,
    "--logoloop-logoHeight": `${logoHeight}px`,
    ...(fadeOutColor && { "--logoloop-fadeColor": fadeOutColor }),
  }),
  [gap, logoHeight, fadeOutColor]
);


    const renderItem = useCallback(
      (item: LogoItem, i: number) => {
        const content = isNodeItem(item) ? (
          <span style={{ height: logoHeight }}>{item.node}</span>
        ) : (
          <Image
            src={item.src}
            alt={item.alt || ""}
            title={item.title}
            width={item.width || logoHeight}
            height={item.height || logoHeight}
            className="object-contain"
          />
        );
        const body = item.href ? (
          <a
            href={item.href}
            title={item.title}
            aria-label={"ariaLabel" in item ? item.ariaLabel : item.title}
            target="_blank"
            rel="noopener noreferrer"
          >
            {content}
          </a>
        ) : (
          content
        );
        return (
          <li
            key={i}
            className="flex items-center justify-center mr-[var(--logoloop-gap)]"
            style={{ height: logoHeight }}
          >
            {body}
          </li>
        );
      },
      [logoHeight]
    );

    return (
      <div
        ref={containerRef}
        className={cx("relative overflow-hidden", className)}
        style={{ ...cssVars, width: toCssLength(width), ...style }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {fadeOut && (
          <>
            <div className="absolute left-0 top-0 bottom-0 z-10 w-[60px] pointer-events-none bg-gradient-to-r from-[var(--logoloop-fadeColor)] to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 z-10 w-[60px] pointer-events-none bg-gradient-to-l from-[var(--logoloop-fadeColor)] to-transparent" />
          </>
        )}
        <div
          ref={trackRef}
          className="flex w-max will-change-transform select-none"
        >
          {Array.from({ length: copyCount }).map((_, ci) => (
            <ul
              key={ci}
              className="flex items-center"
              ref={ci === 0 ? seqRef : undefined}
              aria-hidden={ci > 0}
            >
              {logos.map((logo, i) => renderItem(logo, i))}
            </ul>
          ))}
        </div>
      </div>
    );
  }
);

LogoLoop.displayName = "LogoLoop";
export default LogoLoop;
