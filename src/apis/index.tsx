import axios from 'axios';
import { Tab } from '../types/faq';

const myAxios = axios.create({
	baseURL: '/api/faq',
});

export const getCategories = async (tab: Tab) => {
	const res = await myAxios.get(`/category?tab=${tab}`);
	return res.data;
};

export const getFAQ = async (tab: string, offset: number, faqCategoryID?: string) => {
	let url = `/faq?tab=${tab}&limit=10&offset=${offset}`;
	if (faqCategoryID) url += `&faqCategoryID=${faqCategoryID}`;

	return await myAxios.get(url);
};
