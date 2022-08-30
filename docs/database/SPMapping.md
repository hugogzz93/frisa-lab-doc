## uspL_Metalografia_ObtenerCarga_Metalografia
|Metalografia|Columna|
|---|---|
|DiasNegociados|"DiasNegociados"|
|CantidadMuestras|"CantMuestras"|
|Observaciones|"Observaciones"|
|Desviacion|"EstaDesviada"|
|PiezaId|"IdPieza"|
|STD|"Estandar"|
|Secuencia|"OrdenProceso"|
|DiasEstatus|"DiasEnEstatus"|
|EstaTarde|"EstaTarde"|
|Fecha|"FechaLlegada"|
        
|metalografia.Pieza|Columna|
|---|---|
|Id|"IdPieza"|
|ClavePieza|"Pieza"|
|EstandarId|"IdEstandar"|
        
|metalografia.Pieza.Estandar|Columna|
|---|---|
|Id|"IdEstandar"|
        
    
## uspL_Metalografia_BuscaResultado
|MetalografiaResultados|Columna|
|---|---|
|PiezaId|"PiezaId"|
|MetalografiaId|"PiezaId"|
|Spot|"Spot"|
|GranoMasFino|"Grano"|
|PorcentajeFino|"PctFino"|
|Average|"no tienen"|
|TipoMicroEstructura|"TipoMicroEstructura"|
|Observaciones|"Observaciones"|
|CondicionDeAtaque|"Condicion"|
|EsTitanio|"EsTitanio"|
|PctAlfa|"PctAlfa"|
|Ala|"Ala"|
|Id|"Id"|
        
    
## uspL_Metalografia_PiezaInfoAdicional
|MetalografiaDetalle|Columna|
|---|---|
|Id|"PiezaId"|
|ddlpieza|"Pieza"|
|noParte|"NumeroParte"|
|pieza|""|
|cliente|"Cliente"|
|peso|"PesoEmbarque"|
|ruta|"Ruta"|
          
        
    
## uspL_OTLab_SELECT_CorteMaterialPrueba
|Corte|Columna|
|---|---|
|Id|"CorteId"|
|MaterialDePruebaId|"MaterialPruebaId"|
|EnUso|"EnUso"|
|Estatus|"EstatusCorte"|
        
    
## uspL_ListadoMaterialPruebaCorte_Lab
|Corte|Columna|
|---|---|
|Id|"NoCorte"|
|MaterialDePruebaId|"MaterialPruebaId"|
|Fecha|"Fecha"|
|Longitud|"Longitud_mm"|
|Grados|"Grados"|
|Estatus|"EstatusCorte"|
|EstatusCorteId|"EstatusCorteId"|
|Observaciones|"Observaciones"|
|EnUso|"EnUso"|
|TTTerminados|"TTTerminados"|
        
    
 ## uspL_ConsultaTT
|TT|Columna|
|---|---|
|Receta|"Receta"|
|Operacion|"OperacionTT"|
|Temp_c|"TemperaturaSetPoint"|
|Temp_rampa_min|"TiempoRampa_min"|
|Temp_calentamiento_min|"tiempoCalentamiento_min"|
|Temp_sostenimiento_hr|"tiempoSostenimiento_hrs"|
|Medio_enfriamiento|"MedioEnfriamiento"|
|Temp_medio_enfriamiento|"TiempoEnfriamiento_min"|
        
    
 ## uspL_InformacionPieza_TratamientosTermicos
|TT|Columna|
|---|---|
|Secuencia|"Secuencia"|
|OrdenOperacion|"OrdenOperacion"|
|Operacion|"Operacion"|
|Receta|"Receta"|
        
    
 ## uspL_OTLab_SELECT_MaterialPruebaSinOTLab
|materialDePrueba|Columna|
|---|---|
|Id|"MaterialPruebaId"|
|PiezaId|"PiezaId"|
|DiasEnCarga|"DiasEnCarga"|
|Recibida|"Recibida"|
|NoEncontrada|"NoEncontrada"|
|Observaciones|"Observaciones"|
        
