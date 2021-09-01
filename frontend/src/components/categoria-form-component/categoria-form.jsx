import TextField from '@material-ui/core/TextField';
import { Component } from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Categoria from '../../models/categoria';

class CategoriaForm extends Component{
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
        console.log("entrou")
        let categoria = new Categoria();
        categoria.id = this.id;
        categoria.nome = this.nome;
        categoria.descricao = this.descricao;
        this.props.create(categoria);
        console.log(categoria)
    }
    render(){
        return(
            <>
                <h1>Cadastro Categoria</h1>
                <form autoComplete="off" onSubmit={this.handlesubmit.bind(this)}>
                    <TextField 
                        id="cat-id" 
                        label="Id" 
                        variant="outlined" 
                        size="small"
                        onChange = {this.handleid.bind(this)}
                    />
                    <TextField 
                        id="cat-nome" 
                        label="Nome" 
                        variant="outlined" 
                        size="small"
                        onChange = {this.handlenome.bind(this)}
                    />
                    <TextField 
                        id="cat-descricao" 
                        label="Descrição" 
                        variant="outlined" 
                        size="small" 
                        onChange = {this.handledescricao.bind(this)}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="small"
                        startIcon={<SaveIcon />}
                        >
                        Save
                    </Button>
                </form>
            </>
        )
    }
}

export default CategoriaForm;