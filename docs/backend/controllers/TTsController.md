
[Codigo Fuente](sourceCodeReference)


## Endpoints

### HttpGet
> tld/tts/

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|spInput|[TTSPInput](DBAdapter/InputReference#MatInput)|[FromQuery](fromQueryReference)|si|


### HttpPost
> tld/tts

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|input|[TT](DBAdapter/Models#TT)|[FromBody](fromQueryReference)|si|


### HttpPut
> tld/tts

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|input|[TT](DBAdapter/InputReference#MatInput)|[FromQuery](fromQueryReference)|si|
|id|int|[FromUrl](fromUrlReference)|no|jV


### HttpDelete
> tld/tts

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|id|int|[FromQuery](fromQueryReference)|si|


### BulkEdit
> tld/materalesdeprueba/bulkEdit

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|inputs|List[[TT](DBAdapter/InputReference#MatInput)]|[FromQuery](fromQueryReference)|si|






## Propiedades
|Nombre|Tipo|Opcional|
|---|---|---|
|_logger|ILogger|no|
|_context|SqlContext|no|

## Metodos
