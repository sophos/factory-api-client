# Sophos Factory JavaScript API Client Library

This is the official Sophos Factory API client library for JavaScript.

## Usage

Generate an API Token by logging into Sophos Factory and visiting the [API Tokens page](https://app.refactr.it/user/tokens).

The API client is [hosted on npm](https://www.npmjs.com/package/@refactr/api-client) and can be installed like any other npm package. For example, to list projects:

```js
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

All methods can be viewed by browsing the specification: https://api.refactr.it/v1/

## Generating the Library

The library is generated from the OpenAPI schema at: https://api.refactr.it/v1

The GitHub Action workflow [Codegen](.github/workflows/gen.yml) runs on a schedule and can also be dispatched manually. It compares the last updated schema stored at `spec/schema.json` with the current schema downloaded from `https://api.refactr.it/v1/spec`. If there is a difference, the workflow regenerates the client library, then opens a pull request with the changes.

## Terms of Use

Please see [Sophos Services Agreement](https://www.sophos.com/en-us/legal/sophos-services-agreement.aspx) and [Sophos Privacy Notice](https://www.sophos.com/en-us/legal/sophos-group-privacy-notice.aspx).
