# Form
Este articulo explica como crear formularios utilizando el componente [`Form`]

---
[Codigo Fuente](https://github.com/hugogzz93/anlab-front/blob/master/src/components/Form/Form.jsx)

## Crear un Formulario
`Form` espera por lo menos **dos parametros, los campos y un callback a llamar cuando se ingrese el formulario**.

```jsx

const myConfig = {
    layout: {
        type: 'grid',
        cols: 12,
        fieldLayout: [
            {id: 'name', cols: 6},
            {id: 'gender', cols: 6},
            {id: 'birthDate', cols: 12},
        ]
    },
    actions: [
        {
            render: () => (
                <button>Guardar</button>
            )
        }
    ],
    fields: [
        {
            id: 'name',
            type: 'text',
            label: 'Nombre'
            rules: {
                required: true
            }
        },{
            id: 'birthDate',
            type: 'date',
            label: 'Fecha de Nacimiento',
        },{
            id: 'gender',
            type: 'select',
            label: 'Genero',
            optionsFn: () => [
                {label: 'Hombre', value: 'male'},
                {label: 'Mujer', value: 'female'},
            ]

        }
    ]
}

const MyForm = () => {
    const onSubmit = data => ServerAPI.saveData(data);

    return (
        <FormComponent
            onSubmit={onSubmit}
            configuration={myConfig}
        />
    )
}
```

## OnSubmit
`Form` espera una callback que llamar cuando se someta el formulario. Aqui es donde entra `onSubmit: (data: JSON) => void`.
Esta funcion recibira un JSON con la misma estructura determinada por los ids de los campos.
Si utilizamos como ejemplo esta estructura.

```jsx
const config = {
    layout: ...
    actions: ...
    fields: [
        {
            id: 'firstName'
            ...
        },
        {
            id: 'lastName',
            ...
        },
        {
            id: 'address.city',
            ...
        },{
            id: 'address.state'
            ...
        }
    ]
}
```

OnSubmit regresaria una estructura asi.
```json
{
    firstName: '...',
    lastName: '...',
    address: {
        city: '...',
        state: '...',
    }
}

```

:::info
Es muy comun que en la funcion enviada a **onSubmit** se haga procesamiento adicional,
como agregar el usuario con sesion activa al payload antes de enviarlo al servidor.
```jsx
const handleOnSubmit = (data) => {
    const payload = {
            ...data,
            currentUser: session.user.id,
            currentTime: moment().format('YYYY/MM/DD')
            firstName: 'Mr.' + data.firstName
        }

        ServerAPI.createUser(payload);
    }
```
:::

## Tipos de campos
Un formulario puede desplegar cualquiera de los siguentes campos.

* Text
* TextArea
* DatePicker
* MultiFile Input
* Select

## Default Values
Los datos que recibe el formulario es un JSON cuya forma se conforma a los **Ids** de los campos.

Tomando por ejemplo la siguiente configuracion.

```jsx
const myData = {
    name: 'Hugo',
    address: {
        city: 'Monterrey'
    }
}

const myConfig = {
    layout: ...
    actions: ...
    fields: [
        {
            id: 'name',
            type: 'text',
            label: 'Nombre'
        },
        {
            id: 'address.city'
            type: 'text',
            label: 'Ciudad'
        }

    ]

}

const MyForm = () => {
    /* ... */

    return (
        <FormComponent
            onSubmit={onSubmit}
            configuration={config}
            data={myData}
        />
    )
}
```

> Los campos saben de donde sacar su valor defecto por el id que tiene asignado.

El campo de nombre 'Hugo' como valor default y ciudad tendra 'Monterrey'.
Ciudad tiene como id `address.city` entonces sabe que su valor por defecto es `data.address.city`.

:::tip
El parametro data es especialmente util para formularios donde tu objetivo es **editar**, en vez de crear.
Ya que simplemente pasas el objeto original como data.
:::

## OnChange

> Todo

## Custom Layouts

> Todo

## API
### Configuration
El objeto `FormConfiguration` espera los siguientes parametros.

| Parametro | Tipo | Opcional | Descripcion |
|---|---|---|---|
|layout|[FormLayout](Form#formlayout)|no|Describe el tipo de estructura del formulario.|
|actions|[FormAction[]](Form#formaction)|no|Componentes que se desplegaran al pie del formulario, comunmente esta el boton para someter el formulario.|
|fields|[FieldObject[]](Form#fieldobject)|no|Describe los campos del formulario incluyendo el tipo, comportamiento y reglas respectivas.|

#### FormLayout
| Parametro | Tipo | Opcional | Descripcion |
|---|---|---|---|
|type|string = 'grid'|no|Describe el tipo de estructura del formulario. (Solo se ha implementado el tipo `grid`)|
|cols|int|no|Solo para tipo `grid` Cuantas columnas tendra el grid|
|fieldLayout|[FieldLayoutObject](Form#fieldlayoutobject)[]|no|Describe el orden de los campos y cuanto espacio tendra cada uno|

#### FieldLayoutObject
| Parametro | Tipo | Opcional | Descripcion |
|---|---|---|---|
|id|string|no|Identifica el campo que esta configurando, debe ser igual a un campo en `Configuration.fields`|
|cols|int|no|Identifica cuantas columnas tendra de espacio.|


#### FormAction
| Parametro | Tipo | Opcional | Descripcion |
|---|---|---|---|
|render|(void) => React.FunctionalComponent|no|Funcion para construir el componente que se desplegara|


#### FieldObject
| Parametro | Tipo | Opcional | Descripcion |
|---|---|---|---|
|id|string|no|Id del campo, util para vincularlo con [FieldLayoutObject](Form#fieldlayoutobject)|
|type|string = 'text' \| 'textarea' \| 'date' \| 'select' \| 'multi-file' |no|Tipo de input que aparecera|
|label|string|no|El encabezado del campo|
|rules|[RegisterOptions](https://react-hook-form.com/api/useform/register)|si|Reglas adicionales de validacion utilizando [react-hook-forms](https://react-hook-form.com)|
|optionsFn|SelectOption[]|type == 'select' ? si : no|Los campos con los que dispondra un select|
|display|boolean (default: true)|si|Determina si se debe de esconder el campo|
|onChange|({event: React.SyntheticEvent, data: FormData, formMethods: [UseFormOutput](https://react-hook-form.com/api/useform)} => void) |si| Para extender funcionalidad, se puede mandar un callback que se ejecuta cada vez que se cambia el campo. El callback tendra acceso al contexto del formulario.|
|readOnly|boolean (default: false)|si|Determina si el valor del campo se puede editar.|
|disabled|boolean (default: false)|si|Determina si el campo esta habliitado (La diferencia con readOnly es que cuando el campo esta desactivado, el valor no se envia al someter el formulario)|

