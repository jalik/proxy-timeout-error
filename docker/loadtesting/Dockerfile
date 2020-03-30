FROM loadimpact/k6:0.26.2

COPY script.js ./

ENTRYPOINT ["k6", "run","--out", "influxdb=http://influxdb:8086/loadtesting", "./script.js"]
