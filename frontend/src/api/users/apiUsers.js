const axios = require('axios')

export async function getUsers(url) {
    return axios.get(url)
  }

export function createUser(data) {
    return new Promise ((resolve, reject)=>{
        try {
            axios({
                method: 'post',
                url: 'http://localhost:3333/createUsers',
                data: data
            })
            return resolve({status: true})
        } catch (err){
            return reject({status: false})
        }
    })
  }

export function updateUser(data) {
    return new Promise ((resolve, reject)=>{
        try {
            axios({
                method: 'put',
                url: 'http://localhost:3333/updateUsers',
                data: data
            })
            return resolve({status: true})
        } catch (err){
            return reject({status: false})
        }
    })
}

export function deleteUser(id) {
    return new Promise ((resolve, reject)=>{
        try {
            axios.delete(`http://localhost:3333/deleteUsers/${id}`)
            return resolve({status: true})
        } catch (err){
            return reject({status: false})
        }
    })
}
