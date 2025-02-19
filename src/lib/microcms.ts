// SDK利用準備
import type { MicroCMSQueries, MicroCMSListContent } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

const client1 = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
}); //client1に含まれる情報：activities,awards,history

const client2 = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN2,
  apiKey: import.meta.env.MICROCMS_API_KEY2,
}); //client1に含まれる情報：invitation

const client3 = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN3,
  apiKey: import.meta.env.MICROCMS_API_KEY3,
}); //client3に含まれる情報：

// Awards型定義
export type Awards = {
  id: string;
  date: string;
  title: string;
  year: string;
  medalcolor: string | string[];
  contents:string;
  ogimage?:{
    url:string;
  }
  // if文でRGBAに分岐
  // medalcolor:;
};
// medalcolor を RGBA に変換する関数
const medalColorToRGBA = (color: string | string[]): string => {
  const colorName = Array.isArray(color) ? color[0] : color; // 配列なら最初の要素を取得

  switch (colorName) {
    case "金":
      return "rgba(255, 223, 0, 1)"; // 金のRGBA
    case "銀":
      return "rgba(192, 192, 192, 1)"; // 銀のRGBA
    case "銅":
      return "rgba(205, 127, 50, 1)"; // 銅のRGBA
    case "その他":
      return "rgba(0, 0, 255, 0.5)"; // その他のRGBA
    default:
      return "rgba(0, 0, 255, 0.5)"; // デフォルトのRGBA
  }
};
export type AwardsResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Awards[];
};

//APIの呼び出し
export const getAwards = async (queries?: MicroCMSQueries) => {
  return await client1.get<AwardsResponse>({ endpoint: "awards", queries });
};
export const getAwardsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  return await client1.getListDetail<Awards>({
    endpoint: "awards",
    contentId,
    queries,
  });
};

// Activities型定義
export type Activities = {
  id: string;
  date: string;
  title: string;
  content: string;
  images?: {
    url: string;
  };
};
export type ActivitiesResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Activities[];
};

//APIの呼び出し
export const getActivities = async (queries?: MicroCMSQueries) => {
  return await client1.get<ActivitiesResponse>({
    endpoint: "activities",
    queries,
  });
};
export const getActivitiesDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  return await client1.getListDetail<Activities>({
    endpoint: "activities",
    contentId,
    queries,
  });
};

// Invitation型定義
export type Invitation = {
  id: string;
  date: string;
  title: string;
  description: string;
};
export type InvitationResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Invitation[];
};

//APIの呼び出し
export const getInvitation = async (queries?: MicroCMSQueries) => {
  return await client2.get<InvitationResponse>({
    endpoint: "invitation",
    queries,
  });
};
export const getInvitationDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  return await client2.getListDetail<Invitation>({
    endpoint: "invitation",
    contentId,
    queries,
  });
};

 // history型定義
 export type History= {
  id: string;
  year: string;
  title: string;
  contents:string;
  ogimage?:{
    url:string;
  }
  description:string;
};
export type HistoryResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: History[];
};

//APIの呼び出し
export const getHistory = async (queries?: MicroCMSQueries) => {
  return await client1.get<HistoryResponse>({ endpoint: "history", queries });
};
export const getHistoryDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client1.getListDetail<History>({
    endpoint: "history",
    contentId,
    queries,
  });
};


// form型定義
export type Form= {
  url:string;
  id:string;
};
export type FormResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Form[];
};

//APIの呼び出し
export const getForm = async (queries?: MicroCMSQueries) => {
  return await client3.get<FormResponse>({ endpoint: "form", queries });
};
export const getFormDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client3.getListDetail<Form>({
    endpoint: "form",
    contentId,
    queries,
  });
};

