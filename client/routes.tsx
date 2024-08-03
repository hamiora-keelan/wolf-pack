import { createRoutesFromElements, Route } from 'react-router-dom';
import App from './components/App';
import Layout from './components/Layout';


const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<App />} />
  </Route>
);

export default routes;