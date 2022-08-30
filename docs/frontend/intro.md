---
sidebar_position: 1
---
# Intro
## Overview

El modulo de laboratorio consiste principalmente en **dos tipos de componentes: formularios y tablas.**

La idea es que cada componente sea equipado con **suficiente funcionalidad para cumplir las necesidades
previstas para el modulo** y al mismo tiempo que sea facilmente **extendible** para poder adaptarse a necesidades
que surgan con el tiempo.


# Demo
```
import { Table, Button, FormComponent, ThemeTextFieldElement } from 'components'
import { useForm } from 'react-hook-form'
import { EditableTableConfig, useEditableTable } from 'lib'
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
        name: 'Hugo',
        lastName: 'Gonzalez',
        address: {
            city: 'Monterrey',
            state: 'Nuevo Leon',
        }
    },{
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



// const TableConfiguration = ({table}) => ({
//     header: {
//         id: 'list-materiales-prueba',
//         idColumn: 'id',
//         getId: d => d.id,
//         tableActions: []
//     }, 
//     columns: [
//         {
//             id: 'name',
//             label: 'Name',
//             valueFn: d => d.name,
//             editableFn: ({name, label, value, onChange}) => (
//                     <input className='border border-1 border-slate-500' type='text' value={value} onChange={onChange}/>
//             )
//         },{
//             id: 'lastName',
//             label: 'Apellido',
//             valueFn: d => d.lastName,
//             editableFn: (props) => (
//                 <ThemeTextFieldElement {...props}/>
//             )
//         },{
//             id: 'city',
//             label: 'Ciudad',
//             valueFn: d => d.address?.city,
//             editableFn: (props) => (
//                 <div>
//                     <i class="fa-solid fa-list mx-2"></i>
//                     <i class="fa-solid fa-list-ul"></i>
//                 </div>
//             )
//         },{
//             id: 'state',
//             label: 'Estado',
//             valueFn: d => d.address?.state,
//         },{
//             id: '',
//             label: 'Acciones',
//             valueFn: _ => '',
//             editableFn: (props) => {
//                 debugger
//                 return (
//                     <i className="fa-solid fa-cloud-arrow-up" onClick={() => table.handleSubmit(props.originalData, (data) => {
//                         debugger
//                     })}></i>
//                 )
//             }
//         }
//     ]

// })

const sampleDataEditableTable = [
    {
        name: 'Hugo',
        lastName: 'Gonzalez',
        address: {
            city: 'Monterrey',
            state: 'Nuevo Leon',
        },
    },{
        name: 'Marcelo',
        lastName: 'Gonzalez',
        address: {
            city: 'Aguascalientes',
            state: 'Aguascalientes',
        }
    }
]


// export const Demo = () => {
//     const formMethods = useForm()
//     const table = useEditableTable({formMethods})

//     return (
//         <div className="container mx-auto">
//             <Table 
//                 rowData={table.overrideRows(sampleData)}
//                 configuration={new EditableTableConfig({...TableConfiguration({table}), formMethods})}
//             />
//             <Button onClick={table.addNewRow}>Add new Row</Button>
//         </div>
//     )
// }

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
                return <input type="text" value={value} onChange={onChange}/>
            }
        },{
            id: 'address.state',
            type: 'select',
            label: 'Estado',
            optionsFn: () => [
                {id: 'nuevoLeon', label: 'Nuevo Leon'},
                {id: 'aguascalientes', label: 'Aguascalientes'},
            ]
        },{
            id: 'address.city',
            type: 'select',
            label: 'City',
            optionsFn: () => [
                {id: 'monterrey', label: 'Monterrey'},
                {id: 'aguascalientes', label: 'Aguascalientes'},
                {id: 'reynosa', label: 'Reynosa'},
            ]
        }
    ]
})

// export const Demo = () => {

//     const onSubmit = (data) => {
//         debugger

//     }

//     const defaultPerson = sampleData[0]

//     return (
//         <div className="container mx-auto">
//             <div class="bg-white p-4">
//                 <FormComponent
//                     onSubmit={onSubmit}
//                     configuration={FormConfiguration()}
//                 />
//             </div>
//         </div>
//     )

// }
```
