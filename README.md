# Bienvenidos a la aplicación backend de MALAB.

<details>
  <summary>Contenido 📝</summary>
  <ol>
    <li><a href="#objetivo">Objetivo</a></li>
    <li><a href="#sobre-el-proyecto">Sobre el proyecto</a></li>
    <li><a href="#deploy">Deploy</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#diagrama-bbdd">Diagrama BBDD</a></li>
    <li><a href="#instalacion-en-local">Instalación en local</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#proximas-implementaciones">Proximas implementaciones</a></li>
    <li><a href="#licencia">Licencia</a></li>
    <li><a href="#desarrollador">Desarrollador</a></li>
  </ol>
</details>

## Objetivo
En este proyecto construimos una API funcional para un Coworking de Ceramica para garantizar una gestión eficiente del espacio y de los recursos. La API está conectada a una base de datos relacional. Esta BBDD no permite una comunicación entre las diferentes partes del sistema y así garantizar que la información se almacene y gestione de manera efectiva.

## Sobre el proyecto.
Esta API fue creada para administrar un Coworking, donde los clientes pueden registrarse como usuarios. Entre los objetivos estaba que los pacientes pudieran acceder a ver la información de las mesas de trabajo, y poder reservar. Para que un usuario pudiera pedir hacer una reserva, antes tiene que regitrarse en la aplicación. De esta manera puede hcer todas la rreservas que quiera. También tendra un espacio personal donde podra visualizarlas, modificarlas y cancelarlas.

## Deploy 
<div align="center">
    <a href="https://www.google.com"><strong>Url a producción </strong></a>
</div>

## Stack
Technologies:
<div align="center">
<a href="https://www.mysql.com/">
    <img src= "https://img.shields.io/badge/mysql-3E6E93?style=for-the-badge&logo=mysql&logoColor=white"/>
<a href="https://www.expressjs.com/">
    <img src= "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
</a>
<a href="https://nodejs.org/es/">
    <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white"/>
</a>
<a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
    <img src= "https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&logo=javascript&logoColor=black"/>
</a>
<a href="https://jwt.io/">
    <img src= "https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens"/>
</a>
<a href="https://www.postman.com/">
    <img src= "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"/>
</a>
 <a href="https://www.docker.com/">
    <img src= "https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"/>
</a>
<a href="https://www.sequelize.org/">
    <img src= "https://img.shields.io/badge/sequelize-3C76C3?style=for-the-badge&logo=sequelize&logoColor=white"/>
</a>
 </div>
  
  
## Diagrama BBDD
  ![Captura de pantalla 2023-05-10 174112](https://github.com/MarioAAT/mat-geekhubs-fsd-backend-malab/assets/122813777/e15c7031-711b-423a-8125-a430dbf5c705)
  
## Instalación local
1. Necesitamos tener NodeJS instalado
1. Clonar el repositorio
2. Ejecutamos el comando `$npm install` para instalar las dependencias
3. Conectamos nuestro repositorio con la base de datos 
4. Ejecutamos las migraciones `$npx sequelize-cli db:migrate` 
5. Ejecutamos los seeders ` $ npx sequelize-cli db:seed:all ` 
6. Nos aseguramos de tener el puerto correcto, y procedemos a levantarlo `$npm run dev`
  
## Endpoints
Para visualizar la información de los endpoints utilizaremos la herramienta postman https://www.postman.com/
Algunos de los endpoint solo se pueden ver si tiene un rol de administrador.
<details>
<summary>Endpoints</summary>
  
  - AUTORIZACIÓN
  
    - LOGIN

            POST http://localhost:3000/api/login  
        body:
        ``` js
            {
                "email": "ejemplo.ejemplo@gmail.com",
                "password": "abc123"
            }
        ```
    - REGISTRO

            POST http://localhost:3000/api/nuevousuario
        body:
        ``` js
            {
                "nombre": "Andrea",
                "apellido": "Meseguer",
                "email": "andrea@mess.com",
                "telefono": "640319865",
                "password": "12345"
            }
        ```
    
  - USARIOS
    
         GET http://localhost:3000/api/users/31
            
         PUT http://localhost:3000/api/usuario/edit/admin/id
         body:
        ``` js
            {
                "nombre": "Mara",
                "apellido": "Escampini",
                "email": "mara@escampini.com",
                "telefono": "651324897",
                "id_rol": 2,
            }
        ```
  
         PUT http://localhost:3000/api/usuarios/edit
       body:
      ``` js
          {
              "nombre": "Mara",
              "apellido": "Escampini",
              "telefono": "651324897",
              "id": 11
          }
      ```
        
        
            DELETE http://localhost:3000/usuarios/7
            
            GET http://localhost:3000/api/usuario/perfil
         
- MESAS DE TRABAJO

            POST http://localhost:3000/api/mesas
         body:
        ``` js
            {
                "nombre": "Cofán",
                "tamaño": "120cm x 120cm",
                "descripcion": "La mesa de trabajo tiene altura ajustable, cuenta con caballetes para escultura. 4 bloques de repisa de 70cm x 57cm"
            }
        ```
        
            PUT http://localhost:3000/api/mesas/6
         body:
        ``` js
            {
                "nombre": "Cofán",
                "tamaño": "150cm x 130cm",
                "descripcion": "La mesa de trabajo tiene altura ajustable, cuenta con caballetes para escultura. 4 bloques de repisa de 70cm x 57cm"
            }
        ```
        
            GET http://localhost:3000/api/mesas/1
            
            DELETE http://localhost:3000/api/mesas/7
            

            GET http://localhost:3000/api/mesas
            
- HACER UNA RESERVA

            POST http://localhost:3000/api/nuevareserva
         body:
        ``` js
            {
                "fecha_reserva": "2023-04-20",
                "hora_inicio": "18:00:00",
                "hora_fin": "20:00:00",
                "id_usuario": 4,
                "id_mesa": 2
            }
        ```
        
            PUT http://localhost:3000/api/reservas/6
         body:
        ``` js
            {
                "fecha_reserva": "2023-04-20",
                "hora_inicio": "11:00:00",
                "hora_fin": "14:00:00",
                "id_usuario": 5,
                "id_mesa": 3
            }
        ```
        
            PUT http://localhost:3000/api/patient/appointments/12
         body:
        ``` js
            {
                "professional_id": 3,
                "treatment_id": 15,
                "appointment_on": "2023-04-22",
                "start_at": "17:30:00",
                "end_at": "18:45:00"
            }
        ```
        
            GET http://localhost:3000/api/reservas/usuario
            
            GET http://localhost:3000/api/reservas
            
            DELETE http://localhost:3000/api/reservas/7

</details>
  
## Proximas implementaciones
[ ] Hacer un metodo para hacer un formulario de contacto y configurarlo para que las respuestas lleguen al correo electronico de la empresa.  
[ ] Ampliar la base de datos con mas imagenes de Coworking.  
[ ] Implementar los métodos necesarios para los controladores de las tablas de Profesionales, Inscripciones y Cursos.
[ ] Crear las rutas para profesionales, inscripciones y cursos.
  
## Licencia 
Este proyecto esta bajo la licencia "MIT License"
  
## Developer:

Mario Aguilar 
  
<a href="https://github.com/MarioAAT" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=red" target="_blank"></a>

 
