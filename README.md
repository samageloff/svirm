Ambassador Modules
=================
**Ambassador Modules** is a demo app for Snippet-based modules.

Getting the app running
-----------------------

1) Clone the ambassador-modules repo:
```
git clone git@github.com:GetAmbassador/ambassador-modules.git
```

2) Move into the project:
```
cd ambassador-modules
```

3) Symlink the Git hooks:
```
ln -s ../../git-hooks/prepare-commit-msg .git/hooks/prepare-commit-msg
ln -s ../../git-hooks/pre-push .git/hooks/pre-push
```

4) The pre-push hook requires re-initialization of the repo:
```
git init
```

5) Make sure the pre-push hook is executable:
```
chmod +x .git/hooks/pre-push
```

6) Set environment variables

Make a copy of the sample environment:

```
cp sample.env .env
```

And populate with the following environment variables:

```
- NODE_ENV - This will be set to `development` or `production`.
- SNIPPET_URL - The hostname of the Ambassador Snippet you wish to use. For local dev use `https://dev-cdn.getambassador.com`.
```

7) Install node packages:
```
npm install
```

8) In order to run ambassador-modules locally, ambassador-snippet must be running at the same time. Instructions can be found in the [ambassador-snippet README](https://github.com/GetAmbassador/ambassador-snippet#running-ambassador-modules-within-snippet-locally) for running both ambassador-snippet and ambassador-modules at the same time. 

Testing
-------

Run all tests:
```
npm test
```

Run a single test file:
```
npm test PATH_TO_FILE
```

Using the package
-----------------

To install the package in an app you will need to be logged into npm as "ambassador" and then run:
```
npm install @ambassador/ambassador-modules --save
```

If you are installing ambassador-modules on an app that uses CircleCI you can follow the instructions [here](https://circleci.com/docs/npm-private-module-dependency/) to set up npm authentication within Circle.

If you are installing ambassador-modules on an app that uses Heroku you can follow the instructions [here](http://blog.npmjs.org/post/118393368555/deploying-with-npm-private-modules) to set up npm authentication within Heroku.

Release Process
---------------
1. Checkout / pull latest master branch
2. Create a new branch (named like `release_v0_0_5`)
3. Run: `$ npm version <semantic_version> (ex: 0.57.0)`
4. Edit `CHANGELOG.md` to reflect changes since last release
5. Commit and push this branch
6. Create a pull request for this branch
7. Ping someone to review the changes to `CHANGELOG.md`
8. Merge pull request
9. Checkout master and pull down latest
10. Run: `$ npm run build`
11. Run `$ npm publish`
12. Create release on Github

