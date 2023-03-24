# build step
FROM node:19.8.1 as build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
# release step
EXPOSE 3000
CMD ["node", "./bin/www"]