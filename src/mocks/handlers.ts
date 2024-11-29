import { http, HttpResponse } from 'msw';
import categoryData from './data/category.json';

type categoryKey = keyof typeof categoryData;

export const handlers = [
	http.get('/api/faq/category', ({ request }) => {
		const url = new URL(request.url, 'http://localhost');
		const tab = url.searchParams.get('tab');

		if (!tab || !(tab in categoryData)) {
			return HttpResponse.json({ error: `Invalid or missing tab value: ${tab}` }, { status: 400 });
		}
		const returnData = categoryData[tab as categoryKey];

		if (!returnData) {
			return HttpResponse.json({ error: `Invalid tab value: ${tab}` }, { status: 400 });
		}

		return HttpResponse.json(returnData);
	}),
];
