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


:::danger
Faltan funciones para obtener catalogos de

* proveedores 
* clientes 
* motivos 

(por ejemplo en alta experimentos para elegir uno).
:::

## uspL_AdministracionMaterialPrueba_Pieza

### Parametros

|Nombre|Tipo|Nullable|
|---|---|---|
|PiezaId|UNIQUEIDENTIFIER|si|
|Pieza|varchar|si|

:::danger
Falta Tipo Calificacion, para la pantalla de informacion pieza
:::
![Pantalla Informacion Pieza](/img/informacion_pieza.png)


### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|PiezaId|Guid|no|
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

Trae los experimentos relacionados a un estandar o resumen material.

### Parameters
|Nombre|Tipo|Nullable|
|---|---|---|
|Estandar|Varchar(500)|si|
|ResumenMaterial|Varchar(500)|si|



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


## uspL_Experimentos_ObtenerExperimentoByPX

### Output
|Nombre|tipo|nullable|
|---|---|---|
|ExperimentoId|bigint|no|

### Output
|Nombre|tipo|nullable|
|---|---|---|
|ExperimentoId|bigint|0|
|Estandar|varchar(300)|1|
|EstandarID|Guid|1|
|ResumenMaterial|varchar(400)|1|
|ResumenMaterialID|Guid|1|
|MaterialID|Guid|1|
|Material|varchar(300)|1|
|DiasEnEstatus|int|1|
|EstatusID|Guid|1|
|Estatus|varchar(100)|1|
|ProveedorID|Guid|1|
|Proveedor|varchar(400)|1|
|Justificacion|varchar(400)|1|
|FechaAlta|datetime|1|
|UsuarioAlta|varchar(400)|1|
|FechaEnvio|datetime|1|
|Costo|money|1|
|Motivoid|Guid|1|
|Motivo|varchar|1|
|ClienteId|Guid|1|
|Cliente|varchar|1|

## uspL_Experimentos_ObtenerExperimentos

### Parameters
|Nombre|Tipo|Nullable|
|---|---|---|
|FechaInicio|date|no|
|FechaFin|date|no|

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

### Parametros
|Nombre|Tipo|Nullable|
|---|---|---|
|EstandarNum|Varchar(500)|no|
|ResumenMaterialId|Guid|no|


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

### Parametros
|Nombre|Tipo|Nullable|
|---|---|---|
|estandarNum|bigint|1|
|resumenMaterial|varchar|1|

### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|Estandarid|GUID|no|
|Estandar|varchar|no|
|ResumenMaterialID|GUID|no|
|ResumenMaterial|varchar|no|
|Materialid|GUID|no|
|Material|varchar|no|


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

### Parametros
|Nombre|Tipo|Nullable|
|---|---|---|
|MaterialPruebaId|bigint|no|
|EstandarPieza|Varchar(300)|no|
|MaterialId|UNIQUEIDENTIFIER|no|
|ColadaId|UNIQUEIDENTIFIER|no|

### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|PiezaId|uniqueidentifier|1|
|Pieza|nvarchar(300)|1|


## uspL_ActualizaMaterialPrueba

### Parametros
|Nombre|Tipo|Nullable|
|---|---|---|
|MaterialPruebaId|BIGINT|no|
|Grados|smallint|no|
|Fecha|datetime|no|
|DiametroExterior|float|no|
|DiametroInterior|float|no|
|Altura_mm|float|no|
|Observaciones|varchar(8000)|no|

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

## uspL_GuardaMaterialPrueba_Lab
### Parametros
|Nombre|Tipo|Nullable|
|---|---|---|
|SistemaOrigen|TINYINT|no|
|PiezaId|UNIQUEIDENTIFIER|no|
|Pieza|varchar(30)|no|
|ColadaId|UNIQUEIDENTIFIER|no|
|Colada|[nvarchar](300)|no|
|MaterialId|UNIQUEIDENTIFIER|no|
|Material|[nvarchar](300)|no|
|ClienteId|UNIQUEIDENTIFIER|no|
|Cliente|[varchar](500)|no|
|ProveedorId_MP|UNIQUEIDENTIFIER|no|
|Proveedor_MP|[nvarchar](4000)|no|
|TipoOPId|int|no|
|TipoOP|varchar(50)|no|
|TipoQTCId|UNIQUEIDENTIFIER|no|
|TipoQTC|varchar(300)|no|
|LongitudArco_mm|float|no|
|Grados|smallint|no|
|Fecha|datetime|no|
|DiametroExterior|float|no|
|DiametroInterior|float|no|
|Altura_mm|float|no|
|Observaciones|varchar(500)|no|
|CondicionTT|varchar(8000)|no|

