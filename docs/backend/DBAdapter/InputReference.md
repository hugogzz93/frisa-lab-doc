
# Input Reference

## Introduccion

Este archivo contiene todos los inputs que reciben los controladores del sistema.
## CorteInput
### Propiedades

|Nombre|Tipo|Opcional|
|---|---|---|
|MaterialPruebaId|string|si|
|NoCorte|string|si|
|Fecha|DateTime|si|
|Grados|decimal|si|
|EstatusCorteId|long|si|
|Observaciones|string|si|
|EnUso|bool|si|


### Metodos
#### CreateMaterialDePruebaInput
Constructor

##### Parametros
|Nombre|Tipo|Opcional|
|---|---|---|
|input|MaterialDePruebaInput|no|



## CreateCorteInput
### Propiedades
|Nombre|Tipo|Opcional|
|---|---|---|
|MaterialPruebaId|string|si|
|Fecha|DateTime|si|
|Longitud_mm|decimal|si|
|Grados|decimal|si|
|EstatusCorteId|long|si|
|Observaciones|string|si|
|EnUso|bool|si|

### Metodos
#### CreateCorteInput
Constructor

##### Parametros
|Nombre|Tipo|Opcional|
|---|---|---|
|c|Corte|no|





## MaterialDePruebasSPInput
### Propiedades
|Nombre|Tipo|Opcional|
|---|---|---|
|MaterialPruebaId|long|si|
|EstandarPieza|string|si|
|PiezaId|Guid|si|
|ColadaId|Guid|si|
|MaterialId|Guid|si|
|Pieza|String|si|


### Metodos


## CreateMaterialDePruebaInput
### Propiedades

|Nombre|Tipo|Opcional|
|---|---|---|
|SistemaOrigen|int|si|
|PiezaId|string|si|
|Pieza|string|si|
|ColadaId|string|si|
|Colada|string|si|
|MaterialId|string|si|
|Material|string|si|
|ClienteId|string|si|
|Cliente|string|si|
|ProveedorId_MP|string|si|
|Proveedor_MP|string|si|
|TipoOPId|int|si|
|TipoOP|string|si|
|TipoQTCId|string|si|
|TipoQTC|string|si|
|LongitudArco_mm|decimal|si|
|Grados|decimal|si|
|Fecha|DateTime|si|
|DiametroExterior|decimal|si|
|DiametroInterior|decimal|si|
|Altura_mm|decimal|si|
|Observaciones|string|si|
|CondicionTT|string|si|

### Metodos
#### CreateMaterialDePruebaInput
Constructor
##### Parametros

|Nombre|Tipo|Opcional|
|---|---|---|
|input|MaterialDePrueba|no|
