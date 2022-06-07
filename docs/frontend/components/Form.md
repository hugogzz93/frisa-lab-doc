# Form
Este articulo explica como crear formularios utilizando el componente [`Form`](https://github.com/hugogzz93/anlab-front/blob/master/src/components/Form/Form.jsx)

---

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

## API
### Configuration
### Data
### OnSubmit
