const arrayNumeros = [4, 6, 9, 2, 5, 1];
const arrayNumerosCopia = arrayNumeros
console.log("Array Números Original:", arrayNumeros)

arrayNumerosCopia.unshift(10)
console.log("Array Números Cópia:", arrayNumerosCopia)

const arrayStrings = ["Laranja", "Maçã", "Pêra", "Uva"]
const arrayStringsCopia = arrayStrings
console.log("Array Strings Original:", arrayStrings)

console.log("Array Strings Cópia:", arrayNumerosCopia)

const arraySortido = ["Carro", 5, "Casa", 2, true, false]
const arraySortidoCopia = arraySortido
console.log("Array Sortido Original:", arraySortido)

console.log("Array Sortido Cópia:", arraySortidoCopia)

arrayStringsCopia.splice(3, 1)
console.log("Array Strings após exclusão do último item:", arrayStringsCopia)

arraySortidoCopia.splice(1, 1)
console.log("Excluindo o segundo item do Array:", arraySortidoCopia)