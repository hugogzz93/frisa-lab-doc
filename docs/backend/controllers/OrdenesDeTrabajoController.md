
[Codigo Fuente](https://github.com/hugogzz93/anlab-backend/blob/eia-db/Controllers/OrdenesDeTrabajoController.cs)


## Endpoints

### HttpGet
> tld/ordenesdetrabajo/

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|spInput|[OrdenDeTrabajoSPInput](/backend/DBAdapter/InputReference.md)|[FromQuery](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.fromqueryattribute?view=aspnetcore-6.0)|si|


### HttpPost
> tld/ordenesdetrabajo

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|input|[OrdenDeTrabajo](/backend/models/OrdenDeTrabajo.md)|[FromBody](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.fromqueryattribute?view=aspnetcore-6.0)|si|


### HttpPut
> tld/ordenesdetrabajo

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|input|[OrdenDeTrabajo](/backend/DBAdapter/InputReference.md)|[FromQuery](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.fromqueryattribute?view=aspnetcore-6.0)|si|
|id|int|[FromUrl](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.fromrouteattribute?view=aspnetcore-6.0Reference)|no|jV


### HttpDelete
> tld/ordenesdetrabajo

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|id|int|[FromQuery](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.fromqueryattribute?view=aspnetcore-6.0)|si|


### BulkEdit
> tld/materalesdeprueba/bulkEdit

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|inputs|List[[OrdenDeTrabajo](/backend/DBAdapter/InputReference.md)]|[FromQuery](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.fromqueryattribute?view=aspnetcore-6.0)|si|






## Propiedades
|Nombre|Tipo|Opcional|
|---|---|---|
|_logger|ILogger|no|
|_context|SqlContext|no|

## Metodos