|materialDePrueba.Pieza|Columna|
|---|---|
|Id|"PiezaId"|
|ClavePieza|"Pieza"|
        
    
 ## uspL_MaterialPruebaProbetasconTTPendiente
        MaterialDePrueba|materialDePrueba|Columna|
|---|---|
|Id|"MaterialPruebaId"|
|PiezaId|"PiezaId"|
|CondicionTT|"CondicionTT"|
|DiasEnCarga|"DiasEnCarga"|
|Recibida|"Recibida"|
|NoEncontrada|"NoEncontrada"|
|Planta|"Planta"|
        
|materialDePrueba.Pieza|Columna|
|---|---|
|Id|"PiezaId"|
|ClavePieza|"Pieza"|
        
|materialDePrueba.Pieza.Material|Columna|
|---|---|
|Id|"MaterialId"|
|Name|"Material"|
        
    
 ## uspL_InventarioMaterialPrueba
|MaterialDePrueba|Columna|
|---|---|
|Id|1|
|PiezaId|2|
|CondicionTT|"CondicionTT"|
|GradosActuales|14|
|Fecha|15|
|ProveedorMPId|"ProveedorId_MP"|
|ProveedorMP|"Proveedor_MP"|
|DiametroInterior|"DiametroInterior"|
|DiametroExterior|"DiametroExterior"|
|LongitudActual|"LongitudArco_mm"|
|Altura|"Altura_mm"|
|Observaciones|"Observaciones"|
|NoEncontrada|"NoEncontrada"|
|Recibida|"Recibida"|
|Planta|"Planta"|
|EstatusId|"EstatusMaterialPruebaId"|
|UltimoOTLabId|"UltimoOTLabId"|
        
|materialDePrueba.Pieza|Columna|
|---|---|
|Id|2|
|ClavePieza|3|
|TipoQTC|"TipoQTC"|
|LongitudArco|"LongitudArco_mm"|
        
|materialDePrueba.Pieza.Colada|Columna|
|---|---|
|Code|"Colada"|
        
|materialDePrueba.Pieza.Material|Columna|
|---|---|
|Id|5|
|Name|6|
        
|materialDePrueba.Pieza.Cliente|Columna|
|---|---|
|Id|7|
|Name|8|
        
    
 ## uspL_OTLab_SELECT_PiezasValidar
|Pieza|Columna|
|---|---|
|Id|"PiezaId"|
|ClavePieza|"Pieza"|
|Activa|"Activa"|
|Estatus|"Estatus"|
        
    
 ## uspL_AdministracionMaterialPrueba_Pieza
|Pieza|Columna|
|---|---|
|Id|"PiezaId"|
|ClavePieza|"Pieza"|
|ColadaId|"ColadaId"|
|MaterialId|"MaterialId"|
|ClienteId|"ClienteId"|
|ProveedorMPId|"ProveedorId_MP"|
|TipoOP|"TipoOP"|
|TipoQTC|"TipoQTC"|
|TipoCalificacion|"TipoCalificacion"|
|LongitudArco|"LongitudArco_mm"|
|DiametroExterior|"DiametroExterior"|
|DiametroInterior|"DiametroInterior"|
|Altura|"Altura"|
|CondicionTT|"CondicionTT"|
|TTsTerminados|"TTsTerminados"|
|TieneProbeta|"TieneProbeta"|
        
|pieza.Colada|Columna|
|---|---|
|Id|"ColadaId"|
|Code|"Colada"|
        
|pieza.Material|Columna|
|---|---|
|Id|"MaterialId"|
|Name|"Material"|
        
|pieza.Cliente|Columna|
|---|---|
|Id|"ClienteId"|
|Name|"Cliente"|
        
|pieza.ProveedorMP|Columna|
|---|---|
|Id|"ProveedorId_MP"|
|Name|"Proveedor_MP"|
        
    
 ## uspL_Experimentos_ListadoExperimentos
|Experimento|Columna|
|---|---|
|Id|0|
|FechaAlta|1|
|Justificacion|"Justificacion"|
        
|experimento.ResumenMaterial|Columna|
|---|---|
|Name|2|
        
    
 ## uspL_Experimentos_listadoMuestras
