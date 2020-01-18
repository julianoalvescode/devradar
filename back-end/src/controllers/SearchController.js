const Dev = require('./DevController')

module.exports = {

    async index(request, response) {
        console.log(request.query)

        // Buscar todos os devs em um raio de 10km e filtrar por tecnologias

        return response.send({ devs: [] })

    }

}