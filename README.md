# parts-undefined

## Docker

Build the Dockerfile
```sh
docker build -t svgl/parts-unknown .
```

Run the container
```sh
docker run -it --rm -p 3000:3000 --name parts-unknown svgl/parts-unknown
```