/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
    // frontendSidebar: [{type: 'autogenerated', dirName: 'docs/frontend'}]
    frontendSidebar: [
        {
            type: 'doc',
            id: 'frontend/intro',
            label: 'Introduction',
        },
        {
            type: 'category',
            label: 'Componentes',
            collapsed: false,
            items: [
                'frontend/components/Table',
                'frontend/components/Form'
            ]
        },{
            type: 'category',
            label: 'Inputs',
            collapsed: false,
            items: [
                'frontend/Inputs/Introduction',
                'frontend/Inputs/ThemeCheckboxElement',
                'frontend/Inputs/ThemeDatePickerElement',
                'frontend/Inputs/ThemeMultiFileInputElement',
                'frontend/Inputs/ThemeSelectElement',
                'frontend/Inputs/ThemeTextAreaElement',
                'frontend/Inputs/ThemeTextFieldElement',
            ]
        }
    ],
    backendSidebar: [
        {
            type: 'doc',
            id: 'backend/intro',
            label: 'Introduction'
        },{
            type: 'category',
            label: 'Controllers',
            items: [
                'backend/controllers/ClientesController',
                'backend/controllers/CortesController',
                'backend/controllers/CutupsController',
                'backend/controllers/DocumentosController',
                'backend/controllers/EstandaresController',
                'backend/controllers/ExperimentosController',
                'backend/controllers/MaterialesDePruebaController',
                'backend/controllers/MuestrasController',
                'backend/controllers/OperacionesPiezaLabController',
                'backend/controllers/OrdenesDeTrabajoController',
                'backend/controllers/PiezasController',
                'backend/controllers/ProveedoresController',
                'backend/controllers/PruebasController',
                'backend/controllers/TTsController',
            ]
        },{
            type: 'category',
            label: 'Models',
            items: [
                'backend/models/Cliente',
                'backend/models/Colada',
                'backend/models/Corte',
                'backend/models/CutUp',
                'backend/models/Documento',
                'backend/models/Estandar',
                'backend/models/Experimento',
                'backend/models/Material',
                'backend/models/MaterialDePrueba',
                'backend/models/Muestra',
                'backend/models/OperacionPiezaLab',
                'backend/models/OperacionPrueba',
                'backend/models/OrdenDeTrabajo',
                'backend/models/Pieza',
                'backend/models/Proveedor',
                'backend/models/Prueba',
                'backend/models/TT',
            ]
        },{
            type: 'category',
            label: 'DBAdapter',
            items: [
                'backend/DBAdapter/InputReference'
            ]
        }
    ]


  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
