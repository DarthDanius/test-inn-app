# build step
FROM node:19.8.1 as build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ENV NODE_ENV="production"
RUN npm run build
# release step
FROM nginx:1.21.5-alpine as release
COPY --from=build /app/build /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]