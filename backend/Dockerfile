# build step
FROM node:lts-alpine as build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
# release step

EXPOSE 3000
ENV NODE_ENV="production"
CMD ["node", "./bin/www"]