## uspL_BorraMaterialPrueba_Lab

### Parametros
|Nombre|Tipo|Nullable|
|---|---|---|
|MaterialPruebaId|int|no|

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

### Parameters
|Nombre|Tipo|Nullable|
|---|---|---|
|ExperimentoId|Int|no|

### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|Muestraid|int|1|
|Pruebas|Varchar(max)|1|
|Descripcion |Varchar(max)|1|


## uspL_Experimentos_ObtenerEstatusExperimento

### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|EstatusId|int|1|
|Estatus|varchar(100)|1|


## uspL_Experimentos_ObtenerProveedor

### Parametros

|Nombre|Tipo|Nullable|
|---|---|---|
|Estandar|string|?|
|Pieza|string|?|

### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|ProveedorId_Mp|uniqueidentifier|0|
| Proveedor_MP|varchar(100)|0|


## uspL_Metalografia_ObtenerCarga_Metalografia

:::danger
No regresa ID de metalografia.
:::

### Parameters
|Nombre|Tipo|Nullable|
|-|-|-|
|Detenida|Bit|No|

### Output
|Nombre|Tipo|Nullable|
|-|-|-|
|Pieza|varchar(50)|si|
|Estandar|int|si|
|OrdenProceso|int|si|
|DiasNegociados|int|si|
|CantMuestras|int|si|
|Observaciones|varchar(max)|si|
|EstaDesviada|bit|si|
|IdPieza|uniqueidentifier|si|
|IdRevision|uniqueidentifier|si|
|IdEstandar|uniqueidentifier|si|
|IdProceso|uniqueidentifier|si|

## uspL_Metalografia_CargaResultado

### Paramertos
|Nombre|Tipo|Nullable|
|-|-|-|
|piezaid|uniqueidentifier|NULL|
|Pieza|nvarchar(300)|NULL|
|Spot|varchar(300)|NULL|
|PctAlfa|decimal(5,2)|NULL|
|Grano|decimal(5,2)|NULL|
|PctFino|decimal(5,2)|NULL|
|Ala|decimal(5,2)|NULL|
|TipoMicroEstructura|varchar(100)|NULL|
|Observaciones|varchar(500)|NULL|
|Condicion|varchar(500)|NULL|
|EsTitanio|Bit|NULL|
    
### Output

## uspL_Metalografia_PiezaInfoAdicional

### Parameters
|Nombre|Tipo|Nullable|
|---|---|---|
|PiezaId|Guid|No


## uspL_Metalografia_BuscaResultado
### Parameters
|Nombre|Tipo|Nullable|
|---|---|---|
|PiezaId|Guid|No


### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|PiezaId|uniqueidentifier|1|
|Pieza|nvarchar(300)|1|
|Spot|varchar(300)|1|
|PctAlfa|decimal(5|2)|
|Grano|decimal(5|2)|
|PctFino|decimal(5|2)|
|Ala|decimal(5|2)|
|TipoMicroEstructura|varchar(100)|1|
|Observaciones|varchar(500)|1|
|Condicion|varchar(500)|1|
|EsTitanio|bit|1|


## uspL_Metalografia_ObtenerCarga_Metalografia

### Parameters
|Nombre|Tipo|Nullable|
|---|---|---|
|Detenida|bit|no|


### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|Pieza|varchar(50)|1|
|Estandar|int|1|
|OrdenProceso|int|1|
|DiasNegociados|int|1|
|CantMuestras|int|1|
|Observaciones|varchar(max)|1|
|EstaDesviada|bit|1|
|IdPieza|uniqueidentifier|1|
|IdRevision|uniqueidentifier|1|
|IdEstandar|uniqueidentifier|1|
|IdProceso|uniqueidentifier|1|


## uspL_cutup_SelectWIPPiezaEstandard_lab

### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|NombrePieza|nvarchar(300)|1|


