# Curso Intermedio de POO con JavaScript

## Clase 01: ¿Qué hay dentro de los objetos en JavaScript?

Introducción y desgloce del contenido del curso.

## Clase 02: Static: atributos y métodos estáticos en JavaScript

### static

La palabra clave static define un método estático para una clase.

### Descripción

Los métodos estáticos son llamados sin instanciar su clase. Son habitualmente utilizados para crear funciones para una aplicación.

### Métodos static del objeto madre Object

#### Object.keys()

Nos devuelve una lista con todos los keys (nombres claves) de nuestro objeto modelo.

Object.keys(modelo)

// (3) ["name", "email", "age"]

#### Object.getOwnPropertyNames()

Object.getOwnPropertyNames devuelve un array cuyos elementos son strings correspondientes a cada una de las propiedades encontradas directamente en nuestro objeto modelo.

Object.getOwnPropertyNames(modelo)

// (3) ["name", "email", "age"]

#### Object.entries()

El método entries nos devolverá un arrays de arrays donde tendremos nuestra palabra clave con su respectivo valor por cada propiedad del prototipo [key, value]

Object.entries(modelo)

// [
// 0: (2) ["name", "Carlos"]
// 1: (2) ["email", "carlos123@gmail.com"]
// 2: (2) ["age", 28]
// ]

#### Object.getOwnPropertyDescriptors()

Nos devuelve todas las propiedades de los objetos, sus keys y values, y los atributos writable, configurable y enumerable. Esta es la forma que tiene JavaScript para limitar el acceso a modificar los atributos y métodos de nuestros objetos.

Object.getOwnPropertyDescriptors(modelo)

// {
// age:{
// configurable: true
// enumerable: true
// value: 28
// writable: true
// }
// email:{
// configurable: true
// enumerable: true
// value: "carlos123@gmail.com"
// writable: true
// }
// name:{
// configurable: true
// enumerable: true
// value: "Carlos"
// }
// }

## Clase 03: Métodos estáticos del prototipo Object

### Métodos static del objeto madre Object

#### Object.defineProperty()

El método estático Object.defineProperty() define una nueva propiedad sobre un objeto, o modifica una ya existente, y devuelve el objeto modificado.

##### Sintaxis

Object.defineProperty(obj, prop, descriptor)

##### Parámetros

- obj : El objeto sobre el cual se define la propiedad.
- prop : El nombre de la propiedad a ser definida o modificada.
- descriptor : El descriptor de la propiedad que está siendo definida o modificada.

#### Object.defineProperties()

El método Object.defineProperties() define nuevas o modifica propiedades existentes directamente en el objeto, retornando el objeto.

##### Sintaxis

Object.defineProperties(obj, propiedades)

##### Parámetros

- obj : El objeto sobre el cual se crearán o modificaran sus propiedades.
- propiedades : Un objeto cuyas propiedades enumerables propias consituyen descriptores para las propiedades a ser definidas o modificadas.

## Clase 04: Object.defineProperty()

Al utilizar el método Object.defineProperty() sobre un objeto en específico, puedo definir una nueva propiedad con tres parámetros adicionales:

- enumerable: true/false
- writable: true/false
- configurable: true/false

Por defecto, estos tres parámetros tienen el valor de true.

### Al definir enumerable: false en una propiedad del objeto:

El método Object.keys(obj) NO mostrará esta propiedad.
El método Object.getOwnPropertyNames(obj) SI mostrará esta propiedad.
La propiedad SI podrá segiur siendo modificada mediante el método obj.propiedad = nuevoValor.
La propiedad NO podrá eliminarse mediante el método delete obj.propiedad.

### Al definir writable: false en una variable del objeto:

La propiedad Object.keys(obj) SI mostrará esta variable.
La propiedad Object.getOwnPropertyNames(obj) SI mostrará esta variable.
La propiedad NO podrá segiur siendo modificada mediante el método obj.propiedad = nuevoValor.
La propiedad SI podrá eliminarse mediante el método delete obj.propiedad.

### Al definir configurable: false en una variable del objeto:

La propiedad Object.keys(obj) SI mostrará esta variable.
La propiedad Object.getOwnPropertyNames(obj) SI mostrará esta variable.
La propiedad SI podrá segiur siendo modificada mediante el método obj.propiedad = nuevoValor.
La propiedad NO podrá eliminarse mediante el método delete obj.propiedad.

Finalmente, si se listan varios parámetros como true, su acción es acumulativa.

### Object.freeze()

El método Object.freeze() congela un objeto, es decir:

- Impide que se le agreguen nuevas propiedades.
- Impide que se puedan eliminar las propiedades ya existentes.
- Impide que dichas propiedades, o su capacidad de enumeración, configuración, o escritura, puedan ser modificadas.
- Impide también que se pueda modificar su prototipo.

