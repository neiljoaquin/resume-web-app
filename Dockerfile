FROM arm64v8/node:18

WORKDIR '/app'

# Install app dependencies
COPY . .
RUN npm install
RUN npm run build

ENTRYPOINT ["npm", "run", "start"]