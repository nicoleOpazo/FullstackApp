# Aplicación Web Full Stack - Usuarios y Carritos

Esta es una aplicación web Full Stack que permite gestionar usuarios y carritos a través de una interfaz desarrollada en Angular para el Front-End y una API REST desarrollada en Spring Boot para el Back-End. La aplicación utiliza una base de datos H2 en memoria y ofrece varios endpoints para realizar operaciones CRUD en las entidades de Usuarios y Carritos.

## Componentes Angular

La aplicación Front-End desarrollada en Angular consta de tres componentes principales:

1. **Inicio Component**: Este componente es la página de inicio de la aplicación. Proporciona una descripción general de la aplicación y sus características.

2. **Registros Component**: Este componente muestra los usuarios registrados. Ofrece una interfaz de usuario para visualizar los datos de la entidad "Usuarios" a través de la API REST.

3. **Acerca de Component**: Este componente indica los datos del autor de este proyecto.

## Configuración de Rutas

La aplicación utiliza el enrutamiento de Angular para navegar entre los componentes.

## Back-End Spring Boot

El Back-End de la aplicación se desarrolla en Spring Boot y ofrece una API REST que gestiona las entidades "Usuarios" y "Carritos". Utiliza una base de datos H2 en memoria para almacenar los datos y ofrece varios endpoints para realizar operaciones CRUD en estas entidades.

## Ejecución

- **Inicia el Back-End Spring Boot.**
- **Inicia el Front-End Angular utilizando el comando `ng serve -o`.**
- **Acceso y registro de usuarios:** la aplicación muestra a los usuarios que se han registrado previamente a través del endpoint de la API utilizando una herramienta como Postman. Para registrar un nuevo usuario, sigue estos pasos:

1. Abre Postman o una herramienta similar para realizar solicitudes HTTP.
2. Utiliza el endpoint de registro de usuarios proporcionado por la API para crear un nuevo usuario. Asegúrate de proporcionar los datos requeridos para el registro
3. Después de registrar un usuario, podrás verlo en la sección de Registros en la aplicación.

### Ejemplo
- Crear un Usuario (POST)
- URL: http://localhost:8080/usuarios
- Método: POST
- Ejemplo de JSON de Solicitud: 
```json
{
  "nombre": "usuario",
  "edad": 26,
  "activo": true,
  "fechaCreacion": "2023-09-28T10:00:00"
}
```

