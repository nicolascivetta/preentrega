import data from"../data/data.json";

export const pedirDatos = () => {

    return new Promise ((resolve, reject) => {
        resolve(data)
    })

}

export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) =>{

        const item = data.find((el) => el.id === id)

        if (item){
            resolve(item)
        } else {
            reject({
                error: "No se encontro el producto"
            })
        }

    })
}