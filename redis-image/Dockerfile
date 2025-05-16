# Use an existing docker image as a base
FROM alpine

# download and install a dependency
RUN apk add --update gcc

RUN apk add --update redis


#tell the image what to do when it starts 
# as a container
HEALTHCHECK --interval=10s --timeout=3s --retries=3 \
  CMD redis-cli ping | grep PONG || exit 1

CMD [ "redis-server" ]