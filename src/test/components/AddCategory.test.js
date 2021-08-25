import { shallow } from "enzyme"
import React from "react"
import { AddCategory } from "../../components/AddCategory"
import '@testing-library/jest-dom'

describe('Pruebas en <AddCategory />', () => {
    const setCategories = jest.fn()
    let wrapper = shallow(<AddCategory setCategories={setCategories} />)
    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />)
    })


    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })


    // prueba el change del formulario
    test('probando el formulario', () => {
        const input =wrapper.find("input")
        const value="Hola Mundo"

        input.simulate("change", {target:{value}})
        
        const textoModificado=wrapper.prop("children").props.value

        expect(textoModificado.trim()).toBe(value)
        
    })

    // prueba el submit del formulario
    test('No debe postear la informacion onSubmit', () => {
        const form =wrapper.find("form")
        form.simulate("submit", {preventDefault(){}})
        expect(setCategories).not.toHaveBeenCalled()       
    })
    
    test("se debe llamar el setCategories y limpiar la caja de texto", ()=>{
        const input = wrapper.find("input")
        input.simulate("change", { target:{value:"Probando"} })

        const form=wrapper.find("form")
        form.simulate("submit", { preventDefault(){} })
        expect(setCategories).toHaveBeenCalled()

        expect(wrapper.find("input").prop("value")).toBe("")
    })
    
})
