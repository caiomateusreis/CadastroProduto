import TextField from '@material-ui/core/TextField';
import { Component } from 'react';
import { Fragment } from 'react';

class CategoriaForm extends Component{
    render(){

        return(
            <>
                <form autoComplete="off">
                    <TextField id="cat-nome" label="Nome" variant="outlined" />
                    <TextField id="cat-descricao" label="Descrição" variant="outlined" />
                </form>
            </>
        )
    }
}

export default CategoriaForm;