|Muestra|Columna|
|---|---|
|Id|"MuestraId"|
|Descripcion|"DescripcionMuestra"|
        
    
 ## uspL_Experimentos_ListadoPruebas
|Prueba|Columna|
|---|---|
|Id|"PruebaId"|
|Tipo|"TipoPrueba"|
|Observaciones|"Observaciones"|
        
    
 ## uspL_Experimentos_listadoOperacionesPrueba
|OperacionPrueba|Columna|
|---|---|
|Id|"OperacionespruebaId"|
|TTOperation|"TTOperation"|
|TTTemp|"TTTemp"|
|TTHrsOp|"TTHrsOp"|
|TTMedioEnfriamiento|"TTMedioEnfriamiento"|
|QuimicaElemento|"QuimicaElemento"|
|MetalografiaAcero|"MetalografiaAcero"|
        
    
 ## uspL_Experimentos_ObtenerExperimentoByPK
|Experimento|Columna|
|---|---|
|Id|"ExperimentoId"|
|DiasEnEstatus|"DiasEnEstatus"|
|Justificacion|"Justificacion"|
|FechaAlta|"FechaAlta"|
|FechaRecepcion|"FechaRecepcion"|
|FechaEnvio|"FechaEnvio"|
|Costo|"Costo"|
|EstatusId|"EstatusID"|
|Estatus|"Estatus"|
|EstandarId|"EstandarID"|
|ResumenMaterialId|"ResumenMaterialID"|
|MaterialId|"ResumenMaterialID"|
|ProveedorId|"ProveedorID"|
|MotivoId|"MotivoId"|
|Motivo|"Motivo"|
|ClienteId|"ClienteId"|
|CutUp|"CutUp"|
        
|experimento.ResumenMaterial|Columna|
|---|---|
|Id|"ResumenMaterialID"|
|Name|"ResumenMaterial"|
        
|experimento.Material|Columna|
|---|---|
|Id|"MaterialID"|
        
|experimento.Estandar|Columna|
|---|---|
|Id|"EstandarID"|
|Codigo|"Estandar"|
        
|experimento.ResumenMaterial|Columna|
|---|---|
|Id|"ResumenMaterialID"|
|Name|"ResumenMaterial"|
        
|experimento.Material|Columna|
|---|---|
|Id|"MaterialID"|
|Name|"Material"|
        
|experimento.Proveedor|Columna|
|---|---|
|Id|"ProveedorID"|
|Name|"Proveedor"|
        
|experimento.Cliente|Columna|
|---|---|
|Id|"ClienteID"|
|Name|"Cliente"|
|Subsegmento|"Subsegmento"|
        
|experimento.Pieza|Columna|
|---|---|
|Id|"PiezaID"|
|ClavePieza|"Pieza"|
        
        
    
 ## uspL_queryDocuments
|Documento|Columna|
|---|---|
|Id|"DocumentID"|
|DocumentableId|"DocumentableId"|
|DocumentableType|"DocumentableType"|
|NombreDocumento|"NombreDocumento"|
|MimeType|"MimeType"|
        
    
 ## uspL_queryDocumentsByPK
|Documento|Columna|
|---|---|
|DocumentableId|"DocumentableId"|
|DocumentableType|"DocumentableType"|
|NombreDocumento|"NombreDocumento"|
|MimeType|"MimeType"|
|Data|"Documento"|
        
    
 ## uspL_queryDocumentsbyGuid
|Documento|Columna|
|---|---|
|DocumentableId|"DocumentableIdString"|
|DocumentableType|"DocumentableType"|
|NombreDocumento|"NombreDocumento"|
|MimeType|"MimeType"|
|Data|"Documento"|
        
    
 ## uspL_Experimentos_ObtenerExperimentos
|Experimento|Columna|
|---|---|
|Id|0|
|DiasEnEstatus|4|
|Estatus|5|
|Justificacion|"Justificacion"|
|FechaAlta|8|
|UsuarioAlta|9|
        
|experimento.ResumenMaterial|Columna|
|---|---|
|Name|2|
        
