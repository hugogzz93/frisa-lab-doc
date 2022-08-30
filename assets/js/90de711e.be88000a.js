"use strict";(self.webpackChunkfrisa_lab_doc=self.webpackChunkfrisa_lab_doc||[]).push([[9334],{3905:function(n,e,a){a.d(e,{Zo:function(){return c},kt:function(){return p}});var t=a(7294);function r(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function o(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function l(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function s(n,e){if(null==n)return{};var a,t,r=function(n,e){if(null==n)return{};var a,t,r={},o=Object.keys(n);for(t=0;t<o.length;t++)a=o[t],e.indexOf(a)>=0||(r[a]=n[a]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)a=o[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(r[a]=n[a])}return r}var d=t.createContext({}),i=function(n){var e=t.useContext(d),a=e;return n&&(a="function"==typeof n?n(e):l(l({},e),n)),a},c=function(n){var e=i(n.components);return t.createElement(d.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},m=t.forwardRef((function(n,e){var a=n.components,r=n.mdxType,o=n.originalType,d=n.parentName,c=s(n,["components","mdxType","originalType","parentName"]),m=i(a),p=r,b=m["".concat(d,".").concat(p)]||m[p]||u[p]||o;return a?t.createElement(b,l(l({ref:e},c),{},{components:a})):t.createElement(b,l({ref:e},c))}));function p(n,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var d in e)hasOwnProperty.call(e,d)&&(s[d]=e[d]);s.originalType=n,s.mdxType="string"==typeof n?n:r,l[1]=s;for(var i=2;i<o;i++)l[i]=a[i];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4691:function(n,e,a){a.r(e),a.d(e,{assets:function(){return c},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return u}});var t=a(7462),r=a(3366),o=(a(7294),a(3905)),l=["components"],s={},d=void 0,i={unversionedId:"frontend/demo",id:"frontend/demo",title:"demo",description:"",source:"@site/docs/frontend/demo.md",sourceDirName:"frontend",slug:"/frontend/demo",permalink:"/frisa-lab-doc/docs/frontend/demo",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/demo.md",tags:[],version:"current",frontMatter:{}},c={},u=[],m={toc:u};function p(n){var e=n.components,a=(0,r.Z)(n,l);return(0,o.kt)("wrapper",(0,t.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"---Table","---Table":!0},"\nconst TableConfiguration = () => ({\n    header: {\n        id: 'list-materiales-prueba',\n        idColumn: 'id',\n        getId: d => d.id,\n        tableActions: []\n    }, \n    columns: [\n        {\n            id: 'name',\n            label: 'Name',\n            valueFn: d => d.name,\n        },{\n            id: 'lastName',\n            label: 'Apellido',\n            valueFn: d => d.lastName,\n        },{\n            id: 'city',\n            label: 'Ciudad',\n            valueFn: d => d.address.city,\n        },{\n            id: 'state',\n            label: 'Estado',\n            valueFn: d => d.address.state,\n        }\n    ]\n\n})\n\nconst sampleData = [\n    {\n        id: 1,\n        name: 'Hugo',\n        lastName: 'Gonzalez',\n        address: {\n            city: 'Monterrey',\n            state: 'Nuevo Leon',\n        }\n    },{\n        id: 2,\n        name: 'Marcelo',\n        lastName: 'Gonzalez',\n        address: {\n            city: 'Aguascalientes',\n            state: 'Aguascalientes',\n        }\n    }\n]\n export const Demo = () => {\n     return (\n         <div className=\"container mx-auto\">\n             <Table \n                 rowData={sampleData}\n                 configuration={TableConfiguration()}\n             />\n         </div>\n     )\n }\n\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"--useTableStateReducer","--useTableStateReducer":!0},"const TableConfiguration = ({dispatch, state}) => ({\n    header: {\n        id: 'list-materiales-prueba',\n        idColumn: 'id',\n        getId: d => d.name,\n        tableActions: []\n    }, \n    columns: [\n        {\n            id: 'select',\n            label: 'Marcar',\n            render: d => (\n                <ThemeCheckboxElement\n                    name='selected'\n                    value={d.selected}\n                    onChange={() => {\n                        dispatch({\n                        type: ACTIONS.SET,\n                        payload: {\n                            id: d.id,\n                            key: 'selected',\n                            value: !d.selected\n                        }\n                    })}}\n                />\n            )\n        },\n        {\n            id: 'name',\n            label: 'Name',\n            valueFn: d => d.name,\n        },{\n            id: 'lastName',\n            label: 'Apellido',\n            valueFn: d => d.lastName,\n        },{\n            id: 'city',\n            label: 'Ciudad',\n            valueFn: d => d.address.city,\n        },{\n            id: 'state',\n            label: 'Estado',\n            valueFn: d => d.address.state,\n        }\n    ]\n\n})\n export const Demo = () => {\n     const [state, dispatch] = useTableStateReducer()\n\n     useEffect(() => {\n         dispatch({type: ACTIONS.SET_ORIGINAL, payload: sampleData})\n     }, [sampleData])\n\n\n     const onSubmit = (state) => {\n         debugger\n     }\n\n     return (\n         <div className=\"container mx-auto\">\n             <Table \n                 rowData={state.current}\n                 configuration={TableConfiguration({state, dispatch})}\n             />\n            {state.changes?.length > 0 && (\n                <div className=\"my-2\">\n                    <Button onClick={() => onSubmit(state)}>Guardar Cambios</Button>\n                </div>\n            )}\n         </div>\n     )\n }\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"--editableTable nf","--editableTable":!0,nf:!0},"\n\nconst TableConfiguration = ({table}) => ({\n    header: {\n        id: 'list-materiales-prueba',\n        idColumn: 'id',\n        getId: d => d.id,\n        tableActions: []\n    }, \n    columns: [\n        {\n            id: 'name',\n            label: 'Name',\n            valueFn: d => d.name,\n            editableFn: ({name, label, value, onChange}) => (\n                    <input className='border border-1 border-slate-500' type='text' value={value} onChange={onChange}/>\n            )\n        },{\n            id: 'lastName',\n            label: 'Apellido',\n            valueFn: d => d.lastName,\n            editableFn: (props) => (\n                <ThemeTextFieldElement {...props}/>\n            )\n        },{\n            id: 'city',\n            label: 'Ciudad',\n            valueFn: d => d.address?.city,\n            editableFn: (props) => (\n                <div>\n                    <i class=\"fa-solid fa-list mx-2\"></i>\n                    <i class=\"fa-solid fa-list-ul\"></i>\n                </div>\n            )\n        },{\n            id: 'state',\n            label: 'Estado',\n            valueFn: d => d.address?.state,\n        },{\n            id: '',\n            label: 'Acciones',\n            valueFn: _ => '',\n            editableFn: (props) => {\n                debugger\n                return (\n                    <i className=\"fa-solid fa-cloud-arrow-up\" onClick={() => table.handleSubmit(props.originalData, (data) => {\n                        debugger\n                    })}></i>\n                )\n            }\n        }\n    ]\n\n})\n\n\nconst sampleData = [\n    {\n        id: 1,\n        name: 'Hugo',\n        lastName: 'Gonzalez',\n        address: {\n            city: 'Monterrey',\n            state: 'Nuevo Leon',\n        }\n    },{\n        id: 2,\n        name: 'Marcelo',\n        lastName: 'Gonzalez',\n        address: {\n            city: 'Aguascalientes',\n            state: 'Aguascalientes',\n        }\n    }\n]\n\nexport const Demo = () => {\n    const formMethods = useForm()\n    const table = useEditableTable({formMethods})\n\n    return (\n        <div className=\"container mx-auto\">\n            <Table \n                rowData={table.overrideRows(sampleData)}\n                configuration={new EditableTableConfig({...TableConfiguration({table}), formMethods})}\n            />\n            <Button onClick={table.addNewRow}>Add new Row</Button>\n        </div>\n    )\n}\n\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"---form","---form":!0},"\nconst sampleData = [\n    {\n        name: 'Hugo',\n        lastName: 'Gonzalez',\n        address: {\n            city: 'monterrey',\n            state: 'nuevoLeon',\n        }\n    },{\n        name: 'Marcelo',\n        lastName: 'Gonzalez',\n        address: {\n            city: 'aguascalientes',\n            state: 'aguascalientes',\n        }\n    }\n]\n\nconst FormConfiguration = () => ({\n    layout: {\n        type: 'grid',\n        cols: 12,\n        fieldLayout: [\n            {\n                id: 'name',\n                cols: 6\n            }, {\n                id: 'lastName',\n                cols: 6\n            },{\n                id: 'address.state',\n                cols: 6\n            },{\n                id: 'address.city',\n                cols: 6\n            }\n        ]\n    },\n    actions: [\n        {\n            render: () => (\n                <Button className='flex align-center' isLoading={false}>Guardar</Button>\n            )\n        }\n    ],\n    fields: [\n        {\n            id: 'name',\n            type: 'text',\n            label: 'Nombre',\n            onChange: ({event, formMethods}) => {\n                if(event.target.value.length <= 3)\n                    formMethods.setError('name', {type: 'Length', message: 'Muy Corto'})\n                else \n                    formMethods.clearErrors('name')\n            }\n        },{\n            id: 'lastName',\n            type: 'render',\n            label: 'Apellido',\n            render: ({onChange, value, label}) => {\n                return <input className='border border-1 border-slate-500' type=\"text\" value={value} onChange={onChange}/>\n            }\n        },{\n            id: 'address.state',\n            type: 'select',\n            label: 'Estado',\n            optionsFn: () => [\n                {value: 'nuevoLeon', label: 'Nuevo Leon'},\n                {value: 'aguascalientes', label: 'Aguascalientes'},\n            ]\n        },{\n            id: 'address.city',\n            type: 'select',\n            label: 'City',\n            optionsFn: () => [\n                {value: 'monterrey', label: 'Monterrey'},\n                {value: 'aguascalientes', label: 'Aguascalientes'},\n                {value: 'reynosa', label: 'Reynosa'},\n            ]\n        }\n    ]\n})\n\nexport const Demo = () => {\n\n    const onSubmit = (data) => {\n        debugger\n    }\n\n    return (\n        <div className=\"container mx-auto\">\n            <div className=\"bg-white p-4\">\n                <FormComponent\n                    data={{defaultValues: sampleData[0]}}\n                    onSubmit={onSubmit}\n                    configuration={FormConfiguration()}\n                />\n            </div>\n        </div>\n    )\n}\n\n")))}p.isMDXComponent=!0}}]);