## uspL_Cutup_ValidaPiezaCutUp_lab

### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|NombrePieza|nvarchar(300)|1|
|ID|uniqueidentifier|0|
|NumeroPiezaOrden|int|1|
|NumeroPiezaEstandar|int|1|
|InfoGeneral|uniqueidentifier|1|
|Version|int|1|
|VersionEstandar|int|1|
|VersionOrdenProduccion|int|1|
|EstadoProducto|int|1|
|NumeroSerieCliente|nvarchar(300)|1|
|NumeroSerieClienteDirecto|nvarchar(300)|1|
|EstaEnEspera|bit|1|
|TipoProducto|int|1|
|MultiploHorizontal|int|1|
|MultiploVertical|int|1|
|EsProbeta|bit|1|
|EsCutup|bit|1|
|PreReceta|uniqueidentifier|1|
|Barra|uniqueidentifier|1|
|Colada|uniqueidentifier|1|
|EsReposicionPorRechazo|bit|1|
|IDSIF1|int|1|
|FechaEmbarquePieza|datetime|1|
|ComentariosCreacion|nvarchar(300)|1|
|Sistema|int|1|
|EsModificadaRevisarMetalurgia|bit|1|
|Herrramienta_dropOrm|uniqueidentifier|1|
|PorcentajeDeCostoProbetaVsPrecioPieza_dropOrm|float|1|
|AsignacionMP|uniqueidentifier|1|
|EsHerramienta|bit|1|
|NombrePieza|nvarchar(300)|1|
|PlantaAsignacionMP|uniqueidentifier|1|
|PiezaReferenciaAsignacionMP|uniqueidentifier|1|
|FueReplicadaPorTarea|bit|1|
|Nivel|bigint|1|
|FechaAlmacenamiento|datetime|1|
|EsSafetyStock|bit|1|
|DebeMuestrearMedidas|bit|1|
|MuestreoMedidas|bit|1|
|GrupoDesviacion|bigint|1|
|GrupoNCR|bigint|1|
|FechaEsCutUp|datetime|1|
|EsDevolucion|bit|1|
|CargaInicialSAP|bit|1|
|ID|uniqueidentifier|0|
|Devolucion|uniqueidentifier|1|
|Tipo|int|1|
|PesoFinalEmbarque|float|1|
|OperacionActual|uniqueidentifier|1|
|ProcesoActual|uniqueidentifier|1|
|OrdenProduccionReferencia|uniqueidentifier|1|
|OrdenProduccionActual|uniqueidentifier|1|
|RevisionEstandarActual|uniqueidentifier|1|
|RevisionEstandarReferencia|uniqueidentifier|1|
|CondicionesTexto|nvarchar(max)|1|
|TratamientoTermicoTexto|nvarchar(max)|1|
|MaquinadoTexto|nvarchar(max)|1|
|PNDTexto|nvarchar(max)|1|
|EstaDesactivadoGenerarDocumentosDesdeVault|bit|1|
|OptimisticLockField|int|1|
|GCRecord|int|1|
|ObjectType|int|1|
|OrdenProduccionInterna|uniqueidentifier|1|
|OrdenClienteProyectada|uniqueidentifier|1|
|ID|uniqueidentifier|0|
|ResumenEspecificacion|uniqueidentifier|1|
|NumeroMultiplosVerticales|int|1|
|NotasFactura|nvarchar(max)|1|
|NumeroMultiplosHorizontales|int|1|
|DiasConsignacion|int|1|
|SerializadoFisico|bit|1|
|EsConsignacion|bit|1|
|TipoSerializado|int|1|
|EsEspecificacionDificil|bit|1|
|NumeroParte|nvarchar(300)|1|
|RevisionNumeroParte|varchar(300)|1|
|ObservacionesIngenieria|nvarchar(max)|1|
|EsLeyendaCritica|bit|1|
|PrimeraInspeccion|uniqueidentifier|1|
|DocumentoMoM|uniqueidentifier|1|
|CageCode|nvarchar(max)|1|
|Aprobacion|uniqueidentifier|1|
|DibujoCOS|uniqueidentifier|1|
|DibujoClienteFrisa|uniqueidentifier|1|
|TipoPieza|uniqueidentifier|1|
|InfoGeneralLaboratorio|uniqueidentifier|1|
|InfoGeneralMateriaPrima|uniqueidentifier|1|
|InfoGeneralDimensiones|uniqueidentifier|1|
|InfoGeneralPeso|uniqueidentifier|1|
|InfoGeneralEmbarques|uniqueidentifier|1|
|UsuarioConfigurando|uniqueidentifier|1|
|Aplicacion|nvarchar(max)|1|
|AplicacionProducto|uniqueidentifier|1|
|DescripcionParte|nvarchar(max)|1|
|DocumentoCutUpPlan|uniqueidentifier|1|
|MoM|uniqueidentifier|1|
|RevisionResumenLegacy|varchar(300)|1|
|EsLoteFijoTT|bit|1|
|RevisionMoM|uniqueidentifier|1|
|DibujoMarcaje|uniqueidentifier|1|
|UsuarioCreador|uniqueidentifier|1|
|FechaCreacion|datetime|1|
|SeparacionEntreMultiplos|float|1|
|SeparacionEntreMultiplosVertical|float|1|
|SobreMaterial|float|1|
|DueñoDesarrolloProducto|uniqueidentifier|1|
|DueñoMetalurgia|uniqueidentifier|1|
|DueñoComercial|uniqueidentifier|1|
|LeyendaCritica|uniqueidentifier|1|
|CantidadRolados|int|1|
|FBS|int|1|
|EsCalculadoAlgoritmo|bit|1|
|OperacionMarcaje|uniqueidentifier|1|
|Contacto|uniqueidentifier|1|
|NombreContacto|varchar(300)|1|
|EsAutoLiberable|bit|1|
|SeguimientoProduccion|varchar(300)|1|
|SistemaMetricoDefault|int|1|
|ReduccionMinimaForja|float|1|
|DiseñoMadre|uniqueidentifier|1|
|LineaForja|uniqueidentifier|1|
|InfoGeneralCostos|uniqueidentifier|1|
|ObservacionesDibujante|nvarchar(max)|1|
|DiferenciaMinimaDurezasMilimetros|float|1|
|OptimisticLockField|int|1|
|GCRecord|int|1|
|CondicionEntrega|int|1|
|DocumentoPedido|uniqueidentifier|1|
|DibujoClientePrevioTT|uniqueidentifier|1|
|DibujoCotizacionForja|uniqueidentifier|1|
|ScanPlanUT|uniqueidentifier|1|
|ScanPlanPM|uniqueidentifier|1|
|ScanPlanLP|uniqueidentifier|1|
|DocumentoProcedimientoTT|uniqueidentifier|1|
|DibujoLocalizacionProbeta|uniqueidentifier|1|
|ProcedimientoInspeccionGeneral|uniqueidentifier|1|
|ProcedimientoInspeccionDimensional|uniqueidentifier|1|
|EsPiezaEspecial|bit|1|
|EsCodigoVerdeGarcia|bit|1|
|ComentariosImpresion|uniqueidentifier|1|
|DocumentoBOM|uniqueidentifier|1|
|DocumentoRFQ|uniqueidentifier|1|
|EsPiezaComplicadaMaquinados|bit|1|
|FechaBloqueo|datetime|1|
|PcBloqueo|varchar(300)|1|
|AplicacionBloqueo|varchar(100)|1|
|DocumentoEmpaque|uniqueidentifier|1|
|EsMediaLunaSimetrica|bit|1|
|MensajesForja|nvarchar(max)|1|
|Planta|uniqueidentifier|1|
|EsMaquila|bit|1|
|InfoGeneralHerramental|bigint|1|
|Componente|uniqueidentifier|1|
|HojaProcesoTT|uniqueidentifier|1|
|DibujoClienteCotizacion|uniqueidentifier|1|
|InfoGeneralDesarrolloProducto|uniqueidentifier|1|
|FechaUltimaActualizacionGeometrias|datetime|1|
|FechaUltimaActualizacionCostos|datetime|1|
|FueExpanderEliminadoManualmente|bit|1|
|TieneSobreExcesoCondicionEntrega|bit|1|
|ClasificacionProduccion|uniqueidentifier|1|
|EtapaProduccion|bigint|1|
|FechaCambioEtapaProduccion|datetime|1|
|TipoProducto|uniqueidentifier|1|
|DisposicionForjaAbierta|int|1|
|ComplejidadForja|int|1|
|ComplejidadMaquinado|int|1|
|ComplejidadMetalurgia|int|1|
|CantidadPrototipos|int|1|
|EsSpot|bit|1|
|EstaSeleccionadaLineaOpcional|bit|1|
|NoUsarRecubrimiento|bit|1|
|ImpresionPrecio|int|1|
|FormatoCertificado|int|1|
|TipoRecubrimiento|uniqueidentifier|1|
|ObservacionesLiberacionPiezas|nvarchar(max)|1|
|PuedeUsarMpAceriaFrisa|bit|1|
|FechaCreacionPiezas|datetime|1|
|FechaLiberacionPiezas|datetime|1|
|RequiereMPP|bit|1|
|InfoGeneralDnp|bigint|1|
|RevisionDibujoGeQuote|uniqueidentifier|1|
|DocumentoQualityPlan|uniqueidentifier|1|
|Reposicion|bit|1|
|EsReposicion|bit|1|
|OrdenAReponer|uniqueidentifier|1|
|EsPrioridadVentas|bit|1|
|ComplejidadProducto|int|1|
|MedidasFinalesIncluyenSeparacionVertical|bit|1|
|ObservacionesCliente|nvarchar(max)|1|
|TipoProductoProduccion|tinyint|1|
|NoRequiereTTDespuesdeForja|bit|1|
|EsAprobadoMetalurgia|bit|1|
|ParametrosMaquinadoModificados|bit|1|
|CostoMaqValidado|bit|1|
|DocumentoPM|uniqueidentifier|1|
|RevisionPlanManufactura|uniqueidentifier|1|
|Hornada|int|1|
|DocumentoEnvolvente|uniqueidentifier|1|
|ResumenEspecificacionParaImpresion|nvarchar(500)|1|
|SpecAdicionalUno|uniqueidentifier|1|
|SpecAdicionalDos|uniqueidentifier|1|
|DescripcionComponentes|varchar(300)|1|
|EsPiezaGrande|bit|1|
|CantidadPrototiposMetalurgia|int|1|
|FechaCreacionPiezasOriginal|datetime|1|
|ResumenEspecificacionNombre|varchar(500)|1|
|TituloResumenCertifica|nvarchar(500)|1|
|EsNadcap|bit|1|
|PlantillaProcesoCongelado|int|1|
|FixProcess|uniqueidentifier|1|
|PruebasMetalurgicas|uniqueidentifier|1|
|UsuarioRevisorStd|uniqueidentifier|1|
|DocumentoRevisionStd|uniqueidentifier|1|
|DueñoMaquinados|uniqueidentifier|1|
|DueñoCalidad|uniqueidentifier|1|
|DueñoCalidad2|uniqueidentifier|1|
|ProductoAeroespacial|bit|1|
|EsProyectoOG|bit|1|
|DiametroAgujero|float|1|
|NumeroAgujeros|int|1|
|DiametroAgujeroTrepanado|float|1|
|NumeroAgujerosTrepanados|int|1|
|NoProgramarBosch|bit|1|
|FechaUltimaActualizacionDeResumen|datetime|1|
|DibujoCADMaq|uniqueidentifier|1|
|InfoGeneralCostosLibrosAzules|uniqueidentifier|1|
|EsAlgoritmoTowers|bit|1|
|PesoAproximadoAlgoritmoTowers|float|1|
|DibujoPrecision|uniqueidentifier|1|
|EsExpeditado|bit|1|
|EsPEDForja|bit|1|
|EsPEDAceria|bit|1|
|NivelConfianzaSTD|int|1|
|CortarseEnCaliente|bit|1|
|ProcesaForjaMps|uniqueidentifier|1|
|LlevaMarcarAgujeros|bit|1|


