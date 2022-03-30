// Se crean 2 funciones de validacion de datos. Son llamadas para verificar si la variable de ingreso es un objeto o un array.

function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

// Comienzo de la función Deep Copy.

function deepCopy(subject) {
  // Se inicializa la variable "copysubject", dentro de la cual se guardarán los datos de salida.

  let copySubject;

  // Mediante las 2 funciones de validación de datos "isObject" y "isArray" se evalúa el parametro de entrada "subject".

  const subjectIsObject = isObject(subject);
  const subjectIsArray = isArray(subject);

  // Si "subject" es un array -> se crea un array vacío; si es un objeto -> se crea un objeto vacío; y si no es ninguna de las dos (o sea que es un número, string o boolean) -> se devuelve el valor correspondiente a "subject".

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  // Aquí comienza la recursividad.

  for (key in subject) {
    // Se evalúa si cada valor de "subject" es un objeto o no.
    const keyIsObject = isObject(subject[key]);

    // Si el valor se correponde con un objeto -> se crea en copySubject[key] un objeto y se vuelve a llamar a la función "deepCopy" con el argumento "subject[key]", alegando a la recursividad.
    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else {
      // Si el valor se corresponde con un Array, se crea un elemento array al final de "copySubject" con el valor de "subject[key]" mediante el método push.
      if (subjectIsArray) {
        copySubject.push(subject[key]);

        // Y si no es un objeto o un array, o sea que es un número, string o boolean -> se devuelve el valor correspondiente a "subject[key]".
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  // Finalmente, se devuelve el valor de "copySubject" con todos los valores anidados.
  return copySubject;
}

const studentBase = {
  name: undefined,
  email: undefined,
  age: undefined,
  approvedCourses: undefined,
  learningPaths: undefined,
  socialMedia: {
    twitter: undefined,
    instagram: undefined,
    facebook: undefined,
  },
};

const juan = deepCopy(studentBase);
Object.seal(juan);
// juan.name = "Juanito";
