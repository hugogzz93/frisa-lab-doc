# Intro
## Overview

El backend del module para laboratorios es un servidor creado con [ASP.NET Core 6](https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-6.0).
  
**Tiene dos responsabilidades principales**
* Funcionar como interfaz entre la base de datos y el frontend que utilizan los usuarios.
* Aplicar logica de negocio a todas las interacciones entre el usuario y la base de datos.

## Conceptos Importantes
La estructura del backend consiste en los siguentes tipos de objetos. 
* Modelos
* Controladores
* SPAdapter
* DBContext

Si consideramos que en un polo del ecosistema esta el frontend utilizado por los usuarios, el otro polo es la base de datos.
Entre esos dos extremos estan los controladores. Los controladores se encargan de aplicar de procesar los datos recibidos por un extremo y prepararlos para que el otro 
extremo los pueda recibir. 

Al mismo tiempo, tiene la responsabilidad de aplicar logica de negocio. Por ejemplo, evitar que usuarios no autorizados puedan leer o escribir a la base de datos.
Mantener log de cambios, etc.

### Modelos
Los tipos de datos que reconoce el sistema. Ejemplos podrian ser: `Pieza`, `MaterialDePrueba`, `Corte`, etc.
Aunque los stored procedures no regresen tuplas que se conformen a los modelos, la primer tarea de los controladores al
recibir informacion de la base de datos, es transformarla en sus respectivos modelos.

La manera que los Controladores transforman los datos de la base de datos en modelos es a travez de `SPAdapter`.

:::info
La manera mas comun de hacer esta transforacion en **ASP.NET** es utilizando [Entity Framework](https://docs.microsoft.com/en-us/ef/).
En este caso, no podemos utilizarlo porque estamos limitados a interactuar con la base de datos unicamente a travez de stored procedures.
Asi que se tuvo que hacer un adaptador a la medida: **SPAdapter**.
:::

### Controladores
Los controladores se encargan de orquestrar todos los demas componentes del sistema para cumplir sus dos responsabilidades.

* Funcionar como interfaz entre la base de datos y el frontend que utilizan los usuarios.
* Aplicar logica de negocio a todas las interacciones entre el usuario y la base de datos.

En la mayoria de los casos, el sistema tiene **un controlador por modelo**. 
`MaterialDePrueba` tiene `MaterialesDePruebaController`, `Cliente` tiene `ClientesController`, etc.

El objetivo de este esquema es que cada aplicacion externa sepa que controlador debe llamar, con tal de que sepa que dato necesita.
Cada controlador tiene cuatro acciones, `leer`, `escribir`, `actualizar`, y `eliminar`; esquema conocido como [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete).
Cada accion esta relacionada a un metodo de HTTP.

#### Metodos
> Cuando un controlador recibe un request de HTTP, lee el metodo para saber que accion ejecutar.

|Accion|Metodo|
|---|---|
|Leer|HttpGet|
|Escribir|HttpPost|
|Actualizar|HttpPut|
|Eliminar|HttpDelete|


ASP.NET le **asigna automaticamente una ruta a cada controlador**.

:::info
Referir [aqui](https://docs.microsoft.com/en-us/aspnet/mvc/overview/older-versions-1/controllers-and-routing/aspnet-mvc-controllers-overview-cs) para aprender mas sobre controladores en **ASP.NET**.
:::


