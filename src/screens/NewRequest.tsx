import { useEffect, useState } from 'react';
import { useAppDispatch } from '../hooks/reduxHooks';

import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from '@mui/material';
import styles from './NewRequest.module.scss';
import { setPageTitle } from '../features/header/header.slice';

function NewRequest() {
  const [requestName, setRequestName] = useState('');
  const [requestAmount, setRequestAmount] = useState('');
  const [typeValue, setTypeValue] = useState('classic');
  const [confirmValue, setConfirmValue] = useState('yes');
  const [getEmailChecked, setGetEmailChecked] = useState(false);
  const [getSmsChecked, setGetSmsChecked] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPageTitle('Новая заявка'));
  }, []);

  return (
    <div className={styles.newRequest}>
      <div>
        <Box sx={{ marginBottom: '25px' }}>
          <TextField
            error={!requestName}
            fullWidth
            id='outlined-basic'
            label='Название заявки*'
            variant='filled'
            value={requestName}
            onChange={(event) => {
              setRequestName(event.target.value);
            }}
          />
        </Box>

        <Box sx={{ marginBottom: '25px' }}>
          <TextField
            sx={{ marginRight: '25px' }}
            id='outlined-basic'
            label='Сумма заявки'
            variant='filled'
            InputProps={{
              endAdornment: <InputAdornment position='end'>T</InputAdornment>,
              inputMode: 'numeric',
            }}
            type='number'
            value={requestAmount}
            onChange={(event) => {
              setRequestAmount(event.target.value);
            }}
          />

          <FormControl>
            <InputLabel id='request-type'>Тип заявки</InputLabel>
            <Select
              error={!typeValue}
              labelId='request-type'
              id='request-type'
              value={typeValue}
              label='Тип заявки*'
              variant='filled'
              onChange={(e) => {
                setTypeValue(e.target.value);
              }}
            >
              <MenuItem value='classic'>Классический</MenuItem>
              <MenuItem value='standart'>Стандартный</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ marginBottom: '25px' }}>
          <FormControl>
            <FormLabel id='confirm'>Позвонить для подтверждения</FormLabel>

            <RadioGroup
              row
              aria-labelledby='confirm'
              defaultValue='yes'
              name='radio-buttons-group'
              value={confirmValue}
              onChange={(e) => {
                setConfirmValue((e.target as HTMLInputElement).value);
              }}
            >
              <FormControlLabel value='yes' control={<Radio />} label='да' />

              <FormControlLabel value='no' control={<Radio />} label='нет' />
            </RadioGroup>
          </FormControl>
        </Box>

        <Box sx={{ marginBottom: '25px' }}>
          <FormControl component='fieldset' variant='standard'>
            <FormLabel component='legend'>
              Получать дополнительную информацию
            </FormLabel>

            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={getEmailChecked}
                    onChange={(event) => {
                      setGetEmailChecked(event.target.checked);
                    }}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                }
                label='Письма на почту'
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={getSmsChecked}
                    onChange={(event) => {
                      setGetSmsChecked(event.target.checked);
                    }}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                }
                label='СМС на телефон'
              />
            </FormGroup>
          </FormControl>
        </Box>

        <Box>*-обязательные поля</Box>
      </div>
    </div>
  );
}

export default NewRequest;
