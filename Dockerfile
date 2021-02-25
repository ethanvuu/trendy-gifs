FROM node:13.12.0-alpine

WORKDIR /app
COPY ./package*.json .
RUN npm install

COPY . .
CMD ["npm", "run", "build"]


FROM nginx

RUN rm -rf /usr/share/nginx/html/*
COPY --from=0 /app/build /usr/share/nginx/html
EXPOSE 80

CMD ["nginx","-g","daemon off;"]