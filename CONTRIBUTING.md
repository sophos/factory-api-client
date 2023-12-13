# Contributing

Contributions are welcome!

Please note the library is generated from the following Sophos Factory APIs.

| API Name         | Documentation                                  | Specification                                       | Schema File                              |
| :--------------- | :--------------------------------------------  | :-------------------------------------------------  | :-------------------------------         |
| Factory API      | `https://api.us-west-2.factory.sophos.com/v1`  | `https://api.us-west-2.factory.sophos.com/v1/spec`  | [`spec/api.json`](spec/api.json)         |
| Factory Auth API | `https://auth.us-west-2.factory.sophos.com/v1` | `https://auth.us-west-2.factory.sophos.com/v1/spec` | [`spec/authApi.json`](spec/authApi.json) |

This repository generates two OpenAPI clients for the above schemas using [a GitHub workflow](.github/workflows/gen.yml).

## Clone

Clone the repository:

```sh
git clone https://github.com/sophos/factory-api-client.git
```

## Issues and Branches

If you'd like to let us know about a request or bug, please open an issue.

In order to make changes to the project, please check out a new branch. If your changes are associated with an issue, please include it in the branch name. For example, 
`ERDE-1279/add-license`
or
`ERDE-123/update-readme`.

## Pull Requests

Please include any issue references in the PR title. For example,
`[ERDE-1279] Add license`.

You can help us to understand your changes with a brief description.

Thank you for your contributions!