El método devuelve el objeto recibido.

### Object.seal()

El método Object.seal() sella un objeto, es decir:

- Previene que puedan añadirse nuevas propiedades al mismo
- Marca todas las propiedades existentes como no-configurables.
- Los valores de las propiedades presentes permanecen pudiendo cambiarse en tanto y en cuanto dichas propiedades sean de escritura.

## Clase 05: Cómo funciona la memoria en JavaScript

La declaracion de una variable puede dividirse en dos procesos.

1. La inicialización: Aquí se nombra a la variable y se le reserva un espacio en memoria.
2. La asignación: Se le asigna un valor a la variable.

Las variables son una referencia a un espacio en memoria. Dependiendo del tipo de variable es que serán ubicadas en alguna de las dos tipos de memoria:

- Memoria Stack: Mucho más rápida, pero sin tanto espacio.
- Memoria Heap: Más lenta, pero con mucho más espacio.

Las variables que no son de tipo objeto (números, strings y boolean) son almacenadas en la memoria stack.

Las variables de tipo objeto es guardado en la memoria heap.

Cuando trabajamos con variables de tipo objeto, al momento de asignarle un valor a la variable se define un apuntador desde la memoria heap hacia el valor correspondiente en memoria stack.

Si eventualmente copiamos esta variable de tipo objeto, estaremos copiamos su apuntador. Por lo tanto, si se cambia el valor de la variable objeto que ha sido copiada (desde su versión original o desde la copia), ambas versiones cambian su valor, ya que lo que se cambia es el varlor en memoria stack y el apuntador sigue siendo el mismo.

## Clase 06: Shallow copy en JavaScript

Shallow Copy se refiere a la forma de crear un nuevo objeto a partir de las propiedades de otro. Esta copia solo se hace a un nivel alto, no se hace con objetos dentro de objetos (nested objects), lo que provoca que la modificación de una de sus propiedades, modifique el objeto principal.

const obj1 = {
a: 'a',
b: 'b',
c: {
d: 'd',
e: 'e'
}
}

const obj2 = {}

for (prop in obj1) {
obj2[prop] = obj1[prop]
}

const obj2 = {
a: 'a',
b: 'b',
c: {
d: 'd',
e: 'e'
}
}

En este caso, al modificar los valores numericos, string o booleanos de un objeto no se modifican los del otro. Aunque si modificamos los elementos de un objeto dentro del objeto (c: {d: 'd', e: 'e'} - nested object), estos se ven modificados para ambos objetos.

### Object.assign()

El método Object.assign() copia todas las propiedades enumerables de uno o más objetos fuente a un objeto destino. Devuelve el objeto destino.

#### Sintaxis

obj = Object.assign(objetivo, ...fuentes)

#### Parámetros

- objetivo: El objeto destino.
- fuentes: Los objetos origen.

En este caso sucede lo mismo que en el Shallow copy.

### Object.create()

El método Object.create() crea un objeto nuevo, utilizando un objeto existente como el prototipo del nuevo objeto creado.

#### Sintaxis

obj = Object.create(proto[, propertiesObject])

#### Parámetros

- proto: Objeto el cual debe ser el prototipo del nuevo objeto creado.
- propertiesObject: Opcional. Si se especifica y no es undefined, un objeto cuyas propiedades enumerables propias (es decir, aquellas propiedades definidas sobre si mismo y no son propiedades enumerable a lo largo de su cadena de prototipos) espefica descriptores de propiedad para ser agregadas al objeto recien creado, con los nombres de propiedad correspondiente. Estas propiedades corresponden al segundo argumento de Object.defineProperties.

Crea un objeto en el cual dentro de prototype (**proto**) engloba todas las propiedades del objeto de referencia. Si se modifica una variable desde este nuevo objeto, la misma se sobre escribe y se interpreta como una nueva propiedad. Pero si los objetos que son referencia dentro del prototype (nested objects) son modificados, o los objetos que son referencia de la referencia son modificados, el nuevo objeto también sufrirá modificaciones.

## Clase 07: Qué es JSON.parse y JSON.stringify

### JSON.stringify()

El método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON.

Ppcionalmente reemplaza valores si se indica una función de reemplazo, o si se especifican las propiedades mediante un array de reemplazo.

#### Sintaxis

obj = JSON.stringify(value[, replacer[, space]])

#### Parámetros

