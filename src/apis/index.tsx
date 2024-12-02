import axios from "axios";
import { Tab } from "../types/faq";
import { Terms } from "../types/global";

const myAxios = axios.create({
  baseURL: "/api",
});

export const getCategories = async (tab: Tab) => {
  const res = await myAxios.get(`/faq/category?tab=${tab}`);
  return res.data;
};

export const getFAQ = async (
  tab: string,
  offset: number,
  category: string | null,
  keyword: string
) => {
  let url = `/faq?tab=${tab}&limit=10&offset=${offset}`;
  if (category !== null) url += `&faqCategoryID=${category}`;
  if (keyword !== "") url += `&question=${keyword}`;

  const res = await myAxios.get(url);
  return res.data;
};

export const postViewCount = async (faqID: number) => {
  const res = await myAxios.post(`/faq/${faqID}/viewCount`);
  return res.data;
};

export const getTerms = async (type: Terms) => {
  const res = await myAxios.get(`/terms?termsClassID=${type}`);
  return res.data;
};
