# efectivamente la ruta del print no correspondia, esa la saque antes de generar las rutas finales, pero aca muestro como se realizan los filtros

## 1.- iniciar el servidor  : npm run dev
## 2.- ir a la ruta: http://localhost:3000/api/joyas/
## 3.- por query o params generar los filtros
##      3.1.- key: filters[n1][n2] en n1 seleccionamos de que queremos hacer   ##            filtro, en el n2 seleccionamos que operador queremos gestionar, 
##            estas son las opciones de operador:
##              $eq: "=",
##              $gt: ">",
##              $gte:">=",
##              $lt: "<",
##              $lte:"<=",
##              $ne: "!="
##            ej: filters[metal][$eq] : aca queremos filtrar por metal he igual a
##      3.2.- value: aca ingresamos el valos del filtro
##            ej: plata : mostrara todos los resultados que el metal sea plata
## ingrese una imagen de la prueba que acabo de hacer es el print 3.

# muchas gracias