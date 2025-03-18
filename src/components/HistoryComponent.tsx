import type { Signal } from "@preact/signals";
import Period from "./Period.tsx";
import { useEffect, useRef, useState } from "preact/hooks";
import { ScrollIcon } from "../utils/svgs.tsx";

export interface PeriodType {
  year: string;
  title: string;
  paragraph: string;
}

type Props = {
  count: Signal<number>;
  periods: PeriodType[];
};

export default function HistoryComponent({ count ,periods}: Props) {
  const [windowWidth, setWindowWidth] = useState(0);
  const [detailPos, setDetailPos] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //scrollボタンを押下した際に移動するpx数
  const xScroll = 200;
  const yScroll = 200;

  const historyRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  function elementClick() {
    if (historyRef.current) {
      if (iconRef.current) {
        iconRef.current.classList.add("shrinking");

        setTimeout(() => {
          iconRef.current!.classList.remove("shrinking");
        }, 200);
      }
      historyRef.current.scrollBy({
        top: windowWidth <= 767 ? -xScroll : 0,
        left: windowWidth > 767 ? -yScroll : 0,
        behavior: "smooth",
      });
    }
  }

  function onShrinkClick(index: number) {
    setDetailPos(index);
    historyRef.current?.scrollBy({
      top: windowWidth <= 767 ? (index - detailPos) * windowWidth * 0.367 : 0,
      left: windowWidth > 768 ? (index - detailPos) * windowWidth * 0.667 : 0,
      behavior: "smooth",
    });
  }

  console.log(detailPos);

  return (
    <div class="relative">
      <div class="history__wrapper__guide">
        <div
          class="history__wrapper__guide__icon"
          onClick={elementClick}
          ref={(el) => (iconRef.current = el)}
        >
          <ScrollIcon />
        </div>
        <h6 class="helvetica_bold">Scroll</h6>
      </div>
      <div class="history__wrapper" ref={(el) => (historyRef.current = el)}>
        <span
          class="history__wrapper__border"
          style={{
            width: `${windowWidth <= 767 ? 4 : periods.length * windowWidth * 0.4}px`,
            height: `${windowWidth <= 767 ? `${0.667 * periods.length * windowWidth}px` : `${0.139}vw`}`,
          }}
        ></span>
        {periods.map((period, index) => (
          <Period
            year={period.year}
            title={period.title}
            paragraph={period.paragraph}
            periodClick={() => onShrinkClick(index)}
          />
        ))}
      </div>
    </div>
  );
}