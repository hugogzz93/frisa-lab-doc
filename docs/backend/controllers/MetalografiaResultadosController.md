
[Codigo Fuente](https://github.com/hugogzz93/anlab-backend/blob/cesar-experimentos/Controllers/MetalografiaResultadosController.cs)


## Endpoints

### HttpGet
> tld/metalografiaresultados/

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|spInput|[MetalografiaSPInput](/docs/backend/DBAdapter/InputReference)|[FromQuery](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.fromqueryattribute?view=aspnetcore-6.0)|si|


### HttpPost
> tld/metalografiaresultados

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|input|[MetalografiaResultados](/docs/backend/models/MetalografiaResultados)|[FromBody](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.fromqueryattribute?view=aspnetcore-6.0)|si|


### HttpPut
> tld/metalografiaresultados

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|input|[MetalografiaResultados](/backend/models/MetalografiaResultados.md)|[FromQuery](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.fromqueryattribute?view=aspnetcore-6.0)|si|
|id|int|[FromUrl](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.fromrouteattribute?view=aspnetcore-6.0Reference)|no|jV


### HttpDelete
> tld/metalografiaresultados

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|id|int|[FromQuery](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.fromqueryattribute?view=aspnetcore-6.0)|si|



## Propiedades
|Nombre|Tipo|Opcional|
|---|---|---|
|_logger|ILogger|no|
|_context|SqlContext|no|

## Metodos
