FROM node:20

COPY . .

RUN ls -A node_modules || npm install

CMD ["npm", "run", "start"]