|experimento.Estandar|Columna|
|---|---|
|Codigo|1|
        
|experimento.Material|Columna|
|---|---|
|Name|3|
        
|experimento.Proveedor|Columna|
|---|---|
|Name|6|
        
    
 ## uspL_CutUps_ObtenerPiezasValidadasCutupsxEstandar
|Pieza|Columna|
|---|---|
|Id|"PiezaId"|
|ClavePieza|"Pieza"|
        
    
 ## uspL_CutUps_ObtenerPiezasValidadasCutups
|Pieza|Columna|
|---|---|
|CutUpValidadorId|"PiezaId_Cutup"|
|Id|"PiezaId"|
|ClavePieza|"Pieza"|
        
    
 ## uspL_Experimentos_PiezabyPkNombre
|Pieza|Columna|
|---|---|
|Id|"PiezaId"|
|ClavePieza|"Pieza"|
        
    
 ## uspL_CutUps_ConsultaPiezaCutup
|Pieza|Columna|
|---|---|
|Id|"PiezaId"|
        
    
 ## uspL_OTLab_InfoXPieza
|Pieza|Columna|
|---|---|
|Id|"PiezaId"|
|ClavePieza|"Pieza"|
|TipoQTC|"TipoQTC"|
|ResumenMaterial|"ResumenMaterial"|
        
    
 ## uspL_OTLab_SELECT_PiezasSinOTLab
|Pieza|Columna|
|---|---|
|Id|"PiezaId"|
|ClavePieza|"Pieza"|
|FechaEntrega|"FechaEntrega"|
|DiasEnEstatus|"DiasEnEstatus"|
|Secuencia|"Orden"|
        
    
 ## uspL_CutUps_ConsultaPiezaCutupbyEstandar
|Pieza|Columna|
|---|---|
|Id|"PiezaId"|
|ClavePieza|"Pieza"|
|ExperimentoId|"ExperimentoId"|
|Estatus|"EstatusActual"|
|FrecuenciaCutup|"FrecuenciaCutup"|
|FrecuenciaCutupPeriodica|"FrecuenciaCutupPeriodica"|
        
    
 ## uspL_OTLab_SELECT_PruebasbyPiezaid
|PruebaOTLab|Columna|
|---|---|
|Id|"PruebaId"|
|Tipo|"Prueba"|
|TipoId|"IdCatalogoPrueba"|
|Orientacion|"Orientacion"|
|Localizacion|"Localizacion"|
        
    
 ## uspL_OTLab_SELECT_PruebasbyPruebaid
|PruebaOTLab|Columna|
|---|---|
|Id|"PruebaId"|
|Tipo|"Prueba"|
|Orientacion|"Orientacion"|
|Localizacion|"Localizacion"|
        
    
 ## uspL_OTLab_SELECT_Pruebas
|PruebaOTLab|Columna|
|---|---|
|Id|"IdPrueba"|
|Tipo|"Prueba"|
|Orientacion|"Orientacion"|
|Localizacion|"Localizacion"|
        
    
 ## uspL_OTLab_SELECT_PruebasbyPruebaid_Dureza
|OperacionPruebaOTLab|Columna|
|---|---|
|Id|"subPruebaID"|
|PruebaOTLabId|"IdPrueba"|
|Escala_de_Dureza|"EscalaDureza"|
|Dureza_Min|"DurezaMinima"|
|Dureza_Max|"DurezaMaxima"|
        
    
 ## uspL_OTLab_SELECT_PruebasbyPruebaid_Impacto
|OperacionPruebaOTLab|Columna|
|---|---|
|Id|"subPruebaID"|
|PruebaOTLabId|"IdPrueba"|
|Orientacion_QTC|"Orientacion"|
|Posicion_QTC|"Posicion"|
|Temperatura|"Temperatura"|
|Energia_Min|"EnergiaMinima"|
|Energia_Avg|"EnergiaPromedio"|
|Expansion_Min|"ExpansionMinima"|
|Expansion_Avg|"ExpansionPromedio"|
|Corte_Min|"CorteMinimo"|
|Corte_Avg|"CortePromedio"|
        
    
 ## uspL_OTLab_SELECT_PruebasbyPruebaid_MetalografiaAlphaoAcero
