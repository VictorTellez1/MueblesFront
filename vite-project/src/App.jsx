import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Inicio from './paginas/Inicio'
import { Principal } from './layout/Principal'
import Productos from './paginas/Productos'
import Nosotros from './paginas/Nosotros'
import Blog from './paginas/Blog'
import Galeria from './paginas/Galeria'
import Contacto from './paginas/Contacto'
import NosotrosPagina from './paginas/NosotrosPagina'
import Tienda from './components/Tienda'
import EntradaBlog from './paginas/EntradaBlog'
import ProductosCategoria from './paginas/ProductosCategoria'
import './../src/index.css'

function App() {
  

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Principal/>}>
        <Route index element={<Inicio/>}/>
        <Route path="nosotros" element={<NosotrosPagina/>}/>
        <Route path="tienda" element={<Tienda/>}/>
        <Route path="blog" element={<Blog/>}/>
        <Route path="entrada-blog" element={<EntradaBlog/>}/>
        <Route path="galeria" element={<Galeria/>}/>
        <Route path="contacto" element={<Contacto/>}/>
        <Route path="/:categoria" element={<ProductosCategoria/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
