
import http from "http";

const port = 3000;
const hostnamee = "127.0.0.1";

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.write("hello");
    res.end();
});

server.listen(port, hostnamee, () => {
    console.log(`server is running on http://${hostnamee}:${port}/`);
});