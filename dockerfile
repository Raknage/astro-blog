FROM node:24.16 AS base
WORKDIR /app

COPY package.json package-lock.json ./
COPY nginx.conf /etc/nginx/templates/default.conf.template

FROM base AS build
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine AS runtime
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80

# Local:
# docker build -t tuo-concept:nginx .
# docker run --rm -it -p 80:80 tuo-concept:nginx

# Docker hub:
# docker tag tuo-concept:nginx raknage/tuo-concept:nginx && docker push raknage/tuo-concept:nginx
# docker run -p 80:80 raknage/tuo-concept:nginx