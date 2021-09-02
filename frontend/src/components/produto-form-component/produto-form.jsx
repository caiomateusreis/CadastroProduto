import { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Produto from '../../models/produto';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class ProdutoForm extends Component{
    id;
    nome;
    descricao;
    categoria;
    lista = [{"id" : 1, "nome" : "caio"},{"id" : 2, "nome" : "caio2"}]
    handleid(event){
        this.id = event.target.value;
    }
    handlenome(event){
        this.nome = event.target.value;
    }
    handledescricao(event){
        this.descricao = event.target.value;
    }
    handlesubmit(event){
        event.preventDefault();
        event.stopPropagation();
        let produto = new Produto();
        produto.id = this.id;
        produto.nome = this.nome;
        produto.descricao = this.descricao;
        produto.categoria = this.findcategoria(document.getElementById("select1").value)
        this.props.create(produto);
        console.log(produto)
    }

    findcategoria(nome){
        let model = this.lista.find(l => l.nome === nome)
        return model;
    }
    render(){
        return(
            <>
                <h1>Cadastro Produto</h1>
                <form autoComplete="off" onSubmit={this.handlesubmit.bind(this)}>
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
                        size="small"
                        onChange = {this.handlenome.bind(this)}
                        />
                    <TextField 
                        id="prod-descricao" 
                        label="Descrição" 
                        variant="outlined" 
                        size="small" 
                        onChange = {this.handledescricao.bind(this)}
                        />
                            <Select
                            id="select1"
                            native
                            >
                            {this.lista.map((l,i)=>{
                            return(
                                <option key={i} value={l.nome}>{l.nome}</option>
                                 )
                                }
                                )
                            }  
                            </Select>
                            
                    <Button
                        type="submit"
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