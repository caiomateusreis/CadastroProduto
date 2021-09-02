import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Categoria from '../../models/categoria';

function CategoriaForm({create}){
    return(
        <>
            <h1>Cadastro Categoria</h1>
            <form autoComplete="off" onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                let model = new Categoria()
                    model.id = e.target.catid.value;
                    model.nome = e.target.catnome.value;
                    model.descricao = e.target.catdescricao.value;
                create(model);
                console.log(model)

            }}>
                <TextField 
                    id="catid" 
                    label="Id" 
                    variant="outlined" 
                    size="small"
                />
                <TextField 
                    id="catnome" 
                    label="Nome" 
                    variant="outlined" 
                    size="small"
                />
                <TextField 
                    id="catdescricao" 
                    label="Descrição" 
                    variant="outlined" 
                    size="small" 
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

export default CategoriaForm;