## uspL_CutUps_ValidaPiezaEstandar

### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|estandar|varchar(300)|1|
|Pieza|varchar(500)|1|

## uspL_catProveedor 

### Parameters
|Nombre|Tipo|Nullable|descripcion|
|---|---|---|-|
|Estandar|Guid|si|Id del estandar|
|Pieza|Guid|si|Id de la pieza|

### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|ProveedorId|Guid|si|
|Proveedor|varchar|si|


## uspL_Experimentos_GuardaExperimento

### Parametros
|Nombre|Tipo|Nullable|Comentarios|
|---|---|---|
|Estandarid|uniqueidentifier|no|
|ResumenMaterialId|uniqueidentifier|no|
|Motivoid|int|no|
|Piezaid|uniqueidentifier|no|
|FechaAlta|Datetime|no|
|UsuarioAlta|Varchar(400)|no|
|Proveedorid|uniqueidentifier|no|
|Clienteid|uniqueidentifier|no|
|Subsegmento|Varchar(400)|no|
|cutUp|int|no|
|Justificacion|Varchar(400)|no|
|EstatusId|Int = 1|no|
|ExperimentoID|bigint=null|no|
|FechaEnvio|datetime|no|
|Costo|money|no|


## uspL_ConsultaTT

### Output
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

### Parametros
|Nombre|Tipo|Nullable|
|---|---|---|
|IdCliente|uniqueidentifier|no|

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

