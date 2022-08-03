import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import { selectAdmin } from "../store/admin.slice";
import { useAppSelector } from "../store/hooks";
import styles from "../styles/button.module.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

type AdminType = {
  id: number;
  name: string;
  account: string;
  phonenumber: string;
  status: string;
};
const EmployeeTable = () => {
  const { admins } = useAppSelector(selectAdmin);

  const router = useRouter();
  const navigateBaseOnId = (id: number) => {
    router.push({
      pathname: `/edit/${id}`,
      query: { id },
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">name</TableCell>
            <TableCell align="left">account</TableCell>
            <TableCell align="left">phonenumber</TableCell>
            <TableCell align="center">account status</TableCell>
            <TableCell align="center">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {admins.map((ele) => (
            <TableRow key={ele.id}>
              <TableCell align="left">{ele.name}</TableCell>
              <TableCell align="left">{ele.account}</TableCell>
              <TableCell align="left">{ele.phonenumber}</TableCell>
              <TableCell align="center">{ele.status}</TableCell>
              <TableCell align="center">
                <div className={styles.button_container}>
                  <button
                    onClick={() => navigateBaseOnId(ele.id)}
                    className={styles.button_container_btn}
                  >
                    编辑
                  </button>
                  <button className={styles.button_container_btn}>紧用</button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default EmployeeTable;
