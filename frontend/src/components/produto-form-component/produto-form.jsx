import TextField from '@material-ui/core/TextField';
import { Component } from 'react';
import { Fragment } from 'react';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
class ProdutoForm extends Component{
    render(){

        return(
            <>
                <form autoComplete="off">
                    <TextField id="prod-nome" label="Nome" variant="outlined" />
                    <TextField id="prod-descricao" label="Descrição" variant="outlined" />
                    <Select id="categoria" label="Categoria"  />
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        endIcon={<Icon>send</Icon>}
                            >
                        Send
                    </Button>
                </form>
            </>
        )
    }
}

export default ProdutoForm;