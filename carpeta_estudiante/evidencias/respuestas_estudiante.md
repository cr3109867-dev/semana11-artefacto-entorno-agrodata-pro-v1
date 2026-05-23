# Respuestas del estudiante

## Pregunta 1
¿Por qué es importante separar los archivos HTML, CSS, JavaScript, datos y reportes en carpetas diferentes?

Respuesta: Es importante porque el proyecto queda más organizado y fácil de revisar. HTML maneja la estructura, CSS el diseño, JavaScript la lógica, la carpeta data guarda CSV/JSON y evidencias/reportes guarda la documentación. Así se encuentran más rápido los errores y se mantiene mejor el sistema.

## Pregunta 2
¿Qué diferencia hay entre un archivo CSV y un archivo JSON?

Respuesta: Un CSV guarda datos en filas y columnas separados por comas, parecido a una tabla. Un JSON guarda datos con claves y valores, permitiendo estructuras más completas como listas de objetos. CSV es simple para tablas y JSON es mejor para datos más organizados.

## Pregunta 3
¿Qué significa integridad de la información?

Respuesta: Significa que los datos sean correctos, completos, coherentes y confiables. También implica detectar errores como campos vacíos, cantidades negativas, valores no numéricos, duplicados o estados inválidos.

## Pregunta 4
¿Por qué un valor negativo puede representar un error en un registro de producción?

Respuesta: Porque normalmente la producción representa una cantidad obtenida o registrada, y no tendría sentido producir una cantidad menor que cero. Un valor negativo puede indicar error de digitación, mala captura de datos o información inconsistente.

## Pregunta 5
¿Qué función cumple cada librería utilizada en el proyecto?

Respuesta: PapaParse lee archivos CSV y los convierte en datos utilizables por JavaScript. Chart.js genera el gráfico de integridad. SweetAlert2 muestra alertas visuales de análisis, error o éxito. Font Awesome agrega íconos a la interfaz. jsPDF permite exportar el reporte en formato PDF.
