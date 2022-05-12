// let matriz = [array1, array2, array3]
// // console.log (matriz[1])
// // console.log (matriz[1][3])
// // console.log (matriz[1][3][1])/ //Reto 1

// let cadena = "Hola, que tal?"
// let numero = 23
// let boleana = true
// let array = [cadena, numero, boleana]

// // Reto 2

// let myMap = new Map()
// myMap.set("numero", 1)
// myMap.set(1, 1)
// myMap.set("string", "Mi string")
// myMap.set("boolean", true)
// // myMap.set(3, true)
// // myMap.set("array", [1, 2, 3, 4])
// // myMap.set(4, ["Juan", "Pepe", "Ana", "Maria"])

// // console.log(myMap)

// // // Reto 3

// // console.log (myMap)
// // console.log (myMap.size)
// // console.log (myMap.get("string"))
// // myMap.delete("string")
// // console.log(myMap)

// // // Reto 4

// // let mySet = new Set ()
// // mySet.add(1)
// // mySet.add("1")
// // mySet.add("Saludo")
// // mySet.add([1, 2, 3, 4])
// // mySet.add(1)
// // console.log(mySet)
// // console.log(mySet.size)
// // console.log(mySet.has(2))
// // mySet.delete(1)
// // console.log(mySet)

// // // Reto 5

// // let array1 = ["Uno", "Dos", "Tres", "Cuatro", "Cinco"]
// // let array2 = ["Seis", "Siete", "Ocho", "Nueve", "Diez"]
// // let array3 = ["Once", "Doce", "Trece", "Cat
// // matriz [1] = [6, 7, 8, 9, 10]
// // console.log (matriz[1])
// // matriz [1][3] = true
// // console.log(matriz[1][3])
// // array1.push("Otro numero")
// // console.log(array1)
// // array1.splice(0, 1)
// // console.log(array1)
// // array1.pop()
// // console.log(array1)
// // console.log(matriz)

// // // Reto 6

// // let persona =   {nombre: "German",
// //                 edad: 30,
// //                 esVaron: true,
// //                 aficiones: ["videojuegos", "padel", "cine"],
// //                 dni:    {numero: "54747875F",
// //                         fechaDeExpedicion: "25 de Enero del 2024"}
// //                 }

// // console.log(persona.nombre)
// // console.log(persona.aficiones)
// // console.log(persona.aficiones[2])
// // console.log(persona.dni)
// // console.log(persona.dni.fechaDeExpedicion)
// // persona.dni.fechaDeExpedicion = "4 de Julio del 2025"
// // persona.aficiones.splice(1, 1)
// // console.log(persona.aficiones)
// // persona.aficiones.push ("Comer")
// // console.log(persona.aficiones)

// // Reto 7

// let json =  {nombre: "Germán",
//             apellidos: ["Bonillo", "Ramos"],
//             edad: 30,
//             padres: [{  nombre: "Jose", 
//                         apellidos:["Bonillo", "Rebollida"],
//                         edad: 66,
//                         padres: [{nombre: "Vicente",
//                                 apellidos: ["Ramos", "Gil"],
//                                 edad: 93
//                                 },
//                                 {nombre: "Carmen",
//                                 apellidos: ["Fernandes", "Mezquita"],
//                                 edad: 95
//                                 }
//                         ]
//                 },
//                         {nombre: "Mari Carmen", 
//                         apellidos:["Ramos", "Chulvi"],
//                         edad: 60,
//                         padres: [{nombre: "Adela",
//                                 apellidos: ["Chulvi", "Basiero"],
//                                 edad: 90
//                                 },
//                                 {nombre: "Antonio",
//                                 apellidos: ["Ramos", "Adsuara"],
//                                 edad: 92

//                                 }
//                                 ]
//                         }]
// }
            
// console.log (json.padres[1].padres[0].nombre)
// console.log (json.padres[0].padres[1].apellidos[1])
// console.log(json.padres[1].edad + json.padres[0].padres[0].edad)
// let edad1 = json.padres[0].padres[0].edad 
// let edad2 = json.padres[0].padres[1].edad 
// json.padres[0].padres[0].edad = edad2
// json.padres[0].padres[0].edad = edad1
// json.padres[1].padres[0].apellidos[2] = "Gil"
// console.log (json.padres[1].padres[0].apellidos)
// json.padres[1].apellidos.splice(0, 1)
// console.log(json.padres[1].apellidos)
// console.log(json.padres[0].padres[0].apellidos[1][json.padres[0].padres[0].apellidos[1].length - 1])


// FUNCION CUADRADO




