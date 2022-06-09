
[Codigo Fuente](sourceCodeReference)


## Endpoints

### HttpGet
> tld/piezas/

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|spInput|[PiezaSPInput](DBAdapter/InputReference#MatInput)|[FromQuery](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.fromqueryattribute?view=aspnetcore-6.0)|si|


### HttpPost
> tld/piezas

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|input|[Pieza](DBAdapter/Models#Pieza)|[FromBody](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.fromqueryattribute?view=aspnetcore-6.0)|si|


### HttpPut
> tld/piezas

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|input|[Pieza](DBAdapter/InputReference#MatInput)|[FromQuery](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.fromqueryattribute?view=aspnetcore-6.0)|si|
|id|int|[FromUrl](fromUrlReference)|no|jV


### HttpDelete
> tld/piezas

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|id|int|[FromQuery](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.fromqueryattribute?view=aspnetcore-6.0)|si|


### BulkEdit
> tld/materalesdeprueba/bulkEdit

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|inputs|List[[Pieza](DBAdapter/InputReference#MatInput)]|[FromQuery](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.fromqueryattribute?view=aspnetcore-6.0)|si|






## Propiedades
|Nombre|Tipo|Opcional|
|---|---|---|
|_logger|ILogger|no|
|_context|SqlContext|no|

## Metodos
