FROM node as build


COPY . ./app/
WORKDIR /app

RUN npm install -g gatsby
RUN npm install
RUN gatsby build

FROM nginx

WORKDIR /usr/share/nginx/html
COPY --from=build ./app/public/ .


