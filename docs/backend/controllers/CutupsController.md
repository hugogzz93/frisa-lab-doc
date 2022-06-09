
[Codigo Fuente](sourceCodeReference)


## Endpoints

### HttpGet
> tld/cutups/

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|spInput|[CutUpSPInput](DBAdapter/InputReference#MatInput)|[FromQuery](fromQueryReference)|si|


### HttpPost
> tld/cutups

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|input|[CutUp](DBAdapter/Models#CutUp)|[FromBody](fromQueryReference)|si|


### HttpPut
> tld/cutups

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|input|[CutUp](DBAdapter/InputReference#MatInput)|[FromQuery](fromQueryReference)|si|
|id|int|[FromUrl](fromUrlReference)|no|jV


### HttpDelete
> tld/cutups

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|id|int|[FromQuery](fromQueryReference)|si|


### BulkEdit
> tld/materalesdeprueba/bulkEdit

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|inputs|List[[CutUp](DBAdapter/InputReference#MatInput)]|[FromQuery](fromQueryReference)|si|






## Propiedades
|Nombre|Tipo|Opcional|
|---|---|---|
|_logger|ILogger|no|
|_context|SqlContext|no|

## Metodos