- value: El valor que será convertido a una cadena JSON.
- replacer: Opcional. Una función que altera el comportamiento del proceso de conversión a cadena de texto, o un array de objetos String o Number que representan una lista de elementos válidos que se incluyen en la cadena JSON. Si este valor es null o no se define, todas las propiedades del objeto son incluidas en la cadena de texto JSON resultante.
- space: Opcional. Un objeto de tipo String o Number que se utiliza para insertar un espacio en blanco dentro de la cadena de salida JSON para mejorar su legibilidad. Si es de tipo Number, indica el número de espacios a usar como espacios en blanco; este número está limitado se limita a 10 (si es mayor, el valor es sólo 10). Los valores inferiores a 1 indican que no se deben utilizar espacios. Si es de tipo String, la cadena de texto (o sus 10 primeros caracteres, si es mayor) se utiliza como espacios en blanco. Si este parámetro no se define o es null, no se utilizará ningún espacio en blanco.

### JSON.parse()

El método JSON.parse() analiza una cadena de texto como JSON, transformando opcionalmente el valor producido por el análisis.

De esta forma podemos transformar una cadena de texto obtenida mediante JSON.stringify() en un nuevo objeto.

#### Sintaxis

obj = JSON.parse(text[, reviver])

#### Parámetros

- text: El texto que se convertirá a JSON. Vea el objeto JSON para una descripción de la sintaxis JSON.
- reviver: Opcional. Si una función, prescribe cómo se transforma el valor producido originalmente por el parsing, antes de retornar.

### Copiar objetos mediante la aplicación de ambos métodos en cadena

Se puede así transformar una variable tipo objeto en otra variable tipo objeto sin quedar vinculada ninguna de sus propiedades, tampoco asi los objetos dentro del objeto (nested objects).

La debilidad de este método radica en que no es capaz de copiar funciones (métodos) desde un objeto hacia otro.

## Clase 08: Qué es recursividad (o recursión)

### Recursión

Es el acto de una función llamándose a sí misma. La recursión es utilizada para resolver problemas que contienen subproblemas más pequeños. Una función recursiva puede recibir 2 entradas: un caso base (finaliza la recursión) o un un caso recursivo (continúa la recursión).

#### Ejemplo de función recursiva

function recursiva(numbersArray) {

if (numbersArray.length != 0) {
const firstNum = numbersArray[0];
console.log(firstNum);

numbersArray.shift();
recursiva(numbersArray);
}

}

## Clase 09: Deep copy con recursividad

### Deep copy

Deep copy hace referencia a una función recursiva utilizada para crear copia de los objetos de tal forma que no se rompan si tenemos objetos dentro de objetos dentro de objetos, o si tenemos métodos dentro de nuestros objetos.

Se puede ver la función DeepCopy dentro de la carpeta /deepCopyConFuncionRecursiva de este repositorio.

## Clase 10: Abstracción con objetos literales y deep copy

### Object.seal()

Utilizar Object.seal() equivale a marcar cada uno de los elementos de nuestro objeto como "configurable: false" al definir una de sus propiedades con Object.defineProperty(). De esta forma los elementos de nuestro objeto se podrán modificar pero no eliminar.

### Objct.isSealed()

El método Object.isSealed() verifica si el objeto está sellado.

#### Sintaxis

Object.isSealed(obj)

#### Parámetros

- obj: El objeto que debe ser revisado.

### Object.freeze()

Utilizar Object.freeze() equivale a marcar cada uno de los elementos de nuestro objeto como "configurable: false" y "writable: false" al definir una de sus propiedades con Object.defineProperty(). De esta forma los elementos de nuestro objeto no se podrán modificar ni eliminar.

### Objct.isFrozen()

El método Object.isFrozen() verifica si el objeto está "congelado", es decir, si se le ha aplicado el método Object.freeze().

#### Sintaxis

Object.isFrozen(obj)

#### Parámetros

- obj: El objeto que debe ser revisado.

## Clase 11: Factory pattern y RORO

El script de esta clase se puede ver dentro de la carpeta /factoryPaternRORO de dicho repositorio.

Aquí se crea una función Factory pattern para crear estudiantes con el nombre de createStudent.

Dicha función requiere de un objeto como argumento para crear el nuevo objeto. Pero existen valores que consideramos obligatorios al momento de crear dicho objeto.

Para que la función devuelva por defecto un error diciendo que "El parámetro es obligatorio", creamos la función requiredParam y se la asignamos por defecto a los elementos que consideramos obligatorios.

De esta forma, si se llama a la función createStudent sin los parametros obligatorios, se mostrará el error antes mencionado.

## Clase 12: Module pattern y namespaces: propiedades privadas en JavaScript

En el script correspondiente a la clase, el cual se puede encontrar en la carpeta /modulePatternNamespaces de este repopsitorio se muestra como se pueden asignar propiedades y métodos privados y públicos en el caso de que se trabaje con Factory patterns para crear nuevos objetos.

## Clase 13: Getters y setters

## Clase 14:

## Clase 15:

## Clase 16:

## Clase 17:

## Clase 18:

## Clase 19:
