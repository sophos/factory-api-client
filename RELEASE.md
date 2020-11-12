# Release Process

This document describes process to release and publish a new version of this module.

**Please note in order to be able to release a new version make sure you have preinstalled Git
and cloned this repository.**

1. Bump the version number in `package.json`.

2. Run `npm install` to regenerate the `package-lock.json`.

3. Run `npm run build`. It's important to do this after bumping the version.

3. Create a new Git tag/release named with the same version as in `package.json` but with `v` prefix, e.g. `v0.5.0`.

4. Wait until GitHub Action checks finished, if status is successful you are good, otherwise if status is failed, check the error(s), and redo all the steps again, until status is successful.


