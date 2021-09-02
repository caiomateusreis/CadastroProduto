import './App.css';
import './components/categoria-form-component'
import CategoriaForm from './components/categoria-form-component';
import ProdutoForm from './components/produto-form-component/produto-form';
import Repository from './repository/produto-repository'
import {ReactComponent as BoxIcon} from './assets/boxicon.svg';
import ProdutoTable from './components/produto-table-component/produto-table';
import { useState } from 'react';
function App(){
  let [categoriarepository] = useState (new Repository());
  let [produtorepository] = useState (new Repository())
    return (
        <section>
          <BoxIcon id="logo"/>
          <ProdutoForm produtorepository={produtorepository} categoriarepository={categoriarepository} />
          <CategoriaForm create={categoriarepository.create.bind(categoriarepository)}/>
          <ProdutoTable produtorepository={produtorepository}/>
        </section>
    );
  }
export default App;
