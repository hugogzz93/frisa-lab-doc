
[Codigo Fuente](sourceCodeReference)


## Endpoints

### HttpGet
> tld/materialesdeprueba/

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|spInput|[MaterialDePruebaSPInput](http://localhost:3000/docs/backend/DBAdapter/InputReference#materialdepruebasspinput)|[FromQuery](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.fromqueryattribute?view=aspnetcore-6.0)|si|


### HttpPost
> tld/materialesdeprueba

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|input|[MaterialDePrueba](DBAdapter/Models#MaterialDePrueba)|[FromBody](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.fromqueryattribute?view=aspnetcore-6.0)|si|


### HttpPut
> tld/materialesdeprueba

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|input|[MaterialDePrueba](DBAdapter/InputReference#MatInput)|[FromQuery](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.fromqueryattribute?view=aspnetcore-6.0)|si|
|id|int|[FromUrl](fromUrlReference)|no|jV


### HttpDelete
> tld/materialesdeprueba

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|id|int|[FromQuery](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.fromqueryattribute?view=aspnetcore-6.0)|si|


### BulkEdit
> tld/materalesdeprueba/bulkEdit

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|inputs|List[[MaterialDePrueba](DBAdapter/InputReference#MatInput)]|[FromQuery](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.fromqueryattribute?view=aspnetcore-6.0)|si|






## Propiedades
|Nombre|Tipo|Opcional|
|---|---|---|
|_logger|ILogger|no|
|_context|SqlContext|no|

## Metodos
