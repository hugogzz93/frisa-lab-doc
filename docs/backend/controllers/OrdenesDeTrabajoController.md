
[Codigo Fuente](sourceCodeReference)


## Endpoints

### HttpGet
> tld/ordenesdetrabajo/

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|spInput|[OrdenDeTrabajoSPInput](DBAdapter/InputReference#MatInput)|[FromQuery](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.fromqueryattribute?view=aspnetcore-6.0)|si|


### HttpPost
> tld/ordenesdetrabajo

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|input|[OrdenDeTrabajo](DBAdapter/Models#OrdenDeTrabajo)|[FromBody](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.fromqueryattribute?view=aspnetcore-6.0)|si|


### HttpPut
> tld/ordenesdetrabajo

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|input|[OrdenDeTrabajo](DBAdapter/InputReference#MatInput)|[FromQuery](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.fromqueryattribute?view=aspnetcore-6.0)|si|
|id|int|[FromUrl](fromUrlReference)|no|jV


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
|inputs|List[[OrdenDeTrabajo](DBAdapter/InputReference#MatInput)]|[FromQuery](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.fromqueryattribute?view=aspnetcore-6.0)|si|






## Propiedades
|Nombre|Tipo|Opcional|
|---|---|---|
|_logger|ILogger|no|
|_context|SqlContext|no|

## Metodos
