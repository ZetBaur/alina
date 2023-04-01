import { useState } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import styles from './NewRequest.module.scss';

function NewRequest() {
  const [selectedOption, setSelectedOption] = useState('classic');

  const selectChange = (e: SelectChangeEvent) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className={styles.newRequest}>
      <Box>
        <FormControl>
          <TextField
            id='outlined-basic'
            label='Название заявки'
            variant='outlined'
          />
        </FormControl>
      </Box>

      <Box>
        <FormControl>
          <TextField
            id='outlined-basic'
            label='Сумма заявки'
            variant='outlined'
          />
        </FormControl>

        <FormControl>
          <InputLabel id='request-type'>Тип заявки</InputLabel>
          <Select
            labelId='request-type'
            id='request-type'
            value={selectedOption}
            label='Тип заявки'
            onChange={selectChange}
          >
            <MenuItem value='classic'>Классический</MenuItem>
            <MenuItem value='standart'>Стандартный</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default NewRequest;
