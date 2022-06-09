
[Codigo Fuente](https://github.com/hugogzz93/anlab-backend/blob/eia-db/Controllers/ProveedoresController.cs)


## Endpoints

### HttpGet
> tld/proveedores/

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|spInput|[ProveedorSPInput](/DBAdapter/InputReference)|[FromQuery](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.fromqueryattribute?view=aspnetcore-6.0)|si|


### HttpPost
> tld/proveedores

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|input|[Proveedor](/DBAdapter/Models#Proveedor)|[FromBody](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.fromqueryattribute?view=aspnetcore-6.0)|si|


### HttpPut
> tld/proveedores

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|input|[Proveedor](/DBAdapter/InputReference)|[FromQuery](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.fromqueryattribute?view=aspnetcore-6.0)|si|
|id|int|[FromUrl](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.fromrouteattribute?view=aspnetcore-6.0Reference)|no|jV


### HttpDelete
> tld/proveedores

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|id|int|[FromQuery](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.fromqueryattribute?view=aspnetcore-6.0)|si|


### BulkEdit
> tld/materalesdeprueba/bulkEdit

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|inputs|List[[Proveedor](/DBAdapter/InputReference)]|[FromQuery](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.fromqueryattribute?view=aspnetcore-6.0)|si|






## Propiedades
|Nombre|Tipo|Opcional|
|---|---|---|
|_logger|ILogger|no|
|_context|SqlContext|no|

## Metodos
