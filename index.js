const http = require('http')

const server = http.createServer((req, res) => {
    const method = req.method

    if(method === 'GET'){
        res.end('Welcome to Get method')
    }else if(method === 'POST'){
        res.end('Welcome to Post method')
    }else if(method === 'PUT'){
        res.end('Welcome to Put method')
    }else if(method === 'PATCH'){
        res.end('Welcome to Patch method')
    }else if(method === 'DELETE'){
        res.end('Welcome to Delete method')
    }else{
        res.end('Your server is running')
    }
})

server.listen(3000, () => {
    console.log('Server is running');
    
})