FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Run Vite build during image creation
RUN npm run build

# Shell command to populate volume
CMD ["sh", "-c", "mkdir -p /public_html && cp -r /app/dist/* /public_html/ && echo 'Build assets copied successfully!'"]