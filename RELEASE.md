# Release Process

This document describes the process for creating a release and publishing a new version of this module.

## Prerequisites

- Install [Git](https://git-scm.com/downloads) and [npm](https://www.npmjs.com/)
- [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) this repository

## Create a Release

1. Bump the version number in `package.json`. Use [Semantic Versioning](https://semver.org).
2. Run `npm install` to regenerate the `package-lock.json`.
3. Run `npm run build`. It's important to do this after bumping the version.
4. Commit and Git tag these changes. Use `v` followed by the version number, for example: `git tag -a v0.8.2`.
5. Push the changes to the GitHub repository, including the tag (`git push --tags`). Open and merge PRs as appropriate.
6. Once the changes are merged to `master`, [create a new Release on GitHub](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository) and choose the tag you just created.
7. Publishing a release triggers the GitHub Action [Publish to npm](.github/workflows/release.yml) which will release the new npm package automatically. Ensure the Action completes successfully.

New updates can be viewed at the npm package page: https://www.npmjs.com/package/@refactr/api-client
