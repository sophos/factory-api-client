// The listProjects method is in the Factory API 
import { factoryApi } from '@sophos-factory/api-client';

const accessToken = '<your api token here>';
const basePath = 'https://api.us-west-2.factory.sophos.com/v1';

const config = new factoryApi.Configuration({
	accessToken: accessToken,
	basePath: basePath
});

const client = new factoryApi.ProjectsApi(config);

(async () => {
	const res = await client.listProjects();
	console.info(res.data);
})().catch(e => {
	console.error(`Request failed with status code: ${e.response.status}. Response body:`);
	console.error(e.response.data);
})