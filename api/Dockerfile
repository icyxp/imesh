FROM alpine:3.5

RUN apk --update add ca-certificates atop

ADD build/imesh /bin

EXPOSE 9091

ENTRYPOINT ["/bin/imesh"]