FROM node:18.16.1 AS build

WORKDIR /app

COPY package*.json ./
COPY jest.config.js ./
COPY jsconfig.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]