FROM node:13.12.0-alpine

WORKDIR /app
COPY ./package*.json .
RUN npm install

COPY . .
RUN npm run build


FROM nginx

RUN rm -rf /usr/share/nginx/html/*
COPY --from=0 /app/build /usr/share/nginx/html
COPY --from=0 /app/nginx/heroku.conf.template /etc/nginx/conf.d/heroku.conf.template

CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/heroku.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'

#To run localy, run with -p PORT=80