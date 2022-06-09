
[Codigo Fuente](sourceCodeReference)


## Endpoints

### HttpGet
> tld/materialesdeprueba/

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|spInput|[MaterialDePruebaSPInput](http://localhost:3000/docs/backend/DBAdapter/InputReference#materialdepruebasspinput)|[FromQuery](fromQueryReference)|si|


### HttpPost
> tld/materialesdeprueba

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|input|[MaterialDePrueba](DBAdapter/Models#MaterialDePrueba)|[FromBody](fromQueryReference)|si|


### HttpPut
> tld/materialesdeprueba

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|input|[MaterialDePrueba](DBAdapter/InputReference#MatInput)|[FromQuery](fromQueryReference)|si|
|id|int|[FromUrl](fromUrlReference)|no|jV


### HttpDelete
> tld/materialesdeprueba

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|id|int|[FromQuery](fromQueryReference)|si|


### BulkEdit
> tld/materalesdeprueba/bulkEdit

#### Parametros
|Nombre|Tipo|Fuente|Opcional|
|---|---|---|---|
|inputs|List[[MaterialDePrueba](DBAdapter/InputReference#MatInput)]|[FromQuery](fromQueryReference)|si|






## Propiedades
|Nombre|Tipo|Opcional|
|---|---|---|
|_logger|ILogger|no|
|_context|SqlContext|no|

## Metodos
