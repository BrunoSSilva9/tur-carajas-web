import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { Home } from '../pages/Home/Home'
import { Questionario } from '../pages/Questionario/Questionario'
import { Roteiro } from '../pages/Roteiro/Roteiro'
import { Catalogo } from '../pages/Catalogo/Catalogo'
import { PerfilNegocio } from '../pages/PerfilNegocio/PerfilNegocio'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'questionario', element: <Questionario /> },
      { path: 'roteiro', element: <Roteiro /> },
      { path: 'catalogo', element: <Catalogo /> },
      { path: 'negocio/:id', element: <PerfilNegocio /> },
    ],
  },
])
