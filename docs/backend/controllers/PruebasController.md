
[Codigo Fuente](sourceCodeReference)


## Endpoints

### HttpGet
> tld/pruebas/

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|spInput|[PruebaSPInput](DBAdapter/InputReference#MatInput)|[FromQuery](fromQueryReference)|si|


### HttpPost
> tld/pruebas

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|input|[Prueba](DBAdapter/Models#Prueba)|[FromBody](fromQueryReference)|si|


### HttpPut
> tld/pruebas

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|input|[Prueba](DBAdapter/InputReference#MatInput)|[FromQuery](fromQueryReference)|si|
|id|int|[FromUrl](fromUrlReference)|no|jV


### HttpDelete
> tld/pruebas

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|id|int|[FromQuery](fromQueryReference)|si|


### BulkEdit
> tld/materalesdeprueba/bulkEdit

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|inputs|List[[Prueba](DBAdapter/InputReference#MatInput)]|[FromQuery](fromQueryReference)|si|






## Propiedades
|Nombre|Tipo|Opcional|
|---|---|---|
|_logger|ILogger|no|
|_context|SqlContext|no|

## Metodos
