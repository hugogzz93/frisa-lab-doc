# SPAdapter

:::note
`SpAdapter` es la respuesta a la necesidad de utilizar unicamente stored procedures para comunicarse a la base de datos.
:::

Esta constituido por dos partes.
* SPInput
* QueryAdapter

## SPInput
`SPInput` es una clase abstracta. **Cuyo unico requerimento es inicializar su parametro `SPName`**.
Cuando se inicializa una clase que herede `SPInput`, se debe inicializar con el nombre del stored procedure que espera llamar.

Toda clase que herede de `SPInput` puede convertir sus propiedades en parametros de sql.
Ya que cada stored procedure tiene una interfaz diferente, para evitar una explosion de codigo en tratar de codificar clases para cada
interfaz, `SPInput` cuenta con atributos para sus propiedades. Cada propiedad puede utilizar el atributo [EnumerableFor](/Attributes#enumerablefor) para saber cuando enumerarse.

Por ejemplo,
```aspnet
public class CorteInput : SPInput {
    [EnumerableFor("usp_getCortes,usp_getCortesForExperimento")]
    public string? CorteId {get; set;}

    [EnumerableFor("usp_getCortesForExperimento")]
    public string? ExperimentoId {get; set;}

    [EnumerableFor("usp_getCortes")]
    public string? Estatus {get; set;}
}

/*...*/

CorteInput input = new CorteInput {
    SPName = "usp_getCortesForExperimento",
    ExperimentoId = "22"
};

/*...*/

string rawSql = QueryAdapter.GetSqlQueryString(input); 
/*rawSql: "exec usp_getCortesForExperimento @ExperimentoId=22, @CorteId=NULL"*/

```
:::info
Por convencion, los stored procedures que esperan filtar por columnas, no filtran por esa columna cuando se recibe NULL.
:::



:::note
Para saber mas sobre [atributos](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/attributes/)
:::

:::note
Si se desea que no se enumere alguna propiedad, se debe utilizar el atributo `NotEnumerable`.
**Pero todas las propiedades de `SPInput` deben tener `EnumerableFor` o `NotEnumerable`.**
:::

## QueryAdapter
La unica responsabilidad de esta clase es convertir un `SPInput` en codigo de sql y los resultados en `Modelos`
Crea queries, y los lee, pero no se encarga de ejecutar los queries, esa responsabilidad es de los controladores.
Son los controladores los que llaman a la base de datos utilizando los queries construidos por `QueryAdapter`.

```aspnet title="Controllers/MaterialesDePruebaController.cs"
    [HttpGet]
    public List<MaterialDePrueba> Read([FromQuery] MaterialDePruebaSPInput? spInput) {
        string queryString = QueryAdapter.GetSqlQueryString(spInput);
        var result = _context.SPCall<MaterialDePrueba>(
                    queryString,
                    QueryAdapter.GetMaterialDePruebaReader(spInput)
                );
        return result;
    }
```
