// SDK利用準備
import type { MicroCMSQueries, MicroCMSListContent } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";


const client1 = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});//client1に含まれる情報：activities,awards,history

const client2 = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN2,
  apiKey: import.meta.env.MICROCMS_API_KEY2,
});//client1に含まれる情報：invitation

// Awards型定義
export type Awards = {
    id: string;
    date: string;
    title: string;
    og_image?:{url: string};
    // if文でRGBAに分岐
    // medalcolor:;
    
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
    queries?: MicroCMSQueries
  ) => {
    return await client1.getListDetail<Awards>({
      endpoint: "awards",
      contentId,
      queries,
    });
  };


  // Activities型定義
export type Activities= {
  id: string;
  date: string;
  title: string;
  content:string;
  image: {
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
  return await client1.get<ActivitiesResponse>({ endpoint: "activities", queries });
};
export const getActivitiesDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client1.getListDetail<Activities>({
    endpoint: "activities",
    contentId,
    queries,
  });
};


 // Invitation型定義
export type Invitation= {
  id: string;
  date: string;
  title: string;
  contents:string;
};
export type InvitationResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Invitation[];
};

//APIの呼び出し
export const getInvitation = async (queries?: MicroCMSQueries) => {
  return await client2.get<InvitationResponse>({ endpoint: "invitation", queries });
};
export const getInvitationDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client2.getListDetail<Invitation>({
    endpoint: "invitation",
    contentId,
    queries,
  });
};

// Events型定義
export type Events= {
  id: string;
  title: string;
  contents:string;
  images?: {
    url: string;
  };

};
export type EventsResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Events[];
};

//APIの呼び出し
export const getEvents = async (queries?: MicroCMSQueries) => {
  return await client2.get<EventsResponse>({ endpoint: "events", queries });
};
export const getEventsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client2.getListDetail<Events>({
    endpoint: "events",
    contentId,
    queries,
  });
};


//history型定義
export type History= {
  id: string;
  year: string;

  title: string;
  contents:string;
  og_image?:{url:string};
}

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


