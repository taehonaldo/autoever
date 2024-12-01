import axios from "axios";
import { Tab } from "../types/faq";

const myAxios = axios.create({
  baseURL: "/api/faq",
});

export const getCategories = async (tab: Tab) => {
  const res = await myAxios.get(`/category?tab=${tab}`);
  return res.data;
};

export const getFAQ = async (
  tab: string,
  offset: number,
  category: string | null,
  keyword: string
) => {
  let url = `?tab=${tab}&limit=10&offset=${offset}`;
  if (category !== null) url += `&faqCategoryID=${category}`;
  if (keyword !== "") url += `&question=${keyword}`;

  const res = await myAxios.get(url);
  return res.data;
};
