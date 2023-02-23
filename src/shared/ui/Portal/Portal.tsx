import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import cls from './Portal.module.scss';

interface PortalProps {
    children?: ReactNode,
    element?: HTMLElement
}

export const Portal = ({
  children,
  element = document.body
}: PortalProps) => {
  return createPortal(children, element);
};
