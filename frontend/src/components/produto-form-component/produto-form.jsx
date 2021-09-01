import { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Produto from '../../models/produto';
import SelectCategoria from './produto-categoria-select.jsx'

class ProdutoForm extends Component{
    id;
    nome;
    descricao;
    categoria;
    handleid(event){
        this.id = event.target.value;
    }
    handlenome(event){
        this.nome = event.target.value;
    }
    handledescricao(event){
        this.descricao = event.target.value;
    }
    handlecategoria(event){
        this.categoria = event.target.value;
    }
    handlesubmit(event){
        event.stopPropagation();
        event.preventDefault();
        let produto = new Produto();
        produto.id = this.id;
        produto.nome = this.nome;
        produto.descricao = this.descricao;
        produto.categoria = document.getElementById("select").value
        this.props.create(produto);
        console.log(`Produto:${produto}`)
    }
    render(){
        return(
            <>
                <h1>Cadastro Produto</h1>
                <form autoComplete="off">
                <TextField 
                        id="prod-id" 
                        label="Id" 
                        variant="outlined" 
                        size="small"
                        onChange = {this.handleid.bind(this)}
                    />
                    <TextField 
                        id="prod-nome" 
                        label="Nome" 
                        variant="outlined" 
                        size="small"/>
                    <TextField 
                        id="prod-descricao" 
                        label="Descrição" 
                        variant="outlined" 
                        size="small" />
                    <Button

                        variant="contained"
                        color="primary"
                        size="small"
                        startIcon={<SaveIcon />}
                        >
                    </Button>

                </form>
            </>
        )
    }
}

export default ProdutoForm;