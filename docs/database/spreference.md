## SP

### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|Columan|System_type_name|is_nullable|


## Funciones faltante
:::danger
Parece que no hay funcion para editar materiales de prueba, solo existe para crear.
:::
### Parametros
|Nombre|Tipo|Nullable|
|---|---|---|
|piezaId|string?|si|
|longitudActual|decimal?|si|
|gradosActuales|decimal?|si|
|diametroInterior|decimal?|si|
|diametroExterior|decimal?|si|
|altura|decimal?|si|
|condicionTT|string?|si|
|observaciones|string?|si|
|fecha|DateTime?|si|
|recibida|bool?|si|
|perdida|bool?|si|
|proveedorMP|string?|si|

## uspL_AdministracionMaterialPrueba_Pieza

### Parametros

|Nombre|Tipo|Nullable|
|---|---|---|
|PiezaId|UNIQUEIDENTIFIER|no|

:::danger
Falta Tipo Calificacion, para la pantalla de informacion pieza
:::
![Pantalla Informacion Pieza](/img/informacion_pieza.png)


### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|Pieza|varchar(300)|1|
|ColadaId|uniqueidentifier|1|
|Colada|nvarchar(300)|1|
|MaterialId|uniqueidentifier|1|
|Material|nvarchar(300)|1|
|ClienteId|uniqueidentifier|1|
|Cliente|varchar(500)|1|
|ProveedorId_MP|uniqueidentifier|1|
|Proveedor_MP|nvarchar(4000)|1|
|TipoOP|varchar(50)|1|
|TipoOPId|int|1|
|TipoQTC|varchar(300)|1|
|TipoQTCId|uniqueidentifier|1|
|LongitudArco_mm|float|1|
|CondicionTT|varchar(max)|1|
|TTsTerminados|bit|1|


## uspL_ConsultaTT

### Output

:::danger
Los datetimes deberian ser enteros, porque es cantidad de minutos.
:::

:::danger
Parece haber un error:
exec uspL_ConsultaTT @PiezaId='fa627d0f-a7cb-4ef5-be9a-02abd8355fa3'
Deberia de traer un resultado.

:::

|Nombre|Tipo|Nullable|
|---|---|---|
|Receta|bigint|1|
|OperacionTT|varchar(300)|1|
|TemperaturaSetPoint|float|1|
|TiempoRampa_min|datetime|1|
|tiempoCalentamiento_min|datetime|1|
|tiempoSostenimiento_hrs|float|1|
|MedioEnfriamiento|nvarchar(60)|1|
|TiempoEnfriamiento_min|datetime|1|


## uspL_Experimentos_ListadoExperimentos

### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|ExperimentoId|bigint|0|
|FechaAlta|datetime|1|
|ResumenMaterial|varchar(400)|1|


## uspL_Experimentos_ListaResumenesMaterial

### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|Planta|nvarchar(100)|1|
|Numero|nvarchar(100)|1|
|ResumenMaterialId|uniqueidentifier|0|
|Nombre|varchar(300)|1|
|Revision|varchar(100)|1|
|Material|varchar(300)|1|
|Estado|varchar(100)|1|


## uspL_Experimentos_LLenaPantallaCapturaResultadoExperimento

### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|ExperimentoId|bigint|0|
|Estatus|varchar(100)|1|
|Estandar|varchar(300)|1|
|ResumenMaterial|varchar(400)|1|
|Material|varchar(300)|1|
|Motivoid|int|1|
|FechaRecepcion|datetime|1|
|FechaAlta|datetime|1|
|UsuarioAlta|varchar(400)|1|
|Cliente|varchar(400)|1|
|Subsegmento|varchar(400)|1|


## uspL_Experimentos_ObtenerCliente

### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|clienteid|uniqueidentifier|1|
|Cliente|varchar(200)|1|


## uspL_Experimentos_ObtenerExperimentos

### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|ExperimentoId|bigint|0|
|Estandar|varchar(300)|1|
|ResumenMaterial|varchar(400)|1|
|Material|varchar(300)|1|
|DiasEnEstatus|int|1|
|Estatus|varchar(100)|1|
|Proveedor|varchar(400)|1|
|Justificacion|varchar(400)|1|
|FechaAlta|datetime|1|
|UsuarioAlta|varchar(400)|1|


## uspL_Experimentos_ObtenerMaterial

### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|Materialid|uniqueidentifier|1|
|Material|varchar(500)|1|


## uspL_Experimentos_ObtenerMotivo

### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|motivoid|int|0|
|motivo|varchar(100)|1|


## uspL_Experimentos_ObtenerSubSegmentoCliente

### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|subsegmentoid|uniqueidentifier|1|
|subsegmento|varchar(200)|1|


