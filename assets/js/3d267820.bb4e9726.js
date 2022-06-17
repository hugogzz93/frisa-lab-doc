"use strict";(self.webpackChunkfrisa_lab_doc=self.webpackChunkfrisa_lab_doc||[]).push([[6798],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),c=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,b=p["".concat(d,".").concat(m)]||p[m]||s[m]||o;return t?a.createElement(b,l(l({ref:n},u),{},{components:t})):a.createElement(b,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=p;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5225:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),l=["components"],i={},d="UseEditableTable",c={unversionedId:"frontend/Lib/UseEditableTable",id:"frontend/Lib/UseEditableTable",title:"UseEditableTable",description:"Este articulo explica como utilizar el hook useEditableTable para extender la funcionalidad de",source:"@site/docs/frontend/Lib/UseEditableTable.md",sourceDirName:"frontend/Lib",slug:"/frontend/Lib/UseEditableTable",permalink:"/frisa-lab-doc/docs/frontend/Lib/UseEditableTable",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/Lib/UseEditableTable.md",tags:[],version:"current",frontMatter:{},sidebar:"frontendSidebar",previous:{title:"ThemeTextFieldElement",permalink:"/frisa-lab-doc/docs/frontend/Inputs/ThemeTextFieldElement"}},u={},s=[{value:"Introduccion",id:"introduccion",level:2},{value:"Checklist",id:"checklist",level:2},{value:"Ejemplo",id:"ejemplo",level:2}],p={toc:s};function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"useeditabletable"},"UseEditableTable"),(0,o.kt)("p",null,"Este articulo explica como utilizar el hook ",(0,o.kt)("inlineCode",{parentName:"p"},"useEditableTable")," para extender la funcionalidad de\n",(0,o.kt)("a",{parentName:"p",href:"/docs/frontend/components/Table"},"Table")," con el objetivo de hacer tablas con inputs."),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/hugogzz93/anlab-front/blob/11fac959f4360160fa7791d431f6ae42a6f17195/src/lib/UseEditableTable.jsx"},"Codigo Fuente")),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Es necesario entender como funciona ",(0,o.kt)("a",{parentName:"p",href:"/docs/frontend/components/Table"},"Table")," para poder aprovechar este hook."))),(0,o.kt)("h2",{id:"introduccion"},"Introduccion"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useEditableTable")," es un hook que permite crear tablas con filas de campos."),(0,o.kt)("p",null,"El componente permite agregar dos llaves mas a ",(0,o.kt)("a",{parentName:"p",href:"/docs/frontend/components/Table#columnobject"},"ColumnObject")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parametro"),(0,o.kt)("th",{parentName:"tr",align:null},"Tipo"),(0,o.kt)("th",{parentName:"tr",align:null},"Opcional"),(0,o.kt)("th",{parentName:"tr",align:null},"Comentarios"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"editableFn"),(0,o.kt)("td",{parentName:"tr",align:null},"({originalData: any, field: ",(0,o.kt)("a",{parentName:"td",href:"https://react-hook-form.com/api/usecontroller/controller"},"ControllerReturn"),", formState: ",(0,o.kt)("a",{parentName:"td",href:"https://react-hook-form.com/api/useform/formstate"},"useFormState"),"}) => React.FC"),(0,o.kt)("td",{parentName:"tr",align:null},"si"),(0,o.kt)("td",{parentName:"tr",align:null},"OriginalData contiene el numero de fila nueva")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"defaultValue"),(0,o.kt)("td",{parentName:"tr",align:null},"({originalData: any}) => any"),(0,o.kt)("td",{parentName:"tr",align:null},"si"),(0,o.kt)("td",{parentName:"tr",align:null},"El valor por defecto que debe tener la columna de esta fila")))),(0,o.kt)("p",null,"Normalmente una columna definida por ",(0,o.kt)("a",{parentName:"p",href:"/docs/frontend/components/Table#columnobject"},"ColumnObject")," despliega el contenido de la funcion render, si no existe utiliza la funcion valueFn.\n",(0,o.kt)("inlineCode",{parentName:"p"},"editableFn")," tendra precedencia sobre ambos cuando se trata de una columna nueva."),(0,o.kt)("h2",{id:"checklist"},"Checklist"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Llamar hook"),(0,o.kt)("li",{parentName:"ol"},"Agregar ",(0,o.kt)("inlineCode",{parentName:"li"},"formMethods")," recibida del hook a la configuracion de la tabla"),(0,o.kt)("li",{parentName:"ol"},"Agregar ",(0,o.kt)("inlineCode",{parentName:"li"},"editableFn")," a los campos que se desean editables."),(0,o.kt)("li",{parentName:"ol"},"Agregar botones para agregar o eliminar filas"),(0,o.kt)("li",{parentName:"ol"},"Agregar boton y funcion de ",(0,o.kt)("inlineCode",{parentName:"li"},"onSubmit"),", utilizando ",(0,o.kt)("inlineCode",{parentName:"li"},"handleSubmit")," del hook."),(0,o.kt)("li",{parentName:"ol"},"Agregar ",(0,o.kt)("inlineCode",{parentName:"li"},"overrideRows")," a las filas enviadas al componente de ",(0,o.kt)("inlineCode",{parentName:"li"},"Table")),(0,o.kt)("li",{parentName:"ol"},"Mandar la configuracion dentro de una instancia de ",(0,o.kt)("inlineCode",{parentName:"li"},"EditableTableConfig"))),(0,o.kt)("h2",{id:"ejemplo"},"Ejemplo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"\nimport { useEditableTable, EditableTableConfig } from 'lib'\n/*...*/\nconst MyTable = (rowData) => {\n\n    const {addNewRow, deleteNewRow, formMethods, overrideRows, handleSubmit} = useEditableTable()\n\n    const onRowSubmit = (values) => {\n        ServerApi.post(values)\n    }\n\n\n    const onRowSubmit = (values)  => {\n        debugger\n        console.log(values)\n    }\n\n    const configuration = {\n        formMethods,\n        header: {\n            id: 'list-materiales-prueba',\n            idColumn: 'id', getId: d => d.id,\n            tableActions: [\n                (row) => (\n                    <button onClick={addNewRow}>Add new</button>\n                )\n            ]\n\n        }\n        columns: [\n            {\n                id: 'name'\n                valueFn: d => d.name,\n                label: 'Nombre',\n                editableFn: ({field}) => (\n                    <input type='text' value={field.value} name={field.name} onChange={field.onChange}/>\n                )\n            },\n            {\n                id: 'name'\n                render: d => (\n                    <div className='special-text'>{d.lastName}</div>\n                )\n                label: 'Apellido',\n                defaultValue: 'Gonzalez',\n                editableFn: ({field}) => (\n                    <input type='text' value={field.value} name={field.name} onChange={field.onChange}/>\n                )\n            },\n            {\n                id: 'actions',\n                render: d => (\n                    <a href={`edit/person/{d.id}`}><button>Edit</button></a>\n                ),\n                editableFn: ({originalData}) => (\n                    <>\n                        <button onClick={() => handleSubmit(originalData, onRowSubmit)}>Submit</button>\n                        <button onClick={() => deleteNewRow(originalData)}>Remove Row</button>\n                    </>\n                )\n            }\n\n\n        ]\n    }\n\n    return (\n        <Table\n            rowData={overrideRows(rowdata)}\n            configuration={new EditableTableConfig(configuration)}\n        />\n    )\n}\n\n/*...*/\n")))}m.isMDXComponent=!0}}]);