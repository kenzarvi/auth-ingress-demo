FROM node:10-alpine
RUN apk --no-cache add tini
WORKDIR /usr/app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 3000
ENTRYPOINT ["/sbin/tini", "--"]
CMD ["npm", "start"]
