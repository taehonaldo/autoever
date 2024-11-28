import axios from 'axios';

const myAxios = axios.create({});

export const getCategories = (tab: 'USAGE' | 'CONSULT') => {
	return myAxios.get(`/category?tab=${tab}`);
};
