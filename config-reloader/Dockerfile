FROM alpine:3.5

RUN apk --update add ca-certificates atop

ADD build/config-reloader /

ENTRYPOINT ["/config-reloader"]