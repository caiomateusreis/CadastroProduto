import './App.css';
import './components/categoria-form-component'
import { Component } from 'react';
import CategoriaForm from './components/categoria-form-component';
import ProdutoForm from './components/produto-form-component/produto-form';
import Repository from './repository/produto-repository'
import {ReactComponent as BoxIcon} from './assets/boxicon.svg';
import SelectCategoria from './components/produto-form-component/produto-categoria-select';
class App extends Component {
  categoriarepository;
  produtorepository;
  constructor(props){
    super(props);
    this.categoriarepository = new Repository();
    this.produtorepository = new Repository();
  }
  render(){
    return (
        <section>
          <BoxIcon id="logo"/>
          <ProdutoForm create={this.produtorepository.create.bind(this.produtorepository)}/>
          <SelectCategoria categoriarepository={this.categoriarepository}/>
          <CategoriaForm create={this.categoriarepository.create.bind(this.categoriarepository)}/>
        </section>
    );
  }
}
export default App;
