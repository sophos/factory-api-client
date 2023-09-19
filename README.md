# Sophos Factory API Client Library for JavaScript

This is the official Sophos Factory API client library for JavaScript.

This library is available as an npm package, [@sophos-factory/api-client](https://www.npmjs.com/package/@sophos-factory/api-client).

The library contains two (2) APi clients -- one for the [Factory API](https://api.factory.sophos.com/v1) and one for the [Factory Auth API](https://auth.factory.sophos.com/v1).

## Installation

The Sophos Factory API Client Library can be installed in a node.js project using npm or the package manager of your choosing. For example:

```shell
npm install @sophos-factory/api-client --save
```

## Usage

### Prerequisites

A Factory API token is required to use the Factory API Client Library. An API Token is generated by logging into Sophos Factory and visiting the [API Tokens page](https://app.factory.sophos.com/user/tokens).

### Factory API

The documentation for all methods can be viewed by browsing the [Factory API](https://api.factory.sophos.com/v1/).

For an example of list projects, see (`examples/getProjectList.ts`).

### Factory Auth API

The documentation for all methods can be viewed by browsing the [Factory Auth API](https://auth.factory.sophos.com/v1/).

For an example of listing organizations, see (`examples/getOrganizationList.ts`):

## Generating the Library

The Factory API Client Library is generated from the following Sophos Factory APIs.

| API Name         | Documentation                        | Specification                             | Schema File                              |
| :--------------- | :----------------------------------  | :---------------------------------------  | :-------------------------------         |
| Factory API      | `https://api.factory.sophos.com/v1`  | `https://api.factory.sophos.com/v1/spec`  | [`spec/api.json`](spec/api.json)         |
| Factory Auth API | `https://auth.factory.sophos.com/v1` | `https://auth.factory.sophos.com/v1/spec` | [`spec/authApi.json`](spec/authApi.json) |

This repository generates two OpenAPI clients for the above schemas using a GitHub Action workflow [`.github/workflows/gen.yml`]](.github/workflows/gen.yml).

The GitHub Action workflow runs on a schedule and can also be dispatched manually. It compares the last updated schemas with the current schemas downloaded
from the online specs. If there is any difference in the schemas, the workflow regenerates the client library, then opens a pull request with the changes.

## Terms of Use

Please see [Sophos Services Agreement](https://www.sophos.com/en-us/legal/sophos-services-agreement.aspx) and [Sophos Privacy Notice](https://www.sophos.com/en-us/legal/sophos-group-privacy-notice.aspx).
