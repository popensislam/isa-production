/* eslint-disable i18next/no-literal-string */
import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

interface BugButtonProps {
    className?: string
}

/** Компонент для тестирования ErrorBoundary */
export const BugButton = ({}: BugButtonProps) => {
  const [ error, setError ] = useState(false);

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [ error ]);
  return (
    <Button onClick={onThrow}>Throw error</Button>
  );
};
