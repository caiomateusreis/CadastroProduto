import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class SelectCategoria extends Component{
  state = { sub : [] }
  teste = "stringzada";
  componentDidMount(){
    this.props.categoriarepository.sub(this.selectupdate.bind(this))
  }

  componentWillUnmount(){
    this.props.categoriarepository.unsub(this.selectupdate.bind(this))
  }
  

  selectupdate(list){
    this.state({
      sub:list
    })
  }

  handleChange(event){
    document.getElementById("select").value = event.target.value;
    console.log(document.getElementById("select"))
    };

  render(){
    return(
      <section>
      <FormControl variant="filled">
        <InputLabel htmlFor="filled-age-native-simple">Categoria</InputLabel>
        <Select id="select"
          native
          value={this.teste}
          onChange={this.handleChange}
          inputProps={{
            name: 'age',
            id: 'filled-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
        </Select>
      </FormControl>
      </section>
    )
  }
}
export default SelectCategoria;