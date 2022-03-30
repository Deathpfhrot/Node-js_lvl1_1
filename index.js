const http = require("http")
const fs = require("fs")


const server = http.createServer((request, response) => {
    const path = request.url === '/' ? '/public/html/index.html' : request.url
    console.log(request.url);
    fs.readFile("." + path, (error, data) => {
            if (error) {
                response.write('Error: File nlt found');
            } else {
                response.write(data)
            }
            response.end()
        })
        // console.log("anfrage angekommen...", request.url, request.method);
})

const PORT = 9001
server.listen(PORT)
console.log("server listeining on port" + PORT);