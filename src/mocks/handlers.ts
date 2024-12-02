import { http, HttpResponse } from 'msw';
import categoryData from './data/category.json';
import faqData from './data/faq.json';

type categoryKey = keyof typeof categoryData;

export const handlers = [
	http.post('/api/faq/:faqID/viewCount', ({ params }) => {
		const { faqID } = params;
		console.log('[Server]Record viewCount. FAQ ID:', faqID);
		return HttpResponse.json({});
	}),
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
	http.get('/api/faq', ({ request }) => {
		const url = new URL(request.url, 'http://localhost');
		const tab = url.searchParams.get('tab');
		const category = url.searchParams.get('faqCategoryID');
		const offsetParam = url.searchParams.get('offset');
		const limitParam = url.searchParams.get('limit');
		const keyword = url.searchParams.get('question');

		const offset = parseInt(offsetParam || '0', 10);
		const limit = parseInt(limitParam || '10', 10);

		if (isNaN(offset) || offset < 0) {
			return HttpResponse.json({ error: `Invalid offset value: ${offsetParam}` }, { status: 400 });
		}
		if (isNaN(limit) || limit <= 0) {
			return HttpResponse.json({ error: `Invalid limit value: ${limitParam}` }, { status: 400 });
		}

		let filteredData = faqData;

		if (tab) {
			filteredData = filteredData.filter((item) => item.tab === tab);
		}
		if (category) {
			filteredData = filteredData.filter((item) => item.categoryID === category);
		}
		if (keyword) {
			filteredData = filteredData.filter((item) => {
				return Object.values(item).some((value) => typeof value === 'string' && value.includes(keyword));
			});
		}

		const paginatedData = filteredData.slice(offset, offset + limit).map((data) => {
			return {
				answer: data.answer,
				categoryName: data.categoryName,
				id: data.id,
				question: data.question,
				subCategoryName: data.subCategoryName,
			};
		});

		return HttpResponse.json({
			length: filteredData.length,
			items: paginatedData,
		});
	}),
];
