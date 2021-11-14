# Proyecto Final Sebastián Sierra Villegas

Esta es una aplicación diseñada para hacer cálculos matemáticos que incluyen áreas y perímetros de figuras, números factoriales y números Fibonacci.
La aplicación se hizo con Node.js y React.js
El sistema fue realizado usando la arquitectura de capas en donde todo esta divido entre la parte del front, el controlador, y el back compuesto por la validación y los cálculos matemáticos como tal.
El sourcecode se puede apreciar en mi GitHub pero también fue compartido por el entregable de moodle: [https://github.com/sebasDev2001/ProyectoFinal.git]
El deployment fue realizado por medio de Heroku y se puede ver en el siguiente enlace: [https://proyectocalculosmatematicos.herokuapp.com/]
Tanto el sourcecode en GitHub como el proyecto de Heroku fueron compartidos con el correo que se especifico en las pautas.
# Pruebas Unitarias
Se realizaron pruebas unitarias a todo el backend, esto incluye los cálculos básicos y las validaciones por las que pasa previamente los datos. Aquí se puede ver una foto con los resultados, pero también se puede correr las mismas pruebas usando npm run test.
 
**Nota**: Todo lo que está en rojo es porque no se le realizo prueba unitaria, y los de validación no están del todo cubiertos porque esas funcionalidades de código ya son probadas en los cálculos como tal. También hay pruebas que fallaron porque este intenta hacer las pruebas relacionadas con UI, pero esas se hacen con otro proceso.
# Pruebas de UI
Para realizar las pruebas de UI, se definió primero los casos de uso que se deben probar los cuales se pueden ver el documento de casos de uso adjunto con este archivo con el nombre de “casos de uso”. Cada una de las pruebas cases creados están en el documento Excel “casos de prueba” donde se muestra cada una de las pruebas cases con sus resultados obtenidos. Estos resultados también se pueden ejecutar desde el proyecto haciendo uso de los siguientes comandos:
•	Npm run prubeasUiCirculo
•	Npm run pruebasUiRectangulo
•	Npm run pruebasUiTriangulo
•	Npm run prueabasUiFactorial
•	Npm run pruebasUiFibonacci
También estará adjuntado el archivo de las pruebas generadas por Selenium IDE las cuales se pueden cargar en dicho programa y hacer las mismas pruebas de UI por este medio. El archivo se llama CompleteTests.side









