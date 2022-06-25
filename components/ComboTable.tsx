import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import { Button } from "@mui/material";
const ComboTable = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">name</TableCell>
            <TableCell align="left">account</TableCell>
            <TableCell align="left">phonenumber</TableCell>
            <TableCell align="left">account status</TableCell>
            <TableCell align="center">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((ele) => (
            <TableRow key={ele.id}>
              <TableCell align="left">{ele.name}</TableCell>
              <TableCell align="left">{ele.account}</TableCell>
              <TableCell align="left">{ele.phonenumber}</TableCell>
              <TableCell align="left">{ele.status}</TableCell>
              <TableCell align="center">
                <Button title="edit" />
                <Button title="紧用" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default ComboTable;
