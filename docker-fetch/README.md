# useasync-ssr fetch example with docker
## dev
```bash
cd api
npm run start
```
```bash
cd client
npm run watch
```
```bash
cd ssr
npm run watch
```
```
docker-compose -f docker-compose.dev.yml up
```
## build
```bash
build.bat
```
## run
```bash
docker-compose up
```