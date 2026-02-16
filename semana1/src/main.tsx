import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
import './clases/strings.ts'
import './clases/array.ts'
import './clases/objetos.ts'
import './clases/funciones.ts'
import './clases/arrays.ts'
import './clases/imports.ts'
import Bancos from './clases/Bancos.tsx'
import Hola from './clases/HolaMundo.tsx'
import Deporte from './Deporte.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Hola/>
  <Deporte deporte='Futbol' equipo='Tigres'/>
  <Bancos/>
  </StrictMode>,
)
