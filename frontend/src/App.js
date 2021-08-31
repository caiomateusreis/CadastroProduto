import { Fragment } from 'react';
import './App.css';
import './components/categoria-form-component'
import CategoriaForm from './components/categoria-form-component';
import ProdutoForm from './components/produto-form-component/produto-form';
import Container from '@material-ui/core/Container';
function App() {
  return (
    <Fragment>
      <Container maxWidth="sm">
        <CategoriaForm/>
        <ProdutoForm/>
    </Container>
    </Fragment>
  );
}
export default App;
