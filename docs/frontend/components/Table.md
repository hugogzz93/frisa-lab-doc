# Table
Este articulo explica como crear tablas para cualquier tipo de dato uilizando el componente [`Table`](https://github.com/hugogzz93/anlab-front/blob/master/src/components/Table/Table.jsx)

---

## Crear una Tabla
`Table` espera **dos parametro datos y configuracion** para poder leer ese JSON.
Los datos puede ser cualquier objeto, ya que la configuracion contiene la manera de leerlo.


```jsx

const data = [
    {
        name: 'Hugo', gender: 'Male',
        address: {
            city: 'Monterrey',
            country: 'Mexico'
        }

   },
    {
        name: 'Marcelo', gender: 'Male',
        address: {
            city: 'Delafield
            country: 'Wisconsin'
        }
   } 
]

const configuration = {
    headers: {
        id: 'list-people',
        idColumn: 'name',
        getId: row => row.name
    },
    columns: [
        {
            id: 'name',
            label: 'Nombre',
            valueFn: row => row.name
        },{
            id: 'city',
            label: 'Ciudad',
            valueFn: row => row.address.city
        }
    ]
}

const MyTable = () => (
    <Table
        rowData={data}
        configuration={config}
    />
)
```

## Crear una Tabla con Filtros

> Todo

## Crear una Tabla con Acciones

> Todo

## Avanzado


> Todo

## API
### Configuracion
El objeto `TableConfiguration` espera los siguientes parametros.

| Parametro | Tipo | Opcional | Descripcion |
|---|---|---|---|
|headers|[headerObject](Table#headerobject)|no|Contiene informacion para que la tabla se conforme al estandar de React de [agregar Id's a cada fila](https://reactjs.org/docs/lists-and-keys.html#keys).|
|columns|[columnObject[]](Table#columnobject)|no|Informa que columnas tendra la tabla, como obtener la informacion para las tablas y que desplegar.|

#### HeaderObject

| Parametro | Tipo | Opcional | Descripcion |
|---|---|---|---|
|id|string|no|Id de la tabla|
|idColumn|string|no|Id de cada fila en la tabla.|
|getId|(row: any) => string & number|no|Funcion que recibe un elemento de los datos (una fila) y regresa el id de la fila.
|tableActions|(row: any) => React.FunctionalComponent| si | Elementos que se agregan al encabezado de la tabla, por ejemplo, boton para exportar excel.|

#### ColumnObject

| Parametro | Tipo | Opcional | Descripcion |
|---|---|---|---|
|id|string|no|id de la columna, (puede ser diferente al de la fila)|
|label|string|no|Encabezado que saldra en la columna de la tabla|
|valueFn|(row: any) => string & number|no|Funcion que recibe la fila y regresa el dato correspondiente para la columna.|
|filterable|boolean|si (default: false)|Crea un elemento para filtrar sobre esta columna.|
|filterFn|({filterValue: string & number, dataValue: string & number}) => boolean|si|Funciona para validar si la fila es filtrada o no.|
|render|(row: any) => React.FunctionalComponent|si|Cuando se quiere sobreescribir el funcionamiento normal de lo que traera la celda|



