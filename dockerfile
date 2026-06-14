FROM node:24.16 AS base
WORKDIR /app

COPY package.json package-lock.json ./

FROM base AS build
RUN npm ci
COPY . .
RUN npm run build

FROM caddy:2-alpine AS runtime
COPY --from=build /app/dist /srv

COPY Caddyfile /etc/caddy/Caddyfile
EXPOSE 3000

# Local:
# docker build -t tuo-concept .
# docker run --rm -it -p 80:80 tuo-concept

# Docker hub:
# docker tag tuo-concept:latest raknage/tuo-concept:latest
# docker push raknage/tuo-concept:latest
# docker run -p 80:80 raknage/tuo-concept