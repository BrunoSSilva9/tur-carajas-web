import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { Home } from '../pages/Home/Home'
import { Questionario } from '../pages/Questionario/Questionario'
import { Roteiro } from '../pages/Roteiro/Roteiro'
import { Catalogo } from '../pages/Catalogo/Catalogo'
import { PerfilNegocio } from '../pages/PerfilNegocio/PerfilNegocio'
import { MeusRoteiros } from '../pages/MeusRoteiros/MeusRoteiros'
import { Perfil } from '../pages/Perfil/Perfil'
import { Eventos } from '../pages/Eventos/Eventos'
import { EventoDetalhe } from '../pages/Eventos/EventoDetalhe'

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
      { path: 'meus-roteiros', element: <MeusRoteiros /> },
      { path: 'perfil', element: <Perfil /> },
      { path: 'eventos', element: <Eventos /> },
      { path: 'eventos/:id', element: <EventoDetalhe /> },
    ],
  },
])
