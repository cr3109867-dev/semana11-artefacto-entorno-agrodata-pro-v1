# README breve de entrega - AgroData Integridad Pro

## 1. Nombre del estudiante

Escribe aquí tu nombre.Cristian David Ramirez Cuervo

## 2. Descripción del artefacto

AgroData Integridad Pro es una página web educativa que analiza archivos CSV y JSON relacionados con producción e inventario rural. El sistema detecta problemas de integridad como campos vacíos, cantidades negativas, datos no numéricos, duplicados y estados inválidos. También muestra tablas, métricas, gráfico de resumen y permite exportar reportes en TXT, JSON y PDF.

## 3. Tecnologías y librerías utilizadas

| Tecnología o librería | Función |
|---|---|
| HTML | Estructura de la página web |
| CSS | Diseño visual y estilos |
| JavaScript | Lógica, validaciones, carga de datos y reportes |
| PapaParse | Lectura y conversión de archivos CSV |
| Chart.js | Generación del gráfico de integridad |
| SweetAlert2 | Alertas visuales para el usuario |
| Font Awesome | Íconos de la interfaz |
| jsPDF | Exportación del reporte en PDF |

## 4. Cómo ejecutar el proyecto

```bash
npm install
npm run setup:libs
npm run check
npm run start
```

Luego se abre el enlace mostrado en la terminal, normalmente `http://127.0.0.1:5173`.

## 5. Errores encontrados

| Error | Archivo | Solución aplicada |
|---|---|---|
| No se detectaba cantidad negativa en producción | js/validators.js | Se agregó validación `quantity < 0` como error |
| No se detectaban registros duplicados | js/validators.js | Se creó una clave con fecha, producto y responsable usando un `Set` |
| Datos CSV con campos vacíos, negativos, no numéricos y duplicados | data/datos_con_errores.csv | Se corrigieron los registros problemáticos |
| Exportación PDF pendiente | js/reports.js | Se implementó `exportPdf` usando jsPDF |
| Inventario con cantidad negativa y no numérica | data/inventario_base.json | Se corrigieron por cantidades válidas |
| Estado de inventario no reconocido | data/inventario_base.json | Se cambió por un estado permitido |

## 6. Conclusión

Aprendí que manejar archivos y datos simples requiere orden, validación y pruebas. Separar HTML, CSS, JavaScript y datos facilita encontrar errores y mejorar el proyecto. También entendí que la integridad de la información es importante porque evita tomar decisiones con datos incompletos, duplicados o incoherentes. Las librerías ayudan a crear una solución más completa, porque permiten leer CSV, mostrar gráficos, generar alertas y exportar reportes.