### Parametros
|Nombre|Tipo|Nullable|
|---|---|---|
|EstandarNum|Varchar|si|

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

### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|Secuencia|int|1|
|OrdenOperacion|int|1|
|Operacion|varchar(100)|1|
|Receta|bigint|1|


## uspL_InventarioMaterialPrueba

### Parametros
|Nombre|Tipo|Nullable|
|---|---|---|
|MaterialPruebaId|BIGINT|si|
|EstandarPieza|varchar(300)|si|
|PiezaId|UNIQUEIDENTIFIER|si|
|MaterialId|UNIQUEIDENTIFIER|si|
|ColadaId|UNIQUEIDENTIFIER|si|

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
|Proveedor_MP|varchar(100)|0|

## uspL_Experimentos_InsMuestra
### Parameters
### Output

##uspL_Experimentos_updMuestra
### Parameters
### Output

##uspL_Experimentos_delMuestra
### Parameters
### Output

##uspL_Experimentos_selectMuestra
### Parameters
### Output

##uspL_Experimentos_BorraMuestra
### Parameters
### Output

##uspL_Experimentos_ClonarMuestra
### Parameters
### Output

##uspL_Experimentos_GuardaMuestra
### Parameters
### Output

##uspL_Experimentos_GuardaMuestraPruebaDetalle
### Parameters
### Output

