import type { Award } from "../pages/awards.astro";
import ChAward from "./ChAward";
import "../scss/awards.scss";
import { useEffect, useRef, useState } from "preact/hooks";
interface Props {
  awards: Award[];
  year: string;
  initialIsOpen?: boolean;
  chevronClicked: () => void;
}

export default function YearAward({
  awards,
  year,
  initialIsOpen = false,
  chevronClicked,
}: Props) {
  const [isOpen, setIsOpen] = useState(initialIsOpen);
  const containerRef = useRef<HTMLDivElement>(null);
  const directionIconRef = useRef<HTMLSpanElement>(null);
  const arrowIconRef = useRef<HTMLSpanElement>(null);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      if (isOpen) {
        container.style.height = `${container.scrollHeight}px`;
        container.style.opacity = "1";
      } else {
        container.style.height = "0px";
        container.style.opacity = "0";
      }
    }

    if (arrowIconRef.current) {
      if (isOpen) {
        arrowIconRef.current.classList.add("open");
      } else {
        arrowIconRef.current.classList.remove("open");
      }
    }

    if (directionIconRef.current) {
      if (isOpen) {
        directionIconRef.current.classList.add("open");
      } else {
        directionIconRef.current.classList.remove("open");
      }
    }
  }, [isOpen]);

  return (
    <div class={`${year} year__award`}>
      <div
        class="flex justify-between year__award__top"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div class="flex items-center">
          {windowWidth <= 767 ? (
            <span
              class="year__award__direction__icon__mobile ml-5"
              ref={(el) => (directionIconRef.current = el)}
            ></span>
          ) : (
            <span
              ref={(el) => (directionIconRef.current = el)}
              class="year__award__direction__icon__pc"
            >
              <svg
                width="100%"
                height="auto"
                viewBox="0 0 38 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38 14.6532L11.75 27.3366L11.75 1.96975L38 14.6532Z"
                  fill="#7AEBFF"
                />
                <path
                  d="M9 2.3682L34.4254 14.6532L9 26.9382L9 2.3682Z"
                  stroke="black"
                  stroke-width="0.5"
                />
              </svg>
            </span>
          )}

          <h2 class="helvetica_light tracking-widest ml-10">{year}</h2>
        </div>
        <span ref={(el) => (arrowIconRef.current = el)} class="award__arrow">
          <svg
            width="100%"
            height="auto"
            viewBox="0 0 60 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="4.37114e-08"
              y1="8.5"
              x2="60"
              y2="8.50001"
              stroke="black"
            />
            <line
              y1="-0.5"
              x2="23.0964"
              y2="-0.5"
              transform="matrix(-0.938096 -0.346374 0.716 -0.6981 60 8)"
              stroke="black"
            />
          </svg>
        </span>
      </div>
      <div
        class={`awards-container ${isOpen ? "open" : ""}`}
        ref={(el) => (containerRef.current = el)}
      >
        {awards.map((award) => {
          return (
            <div class={`${isOpen ? "" : "h-0 hidden"}`}>
              <ChAward
                date={award.date}
                tags={award.tags}
                title={award.title}
                contents={award.contents}
                images={award.images}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
