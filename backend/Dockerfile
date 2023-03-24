# build step
FROM node:19.8.1 as build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
# release step
ENV DB_HOST="mongodb://host.docker.internal:27017"
ENV DB_NAME="test-inn-app"
ENV DB_USER="test"
ENV DB_PASS="12345"
ENV PORT 3000
EXPOSE $PORT
CMD ["node", "./bin/www"]