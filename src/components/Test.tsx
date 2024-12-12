import type { ComponentChildren } from "preact";
import type { Signal } from "@preact/signals";
import Period from "./Period.tsx";
import { useRef } from "preact/hooks";

type Props = {
  count: Signal<number>;
};

export interface PeriodType {
  year: string;
  title: string;
  paragraph: string;
}

const periods: PeriodType[] = [
  {
    year: "1990",
    title: "タイトルタイトルタイトル",
    paragraph:
      "若年者ものづくり競技大会とは、互いの技能を競うことで、次世代を担う若年者のものづくりに対する意識や技能向上を目指す大会です。ウェブデザイン職種では毎年違ったテーマのウェブサイト制作が課題として与えられます。競技後にはプレゼンテーションも行います。この大会で上位3位以内に入賞すると、技能五輪国際大会への出場権が得られます。\n \n詳しく知りたい方は、下記のURLから主催団体である中央職業能力協会のWebサイトをご覧になってください。・・・",
  },
  {
    year: "2000",
    title: "タイトルタイトルタイトル",
    paragraph:
      "若年者ものづくり競技大会とは、互いの技能を競うことで、次世代を担う若年者のものづくりに対する意識や技能向上を目指す大会です。ウェブデザイン職種では毎年違ったテーマのウェブサイト制作が課題として与えられます。競技後にはプレゼンテーションも行います。この大会で上位3位以内に入賞すると、技能五輪国際大会への出場権が得られます。\n \n詳しく知りたい方は、下記のURLから主催団体である中央職業能力協会のWebサイトをご覧になってください。・・・",
  },
  {
    year: "2010",
    title: "タイトルタイトルタイトル",
    paragraph:
      "若年者ものづくり競技大会とは、互いの技能を競うことで、次世代を担う若年者のものづくりに対する意識や技能向上を目指す大会です。ウェブデザイン職種では毎年違ったテーマのウェブサイト制作が課題として与えられます。競技後にはプレゼンテーションも行います。この大会で上位3位以内に入賞すると、技能五輪国際大会への出場権が得られます。\n \n詳しく知りたい方は、下記のURLから主催団体である中央職業能力協会のWebサイトをご覧になってください。・・・",
  },
  {
    year: "2010",
    title: "タイトルタイトルタイトル",
    paragraph:
      "若年者ものづくり競技大会とは、互いの技能を競うことで、次世代を担う若年者のものづくりに対する意識や技能向上を目指す大会です。ウェブデザイン職種では毎年違ったテーマのウェブサイト制作が課題として与えられます。競技後にはプレゼンテーションも行います。この大会で上位3位以内に入賞すると、技能五輪国際大会への出場権が得られます。\n \n詳しく知りたい方は、下記のURLから主催団体である中央職業能力協会のWebサイトをご覧になってください。・・・",
  },
  {
    year: "2010",
    title: "タイトルタイトルタイトル",
    paragraph:
      "若年者ものづくり競技大会とは、互いの技能を競うことで、次世代を担う若年者のものづくりに対する意識や技能向上を目指す大会です。ウェブデザイン職種では毎年違ったテーマのウェブサイト制作が課題として与えられます。競技後にはプレゼンテーションも行います。この大会で上位3位以内に入賞すると、技能五輪国際大会への出場権が得られます。\n \n詳しく知りたい方は、下記のURLから主催団体である中央職業能力協会のWebサイトをご覧になってください。・・・",
  },
];

export default function Counter({ count }: Props) {
  return (
    <div class="test-wrapper">
      <span class="border"></span>
      {periods.map((period, index) => (
        <Period
          year={period.year}
          title={period.title}
          paragraph={period.paragraph}
          isDetail={index == count.value}
          periodClick={() => (count.value = index)}
        />
      ))}
    </div>
  );
}
