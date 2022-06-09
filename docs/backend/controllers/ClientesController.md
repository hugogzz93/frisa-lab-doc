
[Codigo Fuente](sourceCodeReference)


## Endpoints

### HttpGet
> tld/clientes/

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|spInput|[ClienteSPInput](DBAdapter/InputReference#MatInput)|[FromQuery](fromQueryReference)|si|


### HttpPost
> tld/clientes

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|input|[Cliente](DBAdapter/Models#Cliente)|[FromBody](fromQueryReference)|si|


### HttpPut
> tld/clientes

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|input|[Cliente](DBAdapter/InputReference#MatInput)|[FromQuery](fromQueryReference)|si|
|id|int|[FromUrl](fromUrlReference)|no|jV


### HttpDelete
> tld/clientes

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|id|int|[FromQuery](fromQueryReference)|si|


### BulkEdit
> tld/materalesdeprueba/bulkEdit

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|inputs|List[[Cliente](DBAdapter/InputReference#MatInput)]|[FromQuery](fromQueryReference)|si|






## Propiedades
|Nombre|Tipo|Opcional|
|---|---|---|
|_logger|ILogger|no|
|_context|SqlContext|no|

## Metodos
