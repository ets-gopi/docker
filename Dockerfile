# syntax=docker/dockerfile:1
# escape=\
# check=error=true
ARG base=alpine
# docker build --no-cache --progress=plain -t gd/test .
FROM ${base}

RUN echo "this is testing."