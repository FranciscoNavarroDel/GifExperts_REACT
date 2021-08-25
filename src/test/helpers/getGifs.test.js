import React from "react"
import { getGifs } from "../../helpers/getGifs"


describe('probando la funcion getGifs', () => {
    test('probando que entregue un arreglo de largo 10', async() => {
        
        const result = await getGifs("panda")
        expect(result.length).toBe(10)
    })

    test('Si no se envia la categoria', async() => {
        
        const result = await getGifs("")
        expect(result.length).toBe(0)
    })
    
})
