import { ReactNode } from 'react';
import { Table as MuiTable, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Typography } from '../typography/Typography';

import styles from './Table.module.scss';

export type InitialColumnsType = {
  data: string;
  label: string;
  width: number;
};

type Type = Record<string, string | ReactNode>;

export type TableProps<T extends Type> = {
  initialColumns: Array<InitialColumnsType>;
  rows: Array<T>;
};

export const Table = <T extends Type>({ initialColumns, rows }: TableProps<T>) => {
  return (
    <MuiTable className={styles.table}>
      <TableHead>
        <TableRow className={styles.head}>
          {initialColumns.map(headCell => {
            return (
              <TableCell
                component={'th'}
                key={headCell.label}
                className={styles.cell}
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
            <TableRow key={index} tabIndex={-1} className={styles.row}>
              {initialColumns.map(column => {
                const cell = row[column.data];
                return (
                  <TableCell key={column.label} className={styles.cell} component={'th'} padding={'none'} scope="row">
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
