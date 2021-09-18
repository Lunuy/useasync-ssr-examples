cd ./client
call npm run build
cd ../

cd ./ssr
call npm run build
cd ../

rmdir /q /s .\nginx\static\
mkdir .\nginx\static
xcopy /E /Y .\client\static .\nginx\static

docker-compose -f docker-compose.prod.yml build