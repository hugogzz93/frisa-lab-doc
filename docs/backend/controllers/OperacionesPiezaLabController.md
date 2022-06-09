
[Codigo Fuente](sourceCodeReference)


## Endpoints

### HttpGet
> tld/operacionespiezalab/

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|spInput|[OperacionPiezaLabSPInput](DBAdapter/InputReference#MatInput)|[FromQuery](fromQueryReference)|si|


### HttpPost
> tld/operacionespiezalab

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|input|[OperacionPiezaLab](DBAdapter/Models#OperacionPiezaLab)|[FromBody](fromQueryReference)|si|


### HttpPut
> tld/operacionespiezalab

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|input|[OperacionPiezaLab](DBAdapter/InputReference#MatInput)|[FromQuery](fromQueryReference)|si|
|id|int|[FromUrl](fromUrlReference)|no|jV


### HttpDelete
> tld/operacionespiezalab

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|id|int|[FromQuery](fromQueryReference)|si|


### BulkEdit
> tld/materalesdeprueba/bulkEdit

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|inputs|List[[OperacionPiezaLab](DBAdapter/InputReference#MatInput)]|[FromQuery](fromQueryReference)|si|






## Propiedades
|Nombre|Tipo|Opcional|
|---|---|---|
|_logger|ILogger|no|
|_context|SqlContext|no|

## Metodos
