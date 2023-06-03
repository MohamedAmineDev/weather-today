FROM node:19-alpine
COPY /weather-today/src /src/
COPY /weather-today/public /public/
COPY /weather-today/package.json package.json
COPY /weather-today/tailwind.config.js tailwind.config.js
RUN npm install
EXPOSE 3000
CMD ["npm","start"]