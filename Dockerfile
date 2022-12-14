FROM node:16-alpine
WORKDIR /app
COPY package*.json .
RUN yarn install
COPY . .
RUN yarn build 
EXPOSE 3000
ENV NODE_ENV production
CMD [ "yarn", "start" ]