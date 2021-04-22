import axios from "axios"


export const getFases = () => {

    return new Promise(async (resolve, reject) => {
        try {
            let response = await axios.get("https://api.api-futebol.com.br/v1/campeonatos/2/fases",  {headers: {'Authorization': `Bearer live_2dde67de903d8817464c1f3a4fd4f4`}})
            resolve(response.data)
        } catch (error) {
            reject(error)
        }
    })
}