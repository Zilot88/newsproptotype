# newsproptotype

## Installation

```bash
npm install news-portal
```
## Start Using
for start use  you need wrap it by Provider component like this:
```
<Provider> ... news-portal elements ... </Provider>
```
if you want developing use 
```
npm run start:app
```
this process prepare all what you need and run extend application where will link local dist of this package
But you must sure that you have installed react 
application in ***./app*** directory on same level like ***src*** directory

## Contributing

for publish to montera registry you must sure that you in same npm registry

Add a .npmrc to your project, in the same directory as your package.json
```
registry=https://pkgs.dev.azure.com/Svalbard/MonteraHub/_packaging/news-component/npm/registry/

always-auth=true
```
Then, run vsts-npm-auth to get an Azure Artifacts token added to your user-level .npmrc file
```
vsts-npm-auth -config .npmrc
```
Note: You don't need to do this every time. npm will give you a 401 Unauthorized error when you need to run it again.

Having issues? See the instructions for using a Personal Access Token to authenticate.

### Restore packages
Run this command in your project directory
```
npm install
```

### Publish packages
Run this command in your project directory
```
npm publish
```
