
```jsx ---Table

const TableConfiguration = () => ({
    header: {
        id: 'list-materiales-prueba',
        idColumn: 'id',
        getId: d => d.id,
        tableActions: []
    }, 
    columns: [
        {
            id: 'name',
            label: 'Name',
            valueFn: d => d.name,
        },{
            id: 'lastName',
            label: 'Apellido',
            valueFn: d => d.lastName,
        },{
            id: 'city',
            label: 'Ciudad',
            valueFn: d => d.address.city,
        },{
            id: 'state',
            label: 'Estado',
            valueFn: d => d.address.state,
        }
    ]

})

const sampleData = [
    {
        id: 1,
        name: 'Hugo',
        lastName: 'Gonzalez',
        address: {
            city: 'Monterrey',
            state: 'Nuevo Leon',
        }
    },{
        id: 2,
        name: 'Marcelo',
        lastName: 'Gonzalez',
        address: {
            city: 'Aguascalientes',
            state: 'Aguascalientes',
        }
    }
]
 export const Demo = () => {
     return (
         <div className="container mx-auto">
             <Table 
                 rowData={sampleData}
                 configuration={TableConfiguration()}
             />
         </div>
     )
 }

```



```jsx --useTableStateReducer
const TableConfiguration = ({dispatch, state}) => ({
    header: {
        id: 'list-materiales-prueba',
        idColumn: 'id',
        getId: d => d.name,
        tableActions: []
    }, 
    columns: [
        {
            id: 'select',
            label: 'Marcar',
            render: d => (
                <ThemeCheckboxElement
                    name='selected'
                    value={d.selected}
                    onChange={() => {
                        dispatch({
                        type: ACTIONS.SET,
                        payload: {
                            id: d.id,
                            key: 'selected',
                            value: !d.selected
                        }
                    })}}
                />
            )
        },
        {
            id: 'name',
            label: 'Name',
            valueFn: d => d.name,
        },{
            id: 'lastName',
            label: 'Apellido',
            valueFn: d => d.lastName,
        },{
            id: 'city',
            label: 'Ciudad',
            valueFn: d => d.address.city,
        },{
            id: 'state',
            label: 'Estado',
            valueFn: d => d.address.state,
        }
    ]

})
 export const Demo = () => {
     const [state, dispatch] = useTableStateReducer()

     useEffect(() => {
         dispatch({type: ACTIONS.SET_ORIGINAL, payload: sampleData})
     }, [sampleData])


     const onSubmit = (state) => {
         debugger
     }

     return (
         <div className="container mx-auto">
             <Table 
                 rowData={state.current}
                 configuration={TableConfiguration({state, dispatch})}
             />
            {state.changes?.length > 0 && (
                <div className="my-2">
                    <Button onClick={() => onSubmit(state)}>Guardar Cambios</Button>
                </div>
            )}
         </div>
     )
 }
```

```jsx --editableTable nf


const TableConfiguration = ({table}) => ({
    header: {
        id: 'list-materiales-prueba',
        idColumn: 'id',
        getId: d => d.id,
        tableActions: []
    }, 
    columns: [
        {
            id: 'name',
            label: 'Name',
            valueFn: d => d.name,
            editableFn: ({name, label, value, onChange}) => (
                    <input className='border border-1 border-slate-500' type='text' value={value} onChange={onChange}/>
            )
        },{
            id: 'lastName',
            label: 'Apellido',
            valueFn: d => d.lastName,
            editableFn: (props) => (
                <ThemeTextFieldElement {...props}/>
            )
        },{
            id: 'city',
            label: 'Ciudad',
            valueFn: d => d.address?.city,
            editableFn: (props) => (
                <div>
                    <i class="fa-solid fa-list mx-2"></i>
                    <i class="fa-solid fa-list-ul"></i>
                </div>
            )
        },{
            id: 'state',
            label: 'Estado',
            valueFn: d => d.address?.state,
        },{
            id: '',
            label: 'Acciones',
            valueFn: _ => '',
            editableFn: (props) => {
                debugger
                return (
                    <i className="fa-solid fa-cloud-arrow-up" onClick={() => table.handleSubmit(props.originalData, (data) => {
                        debugger
                    })}></i>
                )
            }
        }
    ]

})


const sampleData = [
    {
        id: 1,
        name: 'Hugo',
        lastName: 'Gonzalez',
        address: {
            city: 'Monterrey',
            state: 'Nuevo Leon',
        }
    },{
        id: 2,
        name: 'Marcelo',
        lastName: 'Gonzalez',
        address: {
            city: 'Aguascalientes',
            state: 'Aguascalientes',
        }
    }
]

export const Demo = () => {
    const formMethods = useForm()
    const table = useEditableTable({formMethods})

    return (
        <div className="container mx-auto">
            <Table 
                rowData={table.overrideRows(sampleData)}
                configuration={new EditableTableConfig({...TableConfiguration({table}), formMethods})}
            />
            <Button onClick={table.addNewRow}>Add new Row</Button>
        </div>
    )
}

```

```jsx ---form

const sampleData = [
    {
        name: 'Hugo',
        lastName: 'Gonzalez',
        address: {
            city: 'monterrey',
            state: 'nuevoLeon',
        }
    },{
        name: 'Marcelo',
        lastName: 'Gonzalez',
        address: {
            city: 'aguascalientes',
            state: 'aguascalientes',
        }
    }
]

const FormConfiguration = () => ({
    layout: {
        type: 'grid',
        cols: 12,
        fieldLayout: [
            {
                id: 'name',
                cols: 6
            }, {
                id: 'lastName',
                cols: 6
            },{
                id: 'address.state',
                cols: 6
            },{
                id: 'address.city',
                cols: 6
            }
        ]
    },
    actions: [
        {
            render: () => (
                <Button className='flex align-center' isLoading={false}>Guardar</Button>
            )
        }
    ],
    fields: [
        {
            id: 'name',
            type: 'text',
            label: 'Nombre',
            onChange: ({event, formMethods}) => {
                if(event.target.value.length <= 3)
                    formMethods.setError('name', {type: 'Length', message: 'Muy Corto'})
                else 
                    formMethods.clearErrors('name')
            }
        },{
            id: 'lastName',
            type: 'render',
            label: 'Apellido',
            render: ({onChange, value, label}) => {
                return <input className='border border-1 border-slate-500' type="text" value={value} onChange={onChange}/>
            }
        },{
            id: 'address.state',
            type: 'select',
            label: 'Estado',
            optionsFn: () => [
                {value: 'nuevoLeon', label: 'Nuevo Leon'},
                {value: 'aguascalientes', label: 'Aguascalientes'},
            ]
        },{
            id: 'address.city',
            type: 'select',
            label: 'City',
            optionsFn: () => [
                {value: 'monterrey', label: 'Monterrey'},
                {value: 'aguascalientes', label: 'Aguascalientes'},
                {value: 'reynosa', label: 'Reynosa'},
            ]
        }
    ]
})

export const Demo = () => {

    const onSubmit = (data) => {
        debugger
    }

    return (
        <div className="container mx-auto">
            <div className="bg-white p-4">
                <FormComponent
                    data={{defaultValues: sampleData[0]}}
                    onSubmit={onSubmit}
                    configuration={FormConfiguration()}
                />
            </div>
        </div>
    )
}

```
