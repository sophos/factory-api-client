// The getOrganizations method is in the Factory AuthAPI 
import { factoryAuthApi } from '@sophos-factory/api-client';

const accessToken = '<your api token here>';
const basePath = 'https://auth.factory.sophos.com/v1';

const config = new factoryAuthApi.Configuration({
	accessToken: accessToken,
	basePath: basePath
});

const client = new factoryAuthApi.OrganizationsApi(config);

(async () => {
	const res = await client.getOrganizationsPublic();
	console.info(res.data);
})().catch(e => {
	if (e.response && e.response.status) {
		console.error(`Request failed with status code: ${e.response.status}. Response body:`);
		console.error(e.response.data);
	} else {
		console.error(`Request failed with error: ${e}`);
	}
})