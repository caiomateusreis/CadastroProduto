import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Select from '@material-ui/core/Select';
import { useState } from 'react';
import Produto from '../../models/produto';

function ProdutoForm({produtorepository,categoriarepository}){
    let [categorialista, setcategorialista] = useState(categoriarepository.list());
    categoriarepository.sub(setcategorialista);
    let [lista, setlista] = useState(produtorepository.list());
    produtorepository.sub(setlista);

    return(
    <>
        <h1>Cadastro Produto</h1>
        <form autoComplete="off" onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        let model = new Produto()
            model.id = e.target.prodid.value;
            model.nome = e.target.prodnome.value;
            model.descricao = e.target.proddescricao.value;
            model.categoria = categorialista.find(l=> l.nome === document.getElementById("select1").value)
            produtorepository.create(model)
    }}>
        <TextField 
                id="prodid" 
                label="Id" 
                variant="outlined" 
                size="small"
            />
            <TextField 
                id="prodnome" 
                label="Nome" 
                variant="outlined" 
                size="small"
                />
            <TextField 
                id="proddescricao" 
                label="Descrição" 
                variant="outlined" 
                size="small" 
                />
                    <Select
                    id="select1"
                    native
                    >
                    {categorialista.map((l,i)=>{
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

export default ProdutoForm;