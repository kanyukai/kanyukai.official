import type { Award } from "../pages/awards.astro";
import ChAward from "./ChAward";
interface Props {
  awards: Award[];
  year: string;
  isOpen: boolean;
  chevronClicked: () => void;
}

export default function YearAward({
  awards,
  year,
  isOpen,
  chevronClicked,
}: Props) {
  return (
    <div class={`${year} border border-black p-5 my-5`}>
      <div class="flex justify-between">
        <div class="flex items-center" onClick={chevronClicked}>
          <span>
            <svg
              width="38"
              height="30"
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
          <h3 class="helvetica_light text-4xl tracking-widest ml-10">{year}</h3>
        </div>

        {isOpen ? (
          <svg
            width="9"
            height="37"
            viewBox="0 0 9 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="8.5" y1="37" x2="8.5" y2="0.433098" stroke="black" />
            <line
              y1="-0.5"
              x2="15.4391"
              y2="-0.5"
              transform="matrix(-0.518166 0.85528 -0.847969 -0.530045 8 0.433075)"
              stroke="black"
            />
          </svg>
        ) : (
          <svg
            width="60"
            height="9"
            viewBox="0 0 60 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class={`self-end ${isOpen ? "portrait" : "landscape"}`}
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
        )}
      </div>
      {awards.map((award) => {
        return (
          <div class={`${isOpen ? "" : "hidden"}`}>
            <ChAward
              date={award.date}
              tags={award.tags}
              title={award.title}
              content={award.content}
              images={award.images}
            />
          </div>
        );
      })}
    </div>
  );
}
