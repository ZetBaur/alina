import { useEffect, useState, useRef, SetStateAction } from 'react';
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

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { InputMask, InputMaskChangeEvent } from 'primereact/inputmask';

import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/ru';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import styles from './NewRequest.module.scss';
import { setPageTitle } from '../features/header/header.slice';
import { cities } from '../data/new.request.data';

function NewRequest() {
  const [requestName, setRequestName] = useState('');
  const [requestAmount, setRequestAmount] = useState('');
  const [typeValue, setTypeValue] = useState('');
  const [confirmValue, setConfirmValue] = useState('');
  const [getEmailChecked, setGetEmailChecked] = useState(false);
  const [getSmsChecked, setGetSmsChecked] = useState(false);
  const [claimersNumber, setClaimersNumber] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [phoneInput, setPhoneInput] = useState<string>('');
  const [requestDate, setRequestDate] = useState<Dayjs | null>(
    dayjs('2022-08-17')
  );

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

          <FormControl fullWidth>
            <InputLabel id='request-type'>Тип заявки*</InputLabel>
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

      <div>
        <Box sx={{ marginBottom: '25px' }}>
          <TextField
            id='claimersNumber'
            label='Количество заявителей'
            type='number'
            variant='filled'
            value={claimersNumber}
            onChange={(event) => {
              setClaimersNumber(event.target.value);
            }}
          />
        </Box>

        <Box sx={{ marginBottom: '25px' }}>
          <FormControl fullWidth>
            <InputLabel id='city'>Город</InputLabel>

            <Select
              labelId='city'
              id='demo'
              label='Город'
              variant='filled'
              value={cityValue}
              onChange={(e) => {
                setCityValue(e.target.value);
              }}
            >
              {cities.map((el, idx) => (
                <MenuItem key={idx} value={el}>
                  {el}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </div>

      <div>
        <Box>
          <span className='p-float-label'>
            <InputMask
              id='phone'
              className={`${styles.input} p-invalid`}
              value={phoneInput}
              onChange={(e: InputMaskChangeEvent) =>
                setPhoneInput(e.target.value)
              }
              mask='+7(999)999-99-99'
            />
            <label htmlFor='phone'>Номер телефона*</label>
          </span>
        </Box>

        <Box>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='ru'>
            <DateCalendar
              value={requestDate}
              onChange={(newValue) => {
                setRequestDate(newValue);
              }}
            />
          </LocalizationProvider>
        </Box>
      </div>
    </div>
  );
}

export default NewRequest;
