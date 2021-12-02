# Sophos Factory JavaScript API Client Library

This is the official Sophos Factory API client library for JavaScript.

**Note:** This project is under active development, and the interface will change in the future.

### Usage

To list projects:

```
const { ProjectsApi, Configuration } = require('@refactr/api-client');

const accessToken = '<your api token here>';

const config = new Configuration({
    accessToken: accessToken
});
const client = new ProjectsApi(config);

(async () => {
    const res = await client.listProjects();
    console.info(res.data);
})().catch(e => {
    console.error(`Request failed with status code: ${e.response.status}. Response body:`);
    console.error(e.response.data);
});
```

### Other

This library is generated from the OpenAPI schema at https://api.refactr.it/v1
