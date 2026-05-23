# Bitácora del artefacto - Semana 11

## Nombre del estudiante

Escribe aquí tu nombre.Cristian David Ramirez Cuervo

## 1. Configuración del entorno

| Acción | Resultado obtenido | Captura o evidencia |
|---|---|---|
| Abrí el proyecto en VS Code | La carpeta del proyecto abrió correctamente | Proyecto visible en el explorador |
| Ejecuté npm install | Se instalaron las dependencias | Terminal sin errores |
| Ejecuté npm run setup:libs | Se creó la carpeta vendor con librerías | Carpeta vendor generada |
| Ejecuté npm run check | Se revisaron archivos y pendientes | Mensaje de revisión en terminal |
| Ejecuté npm run start | La web inició en servidor local | URL local abierta en navegador |

## 2. Archivos revisados

| Archivo | Qué contiene | Problema encontrado |
|---|---|---|
| data/produccion_base.csv | Registros base de producción | Cantidad cero genera advertencia |
| data/datos_con_errores.csv | Registros de prueba revisados | Se corrigieron negativos, no numéricos, vacíos, duplicados y cantidad alta |
| data/inventario_base.json | Inventario rural | Se corrigieron cantidad negativa, producto vacío, cantidad no numérica y estado no reconocido |
| js/validators.js | Reglas de validación | Faltaba validar negativos y duplicados |
| js/reports.js | Exportación de reportes | Faltaba completar exportación PDF |

## 3. Problemas de integridad detectados

| Nº | Archivo | Registro o línea | Problema | Corrección propuesta |
|---|---|---|---|---|
| 1 | data/datos_con_errores.csv | 2026-05-25, Leche, -12 | Cantidad negativa | Se corrigió a 12 |
| 2 | data/datos_con_errores.csv | 2026-05-26, Maiz, abc | Cantidad no numérica | Se corrigió a 30 |
| 3 | data/datos_con_errores.csv | 2026-05-28, Yuca duplicado | Registro repetido | Se cambió el registro repetido para diferenciarlo |
| 4 | data/inventario_base.json | INV-002 | Cantidad negativa | Corregir cantidad del inventario |
| 5 | data/inventario_base.json | INV-005 | Cantidad no numérica | Reemplazar `abc` por número válido |

## 4. Mejoras aplicadas

| Archivo modificado | Cambio realizado | Por qué mejora el sistema |
|---|---|---|
| js/validators.js | Se agregó validación de cantidad negativa | Evita aceptar producción incoherente |
| js/validators.js | Se agregó detección de duplicados con Set | Ayuda a encontrar registros repetidos |
| js/reports.js | Se completó exportación PDF con jsPDF | Permite entregar reporte formal |
| evidencias/README_BREVE_ENTREGA.md | Se completó documentación | Facilita la entrega del artefacto |

## 5. Conclusión

Aprendí que los datos deben revisarse antes de usarse, porque un archivo puede contener campos vacíos, números incorrectos, duplicados o información incoherente. También aprendí a organizar un proyecto web por carpetas, instalar librerías con npm, analizar CSV y JSON, mostrar resultados y generar reportes. La integridad de la información es clave para que un sistema sea confiable.