|OperacionPruebaOTLab|Columna|
|---|---|
|Id|"subPruebaID"|
|PruebaOTLabId|"IdPrueba"|
|Orientacion_QTC|"Orientacion"|
|Posicion_QTC|"Posicion"|
|Magnificacion|"Magnificacion"|
|Observaciones|"Observaciones"|
        
    
 ## uspL_OTLab_SELECT_PruebasbyPruebaid_MetalografiaGrano
|OperacionPruebaOTLab|Columna|
|---|---|
|Id|"subPruebaID"|
|PruebaOTLabId|"IdPrueba"|
|Orientacion_QTC|"Orientacion"|
|Posicion_QTC|"Posicion"|
|Tipo_Microestructura|"Tipo"|
|Grano_Fino|"Fino"|
|Grano_Grueso|"Grueso"|
|AFA|"AFA"|
|Magnificacion|"Magnificacion"|
|ALA|"ALA"|
|OCC|"OCC"|
        
    
 ## uspL_OTLab_SELECT_PruebasbyPruebaid_Microlimpieza
|OperacionPruebaOTLab|Columna|
|---|---|
|Id|"subPruebaID"|
|PruebaOTLabId|"IdPrueba"|
|Metodo|"Categoria"|
|Thin|"Thin"|
|Heavy|"Heavy"|
        
    
 ## uspL_OTLab_SELECT_PruebasbyPruebaid_Quimica
|OperacionPruebaOTLab|Columna|
|---|---|
|Id|"subPruebaID"|
|PruebaOTLabId|"IdPrueba"|
|Elemento|"Elemento"|
|Porcentage_Min|"Minimo"|
|Porcentage_Max|"Maximo"|
        
    
 ## uspL_OTLab_SELECT_PruebasbyPruebaid_Ruptura
|OperacionPruebaOTLab|Columna|
|---|---|
|Id|"subPruebaID"|
|PruebaOTLabId|"IdPrueba"|
|Posicion_QTC|"Posicion"|
|Orientacion_QTC|"Orientacion"|
|Temperatura|"Temperatura"|
|Carga_MPa|"Carga"|
|Elongacion_Min|"ElongacionMinima"|
|Reduccion_Min|"RedMinima"|
|Terminacion_de_Prueba|"Terminacion"|
        
    
 ## uspL_OTLab_SELECT_PruebasbyPruebaid_Tension
|OperacionPruebaOTLab|Columna|
|---|---|
|Id|"subPruebaID"|
|PruebaOTLabId|"IdPrueba"|
|Posicion_QTC|"Posicion"|
|Orientacion_QTC|"Orientacion"|
|Temperatura|"Temperatura"|
|Elongacion_Min|"ElongacionMinima"|
|Elongacion_Max|"ElongacionMaxima"|
|Reduccion_Min|"ReduccionMinima"|
|Reduccion_Max|"ReduccionMaxima"|
|Cedencia_Max|"CedenciaMaxima"|
|Cedencia_Min|"CedenciaMinima"|
|Tension_Max|"TensionMaxima"|
|Tension_Min|"TensionMinima"|
        
    
 ## uspL_OTLab_SELECT_PruebasbyPruebaid_Termofluencia
|OperacionPruebaOTLab|Columna|
|---|---|
|Id|"subPruebaID"|
|PruebaOTLabId|"IdPrueba"|
|Posicion_QTC|"Posicion"|
|Orientacion_QTC|"Orientacion"|
|Temperatura|"Temperatura"|
|Carga_MPa|"Carga"|
|Elongacion_Max|"ElongacionMaxima"|
        
    
 ## uspL_OTLab_SELECT_PruebasbyPruebaid_TestCondition
|OperacionPruebaOTLab|Columna|
|---|---|
|Id|"subPruebaID"|
|PruebaOTLabId|"IdPrueba"|
|Operacion|"Operacion"|
|Temperatura_Min|"TemperaturaOperacionMinima"|
|Temperatura_Max|"TemperaturaOperacionMaxima"|
|Tolerancia_Temp|"TemperaturaOperacionTolerancia"|
|Tol_Tiempo_Min|"TiempoOperacionToleranciaMinima"|
|Tol_Tiempo_Max|"TiempoOperacionToleranciaMaxima"|
        
    
 ## uspL_Experimentos_ObtenerResumenMaterial