## uspL_Experimentos_ObtenerTipoPrueba

### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|PruebaId|int|0|
|Prueba|varchar(100)|1|


## uspL_Experimentos_ObtenerTipoPruebaDetalle

### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|NULL|int|1|
|PDetalle|varchar(100)|1|


## uspL_Expermientos_ObtenerResumenMaterial

### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|estandarid|varchar(100)|1|
|resumenmaterial|varchar(500)|1|


## uspL_InformacionPieza_PruebasLab

### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|Pieza|varchar(50)|1|
|Prueba|varchar(100)|1|
|Cantidad|int|1|
|IdOperacion|uniqueidentifier|1|
|IdPieza|uniqueidentifier|1|


## uspL_InformacionPieza_TratamientosTermicos

:::danger
Deberia traer datos para PiezaId=**fa627d0f-a7cb-4ef5-be9a-02abd8355fa3**, la unica pieza en el sistema.
No se si es porque no hay datos de prueba o por error de SP.
:::

### Parametros

|Nombre|Tipo|Nullable|
|---|---|---|
|PiezaId|UNIQUEIDENTIFIER|no|

### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|Secuencia|int|1|
|OrdenOperacion|int|1|
|Operacion|varchar(100)|1|
|Receta|bigint|1|


## uspL_InventarioMaterialPrueba

### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|SistemaOrigen|tinyint|1|
|MaterialPruebaId|bigint|0|
|PiezaId|uniqueidentifier|1|
|Pieza|nvarchar(300)|1|
|Colada|nvarchar(300)|1|
|MaterialId|uniqueidentifier|1|
|Material|nvarchar(300)|1|
|ClienteId|uniqueidentifier|1|
|Cliente|varchar(500)|1|
|ProveedorId_MP|uniqueidentifier|1|
|Proveedor_MP|nvarchar(4000)|1|
|TipoOP|varchar(50)|1|
|TipoQTC|varchar(300)|1|
|LongitudArco_mm|float|1|
|Grados|smallint|1|
|Fecha|datetime|1|
|CondicionTT|varchar(8000)|1|
|OTLab|nvarchar(max)|1|


## uspL_InventarioMaterialPrueba_Colada

### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|ColadaId|uniqueidentifier|1|
|Colada|nvarchar(300)|1|


## uspL_InventarioMaterialPrueba_Material

### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|MaterialId|uniqueidentifier|1|
|Material|nvarchar(300)|1|


## uspL_InventarioMaterialPrueba_Pieza

### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|PiezaId|uniqueidentifier|1|
|Pieza|nvarchar(300)|1|


## uspL_ActualizaMaterialPruebaCorte_Lab

:::danger
Deberia utilizar el id del corte para identificar cual corte editar.
:::

### Parametros

|Nombre|Tipo|Nullable|
|---|---|---|
|MaterialPruebaId|BIGINT|no|
|NoCorte|TINYINT|no|
|Fecha|DATETIME|no|
|Longitud_mm|FLOAT|no|
|Grados|SMALLINT|no|
|EstatusCorteId|smallint|no|
|Observaciones|VARCHAR(8000)|no|
|EnUso|BIT|no|


## uspL_GuardaMaterialPruebaCorte_Lab

:::danger
Deberia regresar el Id del nuevo corte
:::

### Parametros
|Nombre|Tipo|Nullable|
|---|---|---|
|MaterialPruebaId|BIGINT|no|
|Fecha|DATETIME|no|
|Longitud_mm|FLOAT|no|
|Grados|SMALLINT|no|
|EstatusCorteId|smallint|no|
|Observaciones|VARCHAR(8000)|no|
|EnUso|BIT|no|

## uspL_ListadoMaterialPruebaCorte_Lab

### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|MaterialPruebaId|bigint|0|
|NoCorte|tinyint|0|
|CorteId|varchar(101)|1|
|Fecha|datetime|1|
|Longitud_mm|float|1|
|Grados|float|1|
|EstatusCorte|varchar(50)|1|
|Observaciones|varchar(8000)|1|
|EnUso|bit|1|
|TTTerminados|bit|1|


## uspL_Select_tblEstatusCorte_Lab

### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|EstatusCorteId|smallint|0|
|EstatusCorte|varchar(50)|1|


## uspL_experimentos_ListadoMuestraPrueba

### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|Muestraid|int|1|
| Pruebas|Varchar(max)|1|
|Descripcion |Varchar(max)|1|


## uspL_Experimentos_ObtenerEstatusExperimento

### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|EstatusId|int|1|
|Estatus|varchar(100)|1|


## uspL_Experimentos_ObtenerProveedor

### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|ProveedorId_Mp|uniqueidentifier|0|
| Proveedor_MP|varchar(100)|0|
