# UseEditableTable

Este articulo explica como utilizar el hook `useEditableTable` para extender la funcionalidad de
[Table](/docs/frontend/components/Table) con el objetivo de hacer tablas con inputs.

---
[Codigo Fuente](https://github.com/hugogzz93/anlab-front/blob/11fac959f4360160fa7791d431f6ae42a6f17195/src/lib/UseEditableTable.jsx)

:::danger
Es necesario entender como funciona [Table](/docs/frontend/components/Table) para poder aprovechar este hook.
:::

## Introduccion
`useEditableTable` es un hook que permite crear tablas con filas de campos.


El componente permite agregar dos llaves mas a [ColumnObject](/docs/frontend/components/Table#columnobject)

|Parametro|Tipo|Opcional|Comentarios|
|---|---|---|---|
|editableFn|({originalData: any, field: [ControllerReturn](https://react-hook-form.com/api/usecontroller/controller), formState: [useFormState](https://react-hook-form.com/api/useform/formstate)}) => React.FC|si|OriginalData contiene el numero de fila nueva |
|defaultValue|({originalData: any}) => any|si|El valor por defecto que debe tener la columna de esta fila|


Normalmente una columna definida por [ColumnObject](/docs/frontend/components/Table#columnobject) despliega el contenido de la funcion render, si no existe utiliza la funcion valueFn.
`editableFn` tendra precedencia sobre ambos cuando se trata de una columna nueva.

## Checklist
1. Llamar hook
2. Agregar `formMethods` recibida del hook a la configuracion de la tabla
3. Agregar `editableFn` a los campos que se desean editables.
4. Agregar botones para agregar o eliminar filas
5. Agregar boton y funcion de `onSubmit`, utilizando `handleSubmit` del hook.
6. Agregar `overrideRows` a las filas enviadas al componente de `Table`
7. Mandar la configuracion dentro de una instancia de `EditableTableConfig`



## Ejemplo

```jsx

import { useEditableTable, EditableTableConfig } from 'lib'
/*...*/
const MyTable = (rowData) => {

    const {addNewRow, deleteNewRow, formMethods, overrideRows, handleSubmit} = useEditableTable()

    const onRowSubmit = (values) => {
        ServerApi.post(values)
    }


    const onRowSubmit = (values)  => {
        debugger
        console.log(values)
    }

    const configuration = {
        formMethods,
        header: {
            id: 'list-materiales-prueba',
            idColumn: 'id', getId: d => d.id,
            tableActions: [
                (row) => (
                    <button onClick={addNewRow}>Add new</button>
                )
            ]

        }
        columns: [
            {
                id: 'name'
                valueFn: d => d.name,
                label: 'Nombre',
                editableFn: ({field}) => (
                    <input type='text' value={field.value} name={field.name} onChange={field.onChange}/>
                )
            },
            {
                id: 'name'
                render: d => (
                    <div className='special-text'>{d.lastName}</div>
                )
                label: 'Apellido',
                defaultValue: 'Gonzalez',
                editableFn: ({field}) => (
                    <input type='text' value={field.value} name={field.name} onChange={field.onChange}/>
                )
            },
            {
                id: 'actions',
                render: d => (
                    <a href={`edit/person/{d.id}`}><button>Edit</button></a>
                ),
                editableFn: ({originalData}) => (
                    <>
                        <button onClick={() => handleSubmit(originalData, onRowSubmit)}>Submit</button>
                        <button onClick={() => deleteNewRow(originalData)}>Remove Row</button>
                    </>
                )
            }


        ]
    }

    return (
        <Table
            rowData={overrideRows(rowdata)}
            configuration={new EditableTableConfig(configuration)}
        />
    )
}

/*...*/
```