|Estandar|Columna|
|---|---|
|Id|"Estandarid"|
|Codigo|"Estandar"|
|ResumenMaterialId|"ResumenMaterialID"|
|MaterialId|"Materialid"|
|ClienteId|"ClienteId"|
        
|estandar.Cliente|Columna|
|---|---|
|Id|"ClienteId"|
|Name|"Cliente"|
|Subsegmento|"Subsegmento"|
        
|estandar.ResumenMaterial|Columna|
|---|---|
|Id|"ResumenMaterialID"|
|Name|"ResumenMaterial"|
        
|estandar.Material|Columna|
|---|---|
|Name|"Material"|
|Id|"Materialid"|
        
    
 ## uspL_Experimentos_ObtenerSubSegmentoCliente
|Subsegmento|Columna|
|---|---|
|Id|"SubsegmentoId"|
|Name|"Subsegmento"|
        
    
  ## uspL_OTLab_SELECT_OrdenesTrabajo
|OTLab|Columna|
|---|---|
|Id|"OTLabId"|
|FechaDeseada|"FechaDeseada"|
|FechaEnvio|"FechaEnvio"|
        
|otLab.CortesMaterialDePrueba|Columna|
|---|---|
|Id|"CorteId"|
|Estatus|"EstatusCorte"|
        );
    
 ## uspL_OTLab_SELECT_OTLabbyPK
|OTLab|Columna|
|---|---|
|Id|"OTLabId"|
|PiezaId|"PiezaId"|
|ProveedorId|"ProveedorId"|
|FechaEnvio|"FechaEnvio"|
|FechaDeseada|"FechaDeseada"|
|FechaLlegada|"FechaLlegada"|
|Notas|"Notas"|
|NumeroParteId|"NumeroParteId"|
|NumeroParte|"NumeroParte"|
|ColadaId|"ColadaId"|
|Colada|"Colada"|
|EstatusId|"EstatusId"|
|TipoQTC|"TipoQTC"|
|TipoCalificacion|"TipoCalificacion"|
        
|otLab.Proveedor|Columna|
|---|---|
|Id|"ProveedorId"|
|Name|"Proveedor"|
        
|otLab.Pieza|Columna|
|---|---|
|Id|"PiezaId"|
|ClavePieza|"Pieza"|
|TipoQTC|"TipoQTC"|
|ResumenMaterial|"ResumenMaterial"|
        
|otLab.Pieza.Estandar|Columna|
|---|---|
|Codigo|"Estandar"|
        
    
 ## uspL_OTLab_SELECT_CargaOTLab
|OTLab|Columna|
|---|---|
|Id|"OTLabId"|
|PiezaId|"PiezaLiderId"|
|EstatusId|"EstatusId"|
|Estatus|"Estatus"|
|FechaEnvio|"FechaEnvio"|
|DiasXVencer|"DiasXVencer"|
|DurezaCantPruebas|"DurezaCantPruebas"|
|ImpactoCantPruebas|"ImpactoCantPruebas"|
|MetalografiaAlphaCantPruebas|"MetalografiaAlphaCantPruebas"|
|MetalografiaGranoCantPruebas|"MetalografiaGranoCantPruebas"|
|MicrolimpiezaCantPruebas|"MicrolimpiezaCantPruebas"|
|QuimicaCantPruebas|"QuimicaCantPruebas"|
|RupturaCantPruebas|"RupturaCantPruebas"|
|TensionCantPruebas|"TensionCantPruebas"|
|TermofluenciaCantPruebas|"TermofluenciaCantPruebas"|
|TestCondicionCantPruebas|"TestCondicionCantPruebas"|
|Segmento|"Segmento"|
|Subsegmento|"Subsegmento"|
        