##uspL_experimentos_ListadoMuestraPrueba
### Parameters
### Output

## uspL_insDocuments

### Parameters
|DocumentableId|BIGINT|no|
|DocumentableType|VARCHAR(100)|no|
|NombreDocumento|VARCHAR(100)|no|
|MimeType|VARCHAR(100)|no|
|Documento|VARBINARY(MAX)|no|



## uspL_queryDocuments

### Parameters
|Nombre|Tipo|Nullable|
|---|---|---|
|DocumentableId|BIGINT|no|
|DocumentableType|VARCHAR(100)|no|


### Parameters
|Nombre|Tipo|Nullable|
|---|---|---|
|DocumentableId|BIGINT|no|
|DocumentableType|VARCHAR(100)|no|
|NombreDocumento|VARCHAR(100)|no|
|MimeType|VARCHAR(100)|no|
|Documento|VARBINARY(MAX)|no|


## uspL_OTLab_SELECT_CorteMaterialPrueba

### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|PiezaId|uniqueidentifier|1|
|MaterialPruebaId|bigint|0|
|NoCorte|tinyint|0|
|CorteId|varchar(101)|1|
|OTLabId|bigint|1|
|EnUso|int|0|


## uspL_OTLab_SELECT_OrdenesTrabajo

### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|OTLabId|bigint|0|
|FechaDeseada|datetime|1|
|FechaEnvio|datetime|1|
|Proveedor|nvarchar(4000)|1|
|CorteId|varchar(101)|1|


## uspL_OTLab_SELECT_PiezasValidar

### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|PiezaId|uniqueidentifier|1|
|Pieza|varchar(50)|1|
|Activa|int|0|
|Estatus|varchar(100)|1|


## uspL_OTLab_SELECT_Pruebas

### Output
|Nombre|Tipo|Nullable|
|---|---|---|
|PruebaId|int|1|
|Prueba|int|1|
|Orientacion|int|1|
|Localizacion|int|1|
