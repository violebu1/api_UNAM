



function makeBody(req, res, next) {

}

app.use((req, res, next) => {
    if ((req.method !== 'POST') && (req.method !== 'PATCH')) { return next() }

    if (req.headers['content-type'] !== 'application/json') { return next() }

    let bodyTemporal = ''

    req.on('data', (chunk) => {

        bodyTemporal += chunk.toString()

    })

    req.on('end', () => {
        req.body = JSON.parse(bodyTemporal)

        next()
    })
})

export default makeBody 
