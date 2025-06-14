# ---------- Build ----------
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json tsconfig.json ./
COPY src ./src
COPY quotes.json ./
COPY event.json ./ 

RUN npm install
RUN npx tsc

# ---------- Runtime ----------
FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/quotes.json ./
COPY event.json ./

CMD ["node", "dist/localInvoke.js"]
