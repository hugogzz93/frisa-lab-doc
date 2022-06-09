
[Codigo Fuente](sourceCodeReference)


## Endpoints

### HttpGet
> tld/ordenesdetrabajo/

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|spInput|[OrdenDeTrabajoSPInput](DBAdapter/InputReference#MatInput)|[FromQuery](fromQueryReference)|si|


### HttpPost
> tld/ordenesdetrabajo

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|input|[OrdenDeTrabajo](DBAdapter/Models#OrdenDeTrabajo)|[FromBody](fromQueryReference)|si|


### HttpPut
> tld/ordenesdetrabajo

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|input|[OrdenDeTrabajo](DBAdapter/InputReference#MatInput)|[FromQuery](fromQueryReference)|si|
|id|int|[FromUrl](fromUrlReference)|no|jV


### HttpDelete
> tld/ordenesdetrabajo

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|id|int|[FromQuery](fromQueryReference)|si|


### BulkEdit
> tld/materalesdeprueba/bulkEdit

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|inputs|List[[OrdenDeTrabajo](DBAdapter/InputReference#MatInput)]|[FromQuery](fromQueryReference)|si|






## Propiedades
|Nombre|Tipo|Opcional|
|---|---|---|
|_logger|ILogger|no|
|_context|SqlContext|no|

## Metodos
