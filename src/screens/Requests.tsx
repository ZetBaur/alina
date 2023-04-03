import React, { useEffect, useState } from 'react';
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
import Modal from '@mui/material/Modal';
import { Box, Button, Stack, Typography } from '@mui/material';
import { setPageTitle } from '../features/header/header.slice';
import { useAppDispatch } from '../hooks/reduxHooks';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Requests() {
  const [rowData, setRowData] = useState<Data[]>(rows);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [showModal, setShowModal] = useState(false);
  const [currentRow, setCurrentRow] = useState<Data | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPageTitle('Мои заявки'));
  }, []);

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

  const handleRemoveRow = (row: Data) => {
    setCurrentRow(row);
    setShowModal(true);
  };

  const removeRow = () => {
    const newData = rowData.filter((row) => row.id !== currentRow?.id);
    setRowData(newData);
    setShowModal(false);
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
                    onClick={() => handleRemoveRow(row)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component='div'
        rowsPerPageOptions={[10, 20, 40]}
        count={rowData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Удалить заявку <b>"{currentRow?.id}"</b>
          </Typography>

          <br />

          <Stack direction='row' justifyContent='center' spacing={5}>
            <Button variant='outlined' onClick={() => setShowModal(false)}>
              Отменить
            </Button>

            <Button variant='contained' onClick={removeRow}>
              Подтвердить
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}
