import { shallow } from "enzyme"
import React from "react"
import { GiftGridItem } from "../../components/GiftGridItem"

  

describe("Prueba al item GiftGridItem",()=>{
   const id=1
   const title="probandoItem"
   const gif="http//probando.cl"
   const wrapper= shallow(<GiftGridItem id={id} title={title} gif={gif} />)

 test('debe mostrar el componente correctamente ', () => {

    expect(wrapper).toMatchSnapshot()
 })
 
 test("debe tener un parrafo con el title",()=>{
   
   const parrafo = wrapper.find("p")
   expect(parrafo.text().trim()).toBe(title)

 })

 test("debe tener la imagen al url y alt de los props",()=>{
   
   const img = wrapper.find("img")
   const testProps= {
      src:gif,
      alt:title,
   }

   expect(img.props()).toEqual(testProps)

 })

 test('debe tener animate__rotateIn', () => {
   const div = wrapper.find("div") 
   const className=div.prop("className")

   expect(className.includes("animate__rotateIn")).toBe(true)

 })
 


})