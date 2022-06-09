"use strict";(self.webpackChunkfrisa_lab_doc=self.webpackChunkfrisa_lab_doc||[]).push([[3724],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,v=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(v,i(i({ref:t},l),{},{components:n})):a.createElement(v,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1991:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={},p="SPAdapter",d={unversionedId:"backend/spadapter",id:"backend/spadapter",title:"SPAdapter",description:"SpAdapter es la respuesta a la necesidad de utilizar unicamente stored procedures para comunicarse a la base de datos.",source:"@site/docs/backend/spadapter.md",sourceDirName:"backend",slug:"/backend/spadapter",permalink:"/frisa-lab-doc/docs/backend/spadapter",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/backend/spadapter.md",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"SPInput",id:"spinput",level:2},{value:"QueryAdapter",id:"queryadapter",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spadapter"},"SPAdapter"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"SpAdapter")," es la respuesta a la necesidad de utilizar unicamente stored procedures para comunicarse a la base de datos."))),(0,o.kt)("p",null,"Esta constituido por dos partes."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SPInput"),(0,o.kt)("li",{parentName:"ul"},"QueryAdapter")),(0,o.kt)("h2",{id:"spinput"},"SPInput"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"SPInput")," es una clase abstracta. ",(0,o.kt)("strong",{parentName:"p"},"Cuyo unico requerimento es inicializar su parametro ",(0,o.kt)("inlineCode",{parentName:"strong"},"SPName")),".\nCuando se inicializa una clase que herede ",(0,o.kt)("inlineCode",{parentName:"p"},"SPInput"),", se debe inicializar con el nombre del stored procedure que espera llamar."),(0,o.kt)("p",null,"Toda clase que herede de ",(0,o.kt)("inlineCode",{parentName:"p"},"SPInput")," puede convertir sus propiedades en parametros de sql.\nYa que cada stored procedure tiene una interfaz diferente, para evitar una explosion de codigo en tratar de codificar clases para cada\ninterfaz, ",(0,o.kt)("inlineCode",{parentName:"p"},"SPInput")," cuenta con atributos para sus propiedades. Cada propiedad puede utilizar el atributo ",(0,o.kt)("inlineCode",{parentName:"p"},"EnumerableFor")," para saber cuando enumerarse."),(0,o.kt)("p",null,"Por ejemplo,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-aspnet"},'public class CorteInput : SPInput {\n    [EnumerableFor("usp_getCortes,usp_getCortesForExperimento")]\n    public string? CorteId {get; set;}\n\n    [EnumerableFor("usp_getCortesForExperimento")]\n    public string? ExperimentoId {get; set;}\n\n    [EnumerableFor("usp_getCortes")]\n    public string? Estatus {get; set;}\n}\n\n/*...*/\n\nCorteInput input = new CorteInput {\n    SPName = "usp_getCortesForExperimento",\n    ExperimentoId = "22"\n};\n\n/*...*/\n\nstring rawSql = QueryAdapter.GetSqlQueryString(input); \n/*rawSql: "exec usp_getCortesForExperimento @ExperimentoId=22, @CorteId=NULL"*/\n\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Por convencion, los stored procedures que esperan filtar por columnas, no filtran por esa columna cuando se recibe NULL."))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Para saber mas sobre ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/attributes/"},"atributos")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Si se desea que no se enumere alguna propiedad, se debe utilizar el atributo ",(0,o.kt)("inlineCode",{parentName:"p"},"NotEnumerable"),".\n",(0,o.kt)("strong",{parentName:"p"},"Pero todas las propiedades de ",(0,o.kt)("inlineCode",{parentName:"strong"},"SPInput")," deben tener ",(0,o.kt)("inlineCode",{parentName:"strong"},"EnumerableFor")," o ",(0,o.kt)("inlineCode",{parentName:"strong"},"NotEnumerable"),".")))),(0,o.kt)("h2",{id:"queryadapter"},"QueryAdapter"),(0,o.kt)("p",null,"La unica responsabilidad de esta clase es convertir un ",(0,o.kt)("inlineCode",{parentName:"p"},"SPInput")," en codigo de sql y los resultados en ",(0,o.kt)("inlineCode",{parentName:"p"},"Modelos"),"\nCrea queries, y los lee, pero no se encarga de ejecutar los queries, esa responsabilidad es de los controladores.\nSon los controladores los que llaman a la base de datos utilizando los queries construidos por ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryAdapter"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-aspnet",metastring:'title="Controllers/MaterialesDePruebaController.cs"',title:'"Controllers/MaterialesDePruebaController.cs"'},"    [HttpGet]\n    public List<MaterialDePrueba> Read([FromQuery] MaterialDePruebaSPInput? spInput) {\n        string queryString = QueryAdapter.GetSqlQueryString(spInput);\n        var result = _context.SPCall<MaterialDePrueba>(\n                    queryString,\n                    QueryAdapter.GetMaterialDePruebaReader(spInput)\n                );\n        return result;\n    }\n")))}m.isMDXComponent=!0}}]);