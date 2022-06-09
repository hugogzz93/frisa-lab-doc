
[Codigo Fuente](sourceCodeReference)


## Endpoints

### HttpGet
> tld/documentos/

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|spInput|[DocumentoSPInput](DBAdapter/InputReference#MatInput)|[FromQuery](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.fromqueryattribute?view=aspnetcore-6.0)|si|


### HttpPost
> tld/documentos

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|input|[Documento](DBAdapter/Models#Documento)|[FromBody](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.fromqueryattribute?view=aspnetcore-6.0)|si|


### HttpPut
> tld/documentos

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|input|[Documento](DBAdapter/InputReference#MatInput)|[FromQuery](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.fromqueryattribute?view=aspnetcore-6.0)|si|
|id|int|[FromUrl](fromUrlReference)|no|jV


### HttpDelete
> tld/documentos

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|id|int|[FromQuery](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.fromqueryattribute?view=aspnetcore-6.0)|si|


### BulkEdit
> tld/materalesdeprueba/bulkEdit

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|inputs|List[[Documento](DBAdapter/InputReference#MatInput)]|[FromQuery](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.fromqueryattribute?view=aspnetcore-6.0)|si|






## Propiedades
|Nombre|Tipo|Opcional|
|---|---|---|
|_logger|ILogger|no|
|_context|SqlContext|no|

## Metodos
