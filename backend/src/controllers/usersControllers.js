const connection = require('../database/connections');

function index(rowQuery) {
    return new Promise(async (resolve, reject) => {
        try {
            const filter = Object.values(rowQuery)

            if (!filter.length) {
                const users = await connection(`users`).select(["users.*"])
                return resolve({ status: true, result: users })
            } else {
                const query = filter[0]
                const users = await connection(`users`)
                    // .orWhere('nome', 'like', `%${query}`)
                    .orWhere('nome', 'like', `%${query}%`)
                    .orWhere('nome', 'like', `%${query.split(" ")[0]}%`)
                    .orWhere('sobrenome', 'like', `%${query}%`)
                    .orWhere('sobrenome', 'like', `%${query.split(" ")[1]}%`)
                    .orWhere({ email: query })
                    .orWhere({ documento: query })
                    .orWhere({ telefone: query })

                if (users.length) {

                    return resolve({ status: true, result: users })

                } else if (query.toLowerCase() === "pecuária e agricultura" ||query.toLowerCase() === "agricultura e pecuária" ) {
                    const modulos = await connection('users').where('modulos','=', 'A - P')
                    return resolve({ status: true, result: modulos })
                } if (query.toLowerCase() === "agricultura") {
                    const modulos = await connection('users')
                        .where('modulos', '=', 'A')

                    return resolve({ status: true, result: modulos })

                } else if (query.toLowerCase() === "pecuaria" || query.toLowerCase() === "pecuária") {

                    const modulos = await connection('users')
                        .where('modulos', '=', 'P')

                    return resolve({ status: true, result: modulos })

                } else {
                    return resolve({ status: false, messageError: "Erro inesperado ao tentar buscar usuário(s)." })
                }
            }
        } catch (err) {

            return reject({ status: false, error: err })

        }
    })
}

function create(data) {
    return new Promise(async (resolve, reject) => {
        try {
            await connection(`users`).insert(data)
            console.log(data)
            return resolve({ status: true, data: data })
        } catch (err) {
            return reject({ status: false, message: err })
        }
    })
}


function update(data, id) {
    return new Promise(async (resolve, reject) => {
        try {
            await connection(`users`).update(data).where({ id: id })
            return resolve({ status: true, data, id })
        } catch (err) {
            return reject({ status: false, message: err })
        }
    })
}

function deleteUser(id) {
    return new Promise(async (resolve, reject) => {
        try {
            await connection("users").where("id", id).del();
            return resolve({ status: true, id })
        } catch (err) {
            return reject({ status: false, message: err })
        }
    })
}



module.exports = { create, index, update, deleteUser };