# Proxy Timeout Error

This error can have multiple causes, but it always happens when an application behind a reverse proxy is not responding fast enough, so the proxy closes the connection and returns a 502 HTTP error.

# How to start the demo

Run the following command to start the containers:
```shell script
./compose-up.sh
```

Below are the URLs corresponding to each service:
- Reverse proxy is exposed on http://localhost:8000/
- Application is exposed on http://localhost:8080/

Don't forget to stop the demo when you are done, with:
```shell script
./compose-down.sh
```

# How to trigger the timeout

1. Go to http://localhost:8000/ and refresh several times, errors are randomly returned when accessing through the proxy
2. Go to http://localhost:8080/ and refresh several times, there are no errors when accessing the application directly

# Explanation

The reverse proxy is setup to close connection if it lasts more than one second.
But on the application, some requests take more than a second to return, so the proxy close the connection and returns a 502 HTTP error.

# How to fix the error

It depends of the root cause, but here are some non-exhaustive fixes:
- Investigate why the responses are slow to return, and fix them if possible
- Add more hardware resources to handle requests faster
- Increase proxy timeout to wait longer
