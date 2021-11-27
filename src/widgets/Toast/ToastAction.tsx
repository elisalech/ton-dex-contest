import React from 'react';
import { Button } from 'components/Button/Button';
import { ToastAction as Action } from './types';

interface ToastActionProps {
  action: Action;
}

const ToastAction: React.FC<ToastActionProps> = ({ action }) => {
  if (action.url.startsWith('http')) {
    return <Button>{action.text}</Button>;
  }

  return <Button>{action.text}</Button>;
};

export default ToastAction;
