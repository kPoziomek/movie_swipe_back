FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Generowanie Prisma Client
RUN npx prisma generate

EXPOSE 5000

CMD ["npm", "run", "dev"]
