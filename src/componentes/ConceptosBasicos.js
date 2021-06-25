import {
  BrowserRouter as Router,
  HashRouter,
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Acerca from "../pages/Acerca";
import Contacto from "../pages/Contacto";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import MenuConceptos from "./MenuConceptos";
import Usuario from "../pages/Usuario";
import Productos from "../pages/Productos";
import ReactTopics from "../pages/ReactTopics";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";

const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Hash Router</h2>
      <HashRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/acerca" component={Acerca} />
          <Route exact path="/contacto" component={Contacto} />
          <Route path="*" component={Error404} />
        </Switch>
      </HashRouter>
      <hr />
      <h2>Conceptos Básicos</h2>
      <Router>
        <MenuConceptos />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/acerca" component={Acerca} />
          <Route exact path="/contacto" component={Contacto} />
          <Route exact path="/usuario/:username" component={Usuario} />
          <Route exact path="/productos" component={Productos} />
          <Route exact path="/about">
            <Redirect to="/acerca" />
          </Route>
          <Route exact path="/contact">
            <Redirect to="/contacto" />
          </Route>
          <Route path="/react" component={ReactTopics} />
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/dashboard" component={Dashboard} /> */}
          <PrivateRoute exact path="/dashboard" component={Dashboard} />

          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    </div>
  );
};

{
  /* const ConceptosBasicos = () =>{
  return(
    <div>
      <h2>Conceptos Básicos</h2>
    <Router>
      <Switch>
      <Route exact path="/">
        <h3>Home</h3>
        <p>Bienvenid@s al tema de las Rutas en React</p>
      </Route>
      <Route exact path="/acerca">
        <Acerca/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto recusandae quidem aliquam ipsum vel culpa veniam atque impedit dolor perspiciatis ullam voluptas, deserunt reiciendis vero? Debitis enim a cupiditate.</p>
      </Route>
      <Route exact path="/contacto" component={Contacto}/>
      <Route exact path="/contacto" children={<><Contacto /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam laboriosam porro explicabo tempore numquam delectus laudantium quam sapiente suscipit omnis? Dolor aliquam recusandae, corrupti repudiandae provident voluptate quidem. Inventore, labore!</p></>}/>
      </Switch>
    </Router>
    </div>
  )
} */
}

export default ConceptosBasicos;
