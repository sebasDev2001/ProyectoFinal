import './App.css';
import MenuOpciones from './paginas/MenuOpciones'
import PagCirculo from './paginas/PagCirculo';
import PagFactorial from './paginas/PagFactorial';
import PagTriangulo from './paginas/PagTriangulo';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PagFibonachi from './paginas/PagFibonachi';
import PagRectangulo from './paginas/PagRectangulo';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/circulo'>
            <PagCirculo/>
          </Route>
          <Route path='/rectangulo'>
            <PagRectangulo/>
          </Route>
          <Route path='/triangulo'>
            <PagTriangulo/>
          </Route>
          <Route path='/factorial'>
            <PagFactorial/>
          </Route>
          <Route path='/fibonacci'>
            <PagFibonachi/>
          </Route>
          <Route path='/'>
            <MenuOpciones/>
          </Route>
      </Switch>
     </div>
    </Router>
  )
}

export default App;