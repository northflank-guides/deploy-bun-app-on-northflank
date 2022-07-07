FROM jarredsumner/bun:edge
WORKDIR /app
COPY package.json ./package.json
COPY index.js ./index.js
RUN bun install
EXPOSE 3000
CMD ["bun", "index.js"]