|otLab.Pieza|Columna|
|---|---|
|Id|"PiezaLiderId"|
|ClavePieza|"PiezaLider"|
        
|otLab.Proveedor|Columna|
|---|---|
|Name|"Proveedor"|
        
    
 ## uspL_OTLab_SELECT_CorteMaterialPruebanyOTLab
|Corte|Columna|
|---|---|
|Id|"CorteId"|
|NoCorte|"NoCorte"|
|MaterialDePruebaId|"MaterialPruebaId"|
|EnUso|"EnUso"|
|OTLabId|"OTLabId"|
|Estatus|"EstatusCorte"|
|EstatusCorteId|"EstatusCorteId"|
        
    
 ## uspL_OTLab_SELECT_PiezasValidarbyOTLabId
|Pieza|Columna|
|---|---|
|Id|"PiezaId"|
|ClavePieza|"NombrePieza"|
|Activa|"bActiva"|
|Estatus|"Estatus"|
        
    
 ## uspL_ResultadosOTLab_SELECT_Tension
|ResultadoPruebaOTLab|Columna|
|---|---|
|ResultadoValido|"bResultadoValido"|
|RequestsReplacement|"bEsReemplazo"|
|RetestId|"RetestId"|
|Id|"TensionId"|
|OTLabId|"OTLabId"|
|MaterialPruebaId|"MaterialPruebaId"|
|NoCorte|"NoCorte"|
|CorteId|"CorteId"|
|Elongacion_Real|"ElongacionReal_Pct"|
|Reduccion_Real|"ReduccionReal_Pct"|
|Tension_Real|"TensionReal_MPa"|
|Cedencia_Real|"CedenciaReal_Mpa"|
|Razon_de_Elongacion|"RazondeElongacion"|
			
		
 ## uspL_ResultadosOTLab_SELECT_Ruptura
|ResultadoPruebaOTLab|Columna|
|---|---|
|ResultadoValido|"bResultadoValido"|
|RequestsReplacement|"bEsReemplazo"|
|RetestId|"RetestId"|
|Id|"RupturaId"|
|OTLabId|"OTLabId"|
|MaterialPruebaId|"MaterialPruebaId"|
|NoCorte|"NoCorte"|
|CorteId|"CorteId"|
|Elongacion_Real|"ElongacionReal_Pct"|
|Reduccion_Real|"ReduccionReal_Pct"|
			
		
 ## uspL_ResultadosOTLab_SELECT_Impacto
|ResultadoPruebaOTLab|Columna|
|---|---|
|ResultadoValido|"bResultadoValido"|
|RequestsReplacement|"bEsReemplazo"|
|RetestId|"RetestId"|
|Id|"ImpactoId"|
|OTLabId|"OTLabId"|
|MaterialPruebaId|"MaterialPruebaId"|
|NoCorte|"NoCorte"|
|CorteId|"CorteId"|
|Energia_1_Real|"Energia1Real_J"|
|Energia_2_Real|"Energia2Real_J"|
|Energia_3_Real|"Energia3Real_J"|
|Energia_Avg_Real|"EnergiaAvgReal_J"|
|Exp_Real_1|"Exp1Real_in"|
|Exp_Real_2|"Exp2Real_in"|
|Exp_Real_3|"Exp3Real_in"|
|Corte_1_Real|"Corte1Real_Pct"|
|Corte_2_Real|"Corte2Real_Pct"|
|Corte_3_Real|"Corte3Real_Pct"|
			
		
 ## uspL_ResultadosOTLab_SELECT_Termofluencia
|ResultadoPruebaOTLab|Columna|
|---|---|
|ResultadoValido|"bResultadoValido"|
|RequestsReplacement|"bEsReemplazo"|
|RetestId|"RetestId"|
|Id|"TermofluenciaId"|
|OTLabId|"OTLabId"|
|MaterialPruebaId|"MaterialPruebaId"|
|NoCorte|"NoCorte"|
|CorteId|"CorteId"|
|Elongacion_Real|"ElongacionReal_Pct"|
|Horas_Real|"HorasReal"|
			
		
 ## uspL_ResultadosOTLab_SELECT_MetalografiaGrano
