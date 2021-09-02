import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
class ProdutoTable extends React.Component {
  state = { open: false };
  lista = [{"id" : 1, "nome" : "caio", "descricao":"aquela", "categoria":{"id": 1, "nome" : "batato"}},{"id" : 2, "nome" : "caio", "descricao":"aquela", "categoria":{"id": 1, "nome" : "batata"}},{"id" : 3, "nome" : "caio", "descricao":"aquela", "categoria":{"id": 1, "nome" : "batato"}},]

  render() {
    const { row } = this.props;
    const { open } = this.state;
    return(
          <>
          <Paper >
      <Table >
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Nome</TableCell>
            <TableCell align="right">Descricao</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
      {this.lista.map((l, k) => {
        return (
          <>
          <TableRow>
          <TableCell>
          <Button
          onClick={() => this.setState(({ open }) => ({ open: !open }))}
          >
          <ArrowForwardIosIcon fontSize="small"/>
          </Button>
          </TableCell>
            <TableCell key={k} align="right">{l.id}</TableCell>
            <TableCell key={k} align="right">{l.nome}</TableCell>
            <TableCell key={k} align="right">{l.descricao}</TableCell>
          </TableRow>
          <Collapse in={open} component="tr" style={{ display: "block" }}>
            <td>
              <div>
              <Table >
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Nome</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableCell key={k} align="right">{l.categoria.id}</TableCell>
            <TableCell key={k} align="right">{l.categoria.nome}</TableCell>
        </TableBody>

        </Table>
            </div>
            </td>
          </Collapse>
          </>
        );
          })}
          </TableBody>
        </Table>
      </Paper>
        </>
    );
  }
}
export default ProdutoTable;