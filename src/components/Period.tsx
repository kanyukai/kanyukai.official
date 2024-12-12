import { useEffect, useRef, useState } from "preact/hooks";

interface periodProps {
  title: string;
  year: string;
  paragraph: string;
  isDetail: boolean;
  periodClick: () => void;
}

export default function Period({
  title,
  year,
  paragraph,
  periodClick,
}: periodProps) {
  const periodRef = useRef<HTMLDivElement>(null);
  const [xCoord, setXCoord] = useState(0);

  useEffect(() => {
    const period = periodRef.current;
    if(!period) return;

    const updateXCoord = () => {
      const rect = period.getBoundingClientRect();
      setXCoord(rect.left);
    };

    const parent = period.parentElement;
    if(parent) {
      parent.addEventListener("scroll", updateXCoord);
    }

    const observer = new ResizeObserver(updateXCoord);
    observer.observe(period);

    updateXCoord();

    return () => {
      if(parent) {
        parent.removeEventListener("scroll", updateXCoord);
      }
      observer.disconnect();
    }
  }, []);

  return (
    <div ref={(el) => {
      periodRef.current = el;
    }}>
      {xCoord < 400 && xCoord >50 ? (
        <div class="detail_container" >
          <div class="year">{year}</div>
          <div class="title">{title}</div>
          <p>{paragraph}</p>
          <div class="bg"></div>
        </div>
      ) : (
        <>
          <div class="period_wrapper" onClick={periodClick}>
            <span class="left_circle"></span>
            <p class="date">{year}</p>
            <span class="right_circle"></span>
            <p class="title">{title}</p>
          </div>
        </>
      ) 
    }

    </div>
  )
  
}
