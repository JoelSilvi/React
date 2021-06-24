import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";

const Topic = () => {
  let { topic } = useParams();

  return (
    <div>
      <h4>{topic}</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
        officiis laboriosam, consequatur sunt possimus, rem natus dicta harum
        dolorem doloribus obcaecati id vitae ipsum veritatis molestiae itaque
        maxime ipsam asperiores.
      </p>
    </div>
  );
};

const ReactTopics = () => {
  // let match = useRouteMatch();
  // console.log(match);
  // 'path' nos permite construir rutas relativas <Route>, mientras que 'url' nos permite construir enlaces relativos <Link> o <NavLink>

  let { path, url } = useRouteMatch();
  return (
    <div>
      <h3>Temas de React</h3>
      <ul>
        <li>
          <Link to={`${url}/jsx`}>JSX</Link>
        </li>
        <li>
          <Link to={`${url}/props`}>Props</Link>
        </li>
        <li>
          <Link to={`${url}/estado`}>Estado</Link>
        </li>
        <li>
          <Link to={`${url}/componentes`}>Components</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h4>Elige un tema de React</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
            corporis error reprehenderit aperiam atque ea nisi ipsum quisquam
            quaerat sunt! Officia impedit repellat nostrum illo amet libero
            aspernatur alias facilis!
          </p>
        </Route>
        <Route path={`${path}/:topic`} component={Topic} />
      </Switch>
    </div>
  );
};

export default ReactTopics;
