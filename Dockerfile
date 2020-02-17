# You should always specify a full version here to ensure all of your developers
# are running the same version of Node.
FROM node:lts-alpine AS base

RUN mkdir -p /src
WORKDIR /src

RUN apk --no-cache update \ 
  && apk --no-cache add autoconf automake libtool make bash g++ zlib-dev libpng-dev nasm

# To handle 'not get uid/gid'
RUN npm config set unsafe-perm true

# Copy local packages
COPY . /src

# Install dependencies
RUN npm install

# Build static web
RUN npm run build

# Production Image
FROM node:lts-alpine

# The base node image sets a very verbose log level.
ENV NPM_CONFIG_LOGLEVEL warn

# To handle 'not get uid/gid'
RUN npm config set unsafe-perm true

# Copy all static build files into the image.
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY --from=base /src/build /usr/src/app
RUN npm install -g serve

# Set the command to start the node server.
CMD serve -s .

# Tell Docker about the port we'll run on.
EXPOSE 5000
