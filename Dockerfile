# [Stage 1] - Use node image to build the assets into /app/dist
FROM node:9-alpine as builder
WORKDIR /app
COPY [ "package.json", "package-lock.json", ".sassrc", "/app/" ]
RUN npm install -s > /dev/null
COPY src /app/src
RUN npm run build -s

# [Stage 2] - Server the generated assets using nginx
FROM nginx:1-alpine as web
COPY --from=builder /app/dist /usr/share/nginx/html/
