import React, { useState } from "react";
import Collapse from "@material-ui/core/Collapse";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

function Row({ lista }) {
  let [open, setOpen] = React.useState(false);
  return (
    <TableBody>
      {lista.map((l, k) => {
        return (
          <>
            <TableRow>
              <TableCell>
                <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => setOpen(!open)}
                >
                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
              </TableCell>
              <TableCell key={k} align="right">
                {l.id}
              </TableCell>
              <TableCell key={k} align="right">
                {l.nome}
              </TableCell>
              <TableCell key={k} align="right">
                {l.descricao}
              </TableCell>
            </TableRow>
            <Collapse in={open} component="tr" style={{ display: "block" }}>
              <td>
                <div>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="right">ID</TableCell>
                        <TableCell align="right">Nome</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableCell key={k} align="right">
                        {l.categoria.id}
                      </TableCell>
                      <TableCell key={k} align="right">
                        {l.categoria.nome}
                      </TableCell>
                    </TableBody>
                  </Table>
                </div>
              </td>
            </Collapse>
          </>
        );
      })}
    </TableBody>
  );
}
export default function TableProd({ produtorepository }) {
  let [lista, setlista] = useState(produtorepository.list());
  produtorepository.sub(setlista);
  return (
    <section>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">Nome</TableCell>
              <TableCell align="right">Descricao</TableCell>
            </TableRow>
          </TableHead>
          <Row lista = {lista}/>
        </Table>
      </Paper>
    </section>
  );
}
