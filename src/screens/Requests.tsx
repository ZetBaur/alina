import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { rows } from '../data/requests.data';
import { BiEdit } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';
import styles from './Requests.module.scss';
import { Data } from '../data/requests.data';

export default function Requests() {
  const [rowData, setRowData] = useState<Data[]>(rows);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const removeRow = (id: string) => {
    const newData = rowData.filter((row) => row.id !== id);
    setRowData(newData);
  };

  return (
    <>
      <TableContainer component={Paper} className={styles.requests}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align='right'>ФИО</TableCell>
              <TableCell align='right'>Тип заявки</TableCell>
              <TableCell align='right'>Дата</TableCell>
              <TableCell align='right'>Кол-во</TableCell>
              <TableCell align='right'>Город</TableCell>
              <TableCell align='right'>Кол-во</TableCell>
              <TableCell align='right'>Звонок</TableCell>
              <TableCell align='right'></TableCell>
              <TableCell align='right'></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {(rowsPerPage > 0
              ? rowData.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : rowData
            ).map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {row.id}
                </TableCell>
                <TableCell align='right'>{row.name}</TableCell>
                <TableCell align='right'>{row.phone}</TableCell>
                <TableCell align='right'>{row.type}</TableCell>
                <TableCell align='right'>{row.date}</TableCell>
                <TableCell align='right'>{row.quantity}</TableCell>
                <TableCell align='right'>{row.city}</TableCell>
                <TableCell align='right'>{row.call}</TableCell>

                <TableCell align='right'>
                  <BiEdit size={25} className={styles.button} />
                </TableCell>

                <TableCell align='right'>
                  <IoMdClose
                    size={25}
                    className={styles.button}
                    onClick={() => removeRow(row.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[10, 20, 40]}
        count={rowData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
