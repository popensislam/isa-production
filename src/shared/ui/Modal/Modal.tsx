import cls from './Modal.module.scss';
import { Portal } from '../Portal/Portal';
import { ReactNode, MouseEvent, useState, useRef, useEffect, useCallback, MutableRefObject } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';


interface ModalProps {
    className?: string,
    children?: ReactNode,
    isOpen?: boolean,
    lazy?: boolean
    onClose?: () => void,
}

const ANIMATION_DELAY = 300;

export const Modal = ({ className, children, isOpen, lazy, onClose }: ModalProps) => {

  const [ isMounted, setIsMounted ] = useState(false);
  const [ isClosing, setIsClosing ] = useState(false);

  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [ onClose ]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [ closeHandler ]);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [ isOpen ]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [ isOpen, onKeyDown ]);

  const onContentClick = (e: MouseEvent) => {
    e.stopPropagation();
  };


  if (lazy && !isMounted) {
    return null;
  }

  const mods: Mods = { [ cls.opened ]: isOpen, [ cls.isClosing ]: isClosing };

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [ className ])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
