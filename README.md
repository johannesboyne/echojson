# echojson

`echojson` is a simple echo server for testing purposes. Feed it with something like: `http://localhost:1337/%7Bvalue1:%20%22one%22%7D` and it will respond with:

```json
{
  value1: "one"
}
```

If you are using chrome, you can type `http://localhost:1337/{value1: "one"}` in your URL bar and it will handle the rest.