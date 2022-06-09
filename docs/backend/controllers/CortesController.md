
[Codigo Fuente](sourceCodeReference)


## Endpoints

### HttpGet
> tld/cortes/

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|spInput|[CorteSPInput](DBAdapter/InputReference#MatInput)|[FromQuery](fromQueryReference)|si|


### HttpPost
> tld/cortes

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|input|[Corte](DBAdapter/Models#Corte)|[FromBody](fromQueryReference)|si|


### HttpPut
> tld/cortes

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|input|[Corte](DBAdapter/InputReference#MatInput)|[FromQuery](fromQueryReference)|si|
|id|int|[FromUrl](fromUrlReference)|no|jV


### HttpDelete
> tld/cortes

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|id|int|[FromQuery](fromQueryReference)|si|


### BulkEdit
> tld/materalesdeprueba/bulkEdit

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|inputs|List[[Corte](DBAdapter/InputReference#MatInput)]|[FromQuery](fromQueryReference)|si|






## Propiedades
|Nombre|Tipo|Opcional|
|---|---|---|
|_logger|ILogger|no|
|_context|SqlContext|no|

## Metodos
