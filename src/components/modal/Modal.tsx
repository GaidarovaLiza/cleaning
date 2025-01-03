import React, { useCallback } from 'react';
import clsx from 'clsx';
import { Modal as MuiModal } from '@mui/base';
import CloseIcon from '@mui/icons-material/Close';
import { SvgIcon } from '@mui/material';

import styles from './Modal.module.scss';
import { Typography } from '../typography';

export interface ModalProps {
  buttons?: React.ReactNode;
  children: React.ReactNode;
  classes?: {
    body?: string;
    root?: string;
  };
  header: string;
  onClose: () => void;
  open: boolean;
  subtitle?: string;
}

const Backdrop = React.forwardRef<HTMLDivElement, { open?: boolean; ownerState: any }>((props, ref) => {
  const { open, ownerState, ...other } = props;
  return (
    <div
      className={clsx({ 'MuiBackdrop-open': open })}
      ref={ref}
      style={{
        backgroundColor: '#293d7040',
        inset: '0',
        position: 'fixed',
        zIndex: -1,
      }}
      {...other}
    />
  );
});

Backdrop.displayName = 'Backdrop';

export const Modal = ({ buttons, children, classes, header, onClose, open, subtitle }: ModalProps) => {
  const onClick: React.MouseEventHandler<HTMLDivElement> = useCallback(e => {
    e.stopPropagation();
    e.preventDefault();
  }, []);

  return (
    <MuiModal
      className={`${styles.modal} ${classes?.root ?? ''}`}
      onClick={onClick}
      onClose={onClose}
      open={open}
      slots={{ backdrop: Backdrop }}
    >
      <div className={`${styles.modalBody} ${classes?.body ?? ''}`}>
        <div className={styles.header}>
          <div>
            <Typography className={styles.modal__heading} variant={'h2'}>
              {header}
            </Typography>
            {subtitle && (
              <Typography className={styles.modal__subtitle} variant={'regular'}>
                {subtitle}
              </Typography>
            )}
          </div>
          <div className={styles.closeButton} onClick={onClose}>
            <SvgIcon component={CloseIcon} />
          </div>
        </div>
        <div className={styles.content}>
          {children}
          {buttons && <div className={styles.buttons}>{buttons}</div>}
        </div>
      </div>
    </MuiModal>
  );
};
