import { forwardRef, useEffect, useState } from 'react';
import { useAppDispatch } from '../hooks/reduxHooks';
import {
  Alert,
  AlertProps,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
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
    dayjs(dayjs(Date()).format().slice(0, 10))
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPageTitle('Новая заявка'));
  }, []);

  const clearForm = () => {
    setRequestName('');
    setRequestAmount('');
    setConfirmValue('');
    setTypeValue('');
    setGetEmailChecked(false);
    setGetSmsChecked(false);
    setClaimersNumber('');
    setCityValue('');
    setPhoneInput('');
  };

  return (
    <div>
      <div className={styles.newRequest}>
        <div className={styles.col1}>
          <Box sx={{ marginBottom: '25px' }}>
            <InputLabel shrink id='requestName'>
              Название заявки <span className={styles.asteriks}>*</span>
            </InputLabel>

            <TextField
              fullWidth
              size='small'
              error={!requestName}
              id='requestName'
              placeholder='Напишите название заявки'
              value={requestName}
              InputLabelProps={{ shrink: true }}
              onChange={(event) => {
                setRequestName(event.target.value);
              }}
            />
          </Box>

          <Box sx={{ marginBottom: '25px', display: 'flex', flexWrap: 'wrap' }}>
            <Box sx={{ marginRight: '25px', marginBottom: '16px' }}>
              <InputLabel shrink id='requestAmount'>
                Сумма заявки
              </InputLabel>

              <TextField
                fullWidth
                size='small'
                id='requestAmount'
                placeholder='Сумма'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>T</InputAdornment>
                  ),
                  inputMode: 'numeric',
                }}
                type='number'
                value={requestAmount}
                onChange={(event) => {
                  setRequestAmount(event.target.value);
                }}
              />
            </Box>

            <Box>
              <InputLabel shrink id='request-type'>
                Тип заявки <span className={styles.asteriks}>*</span>
              </InputLabel>

              <Select
                fullWidth
                error={!typeValue}
                labelId='request-type'
                id='request-type'
                size='small'
                value={typeValue}
                onChange={(e) => {
                  setTypeValue(e.target.value);
                }}
              >
                <MenuItem value='classic'>Классический</MenuItem>
                <MenuItem value='standart'>Стандартный</MenuItem>
              </Select>
            </Box>
          </Box>

          <Box sx={{ marginBottom: '25px' }}>
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
          </Box>

          <Box sx={{ marginBottom: '25px' }}>
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
          </Box>
        </div>

        <div className={styles.col2}>
          <Box sx={{ marginBottom: '25px' }}>
            <InputLabel shrink id='request-type'>
              Количество заявителей
            </InputLabel>

            <TextField
              size='small'
              id='claimersNumber'
              type='number'
              value={claimersNumber}
              onChange={(event) => {
                setClaimersNumber(event.target.value);
              }}
            />
          </Box>

          <Box sx={{ marginBottom: '25px' }}>
            <InputLabel shrink id='city'>
              Город
            </InputLabel>

            <Select
              fullWidth
              displayEmpty
              size='small'
              labelId='city'
              placeholder='Выберите Ваш город'
              defaultValue='Выберите Ваш город'
              value={cityValue}
              onChange={(e) => {
                setCityValue(e.target.value);
              }}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return (
                    <span className={styles.placeholder}>
                      Выберите Ваш город
                    </span>
                  );
                }
                return selected;
              }}
            >
              {cities.map((el, idx) => (
                <MenuItem key={idx} value={el}>
                  {el}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </div>

        <div className={styles.col3}>
          <Box>
            <InputLabel shrink id='city'>
              Номер телефона <span className={styles.asteriks}>*</span>
            </InputLabel>

            <InputMask
              id='phone'
              className={`${styles.input} ${!phoneInput ? 'p-invalid' : ''}`}
              value={phoneInput}
              onChange={(e: InputMaskChangeEvent) =>
                setPhoneInput(e.target.value)
              }
              mask='+7(999)999-99-99'
            />
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

      <div>* - обязательные поля</div>

      <div className={styles.buttons}>
        <Stack spacing={5} direction='row'>
          <Button variant='contained'>Отправить</Button>
          <Button
            variant='outlined'
            disabled={
              !requestName &&
              !requestAmount &&
              !confirmValue &&
              !typeValue &&
              !getEmailChecked &&
              !getSmsChecked &&
              !claimersNumber &&
              !cityValue &&
              !phoneInput
            }
            onClick={clearForm}
          >
            Очистить
          </Button>
        </Stack>
      </div>

      <Alert variant='filled' severity='error'>
        This is an error alert — check it out!
      </Alert>
    </div>
  );
}

export default NewRequest;
