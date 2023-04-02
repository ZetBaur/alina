import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { BiEdit } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';

import { rows } from '../data/requests.data';
import styles from './Requests.module.scss';
import { TablePagination } from '@mui/material';
import React, { useState } from 'react';

function Requests() {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    console.log(newPage);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>ФИО</TableCell>
              <TableCell align='right'>Номер телефона</TableCell>
              <TableCell align='right'>Тип заявки</TableCell>
              <TableCell align='right'>Дата</TableCell>
              <TableCell align='right'>Кол-во</TableCell>
              <TableCell align='right'>Город</TableCell>
              <TableCell align='right'>Звонок</TableCell>
              <TableCell align='right'>{/* <BiEdit /> */}</TableCell>
              <TableCell align='right'></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, idx) => (
              <TableRow
                key={idx}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align='right'>{idx + 1}</TableCell>

                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell align='right'>{row.phone}</TableCell>
                <TableCell align='right'>{row.type}</TableCell>
                <TableCell align='right'>{row.date}</TableCell>
                <TableCell align='right'>{row.quantity}</TableCell>
                <TableCell align='right'>{row.city}</TableCell>
                <TableCell align='right'>{row.call}</TableCell>

                <TableCell align='right'>
                  <BiEdit
                    className={styles.button}
                    size={25}
                    onClick={() => console.log('fffff')}
                  />
                </TableCell>

                <TableCell align='right'>
                  <IoMdClose
                    className={styles.button}
                    size={25}
                    onClick={() => console.log('eeeeee')}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component='div'
        count={rows.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}

export default Requests;
