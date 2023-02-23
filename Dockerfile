# Make container from  node image
# Node Version used v19.6.0
# Check version with package.json 
FROM node:19.6

# Default catalog on container
WORKDIR /server

# Copy package and package-lock
COPY package*.json ./

RUN npm install

# Copy source code
COPY . .

ENV PORT=20402

EXPOSE 20402

CMD ["node", "./src/index.js"]