|ResultadoPruebaOTLab|Columna|
|---|---|
|ResultadoValido|"bResultadoValido"|
|RequestsReplacement|"bEsReemplazo"|
|RetestId|"RetestId"|
|Id|"MetalografiaGranoId"|
|OTLabId|"OTLabId"|
|MaterialPruebaId|"MaterialPruebaId"|
|NoCorte|"NoCorte"|
|CorteId|"CorteId"|
|Observaciones|"Observaciones"|
|Grano_Fino_Real|"GranoFinoReal"|
|Porcentage_Grano_Fino_Real|"PctGranoFinoReal"|
|AFA_Real|"AFAReal"|
|Porcentage_AFA_Real|"PctAFAReal"|
|Grano_Grueso_Real|"GruesoReal"|
|Porcentage_Grano_Grueso_Real|"PctGruesoReal"|
|ALA_Real|"ALAReal"|
|Porcentage_ALA_Real|"PctALAReal"|
|OCC_Real|"OCCReal"|
|Magnificiacion_Real|"MagnificacionReal"|
			
		
 ## uspL_ResultadosOTLab_SELECT_MetalografiaAlpha
|ResultadoPruebaOTLab|Columna|
|---|---|
|ResultadoValido|"bResultadoValido"|
|RequestsReplacement|"bEsReemplazo"|
|RetestId|"RetestId"|
|Id|"MetalografiaAlphaId"|
|OTLabId|"OTLabId"|
|MaterialPruebaId|"MaterialPruebaId"|
|NoCorte|"NoCorte"|
|CorteId|"CorteId"|
|Observaciones|"Observaciones"|
|Porcentage_Real|"PctReal"|
			
		
 ## uspL_ResultadosOTLab_SELECT_Dureza
|ResultadoPruebaOTLab|Columna|
|---|---|
|ResultadoValido|"bResultadoValido"|
|RequestsReplacement|"bEsReemplazo"|
|RetestId|"RetestId"|
|Id|"DurezaId"|
|OTLabId|"OTLabId"|
|MaterialPruebaId|"MaterialPruebaId"|
|NoCorte|"NoCorte"|
|CorteId|"CorteId"|
|Dureza_Real_Antes_de_TT|"DurezaRealantesdeTT"|
|Dureza_Real_Despues_de_TT|"DurezaRealdespuesdeTT"|
			
		
 ## uspL_ResultadosOTLab_SELECT_Quimica
|ResultadoPruebaOTLab|Columna|
|---|---|
|ResultadoValido|"bResultadoValido"|
|RequestsReplacement|"bEsReemplazo"|
|RetestId|"RetestId"|
|Id|"QuimicaId"|
|OTLabId|"OTLabId"|
|MaterialPruebaId|"MaterialPruebaId"|
|NoCorte|"NoCorte"|
|CorteId|"CorteId"|
|Porcentage_Real|"PctReal"|
			
		
 ## uspL_ResultadosOTLab_SELECT_Microlimpieza
|ResultadoPruebaOTLab|Columna|
|---|---|
|ResultadoValido|"bResultadoValido"|
|RequestsReplacement|"bEsReemplazo"|
|RetestId|"RetestId"|
|Id|"MicrolimpiezaId"|
|OTLabId|"OTLabId"|
|MaterialPruebaId|"MaterialPruebaId"|
|NoCorte|"NoCorte"|
|CorteId|"CorteId"|
|Thin_Real|"ThinReal"|
|Heavy_Real|"HeavyReal"|
			
		
 ## uspL_ResultadosOTLab_SELECT_TestCondicion
|ResultadoPruebaOTLab|Columna|
|---|---|
|ResultadoValido|"bResultadoValido"|
|RequestsReplacement|"bEsReemplazo"|
|RetestId|"RetestId"|
|Id|"TestCondicionId"|
|OTLabId|"OTLabId"|
|MaterialPruebaId|"MaterialPruebaId"|
|NoCorte|"NoCorte"|
|CorteId|"CorteId"|
|Temperatura_Real|"Temp_C"|
|Tiempo_Sostenimiento|"Operacion_Hrs"|
			
		
