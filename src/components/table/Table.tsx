import { ReactNode } from 'react';
import { Table as MuiTable, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Typography } from '../typography/Typography';

import style from './Table.module.scss';

export type InitialColumnsType<T extends Type> = {
  data: string;
  label: string;
  width: number;
};

type Type = Record<string, string | ReactNode>;

export type TableProps<T extends Type> = {
  initialColumns: Array<InitialColumnsType<T>>;
  rows: Array<T>;
};

export const Table = <T extends Type>({ initialColumns, rows }: TableProps<T>) => {
  return (
    <MuiTable className={style.table}>
      <TableHead>
        <TableRow className={style.head}>
          {initialColumns.map(headCell => {
            return (
              <TableCell
                component={'th'}
                key={headCell.label}
                className={style.cell}
                padding={'none'}
                scope="row"
                style={headCell.width ? { width: `${headCell.width}px` } : {}}
              >
                <Typography key={headCell.label} variant={'h2'}>
                  {headCell.label}
                </Typography>
              </TableCell>
            );
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, index) => {
          return (
            <TableRow key={index} tabIndex={-1} className={style.row}>
              {initialColumns.map(column => {
                const cell = row[column.data];
                return (
                  <TableCell key={column.label} className={style.cell} component={'th'} padding={'none'} scope="row">
                    <Typography variant={'medium'}>{cell}</Typography>
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </MuiTable>
  );
};
