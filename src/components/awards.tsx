import { useState } from "preact/hooks";
import type { Award } from "../pages/awards.astro";
import YearAward from "./YearAward";

interface Props {
  awards: Award[];
  years: string[];
}

export default function Awards({ awards, years }: Props) {
  const [referYear, setReferYear] = useState(years[0]);
  function changeRefer(year: string) {
    setReferYear(year);
  }

  return (
    <div>
      {years.map((year) => {
        return (
          <YearAward
            awards={awards.filter((award) => award.date.includes(year))}
            year={year}
            isOpen={year == referYear}
            chevronClicked={() => changeRefer(year)}
          />
        );
      })}
    </div>
  );
}
