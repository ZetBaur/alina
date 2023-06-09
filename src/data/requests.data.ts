import { v4 as uuidv4 } from 'uuid';

interface Column {
  cols:
    | 'id'
    | 'name'
    | 'phone'
    | 'type'
    | 'date'
    | 'quantity'
    | 'city'
    | 'call';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: string | number | boolean) => string;
}

export const columns: readonly Column[] = [
  { cols: 'id', label: 'ID', minWidth: 100 },
  { cols: 'name', label: 'ФИО', minWidth: 100 },
  {
    cols: 'phone',
    label: 'Номер телефона',
    minWidth: 100,
    align: 'right',
  },
  {
    cols: 'type',
    label: 'Тип заявки',
    minWidth: 100,
    align: 'right',
  },
  {
    cols: 'date',
    label: 'Дата',
    minWidth: 100,
    align: 'right',
  },

  {
    cols: 'quantity',
    label: 'Кол-во',
    minWidth: 100,
    align: 'right',
  },

  {
    cols: 'city',
    label: 'Город',
    minWidth: 100,
    align: 'right',
  },

  {
    cols: 'call',
    label: 'Звонок',
    minWidth: 100,
    align: 'right',
    format: (value: string | number | boolean) => (value ? 'Да' : 'Нет'),
  },
];

export interface Data {
  id: string;
  name: string;
  phone: string;
  type: string;
  date: string;
  quantity: number;
  city: string;
  call: boolean;
}

function createData(
  id: string,
  name: string,
  phone: string,
  type: string,
  date: string,
  quantity: number,
  city: string,
  call: boolean
) {
  return { id, name, phone, type, date, quantity, city, call };
}

export const rows = [
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Астана',
    false
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Актау',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Шымкент',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Астана',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Актау',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    false
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Шымкент',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Астана',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    false
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Актау',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Шымкент',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Астана',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Актау',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Шымкент',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Астана',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Актау',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Шымкент',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Астана',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Актау',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Шымкент',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Астана',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Актау',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Шымкент',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Астана',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Актау',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Шымкент',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Астана',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Актау',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Шымкент',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Астана',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Актау',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Шымкент',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Астана',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Актау',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Шымкент',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Астана',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Актау',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Шымкент',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Астана',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Алматы',
    true
  ),
  createData(
    uuidv4().slice(0, 5),
    'Иванов И.И.',
    '+7 777 123 45 67',
    'Классический',
    '2023-01-01',
    7,
    'Актау',
    true
  ),
];
