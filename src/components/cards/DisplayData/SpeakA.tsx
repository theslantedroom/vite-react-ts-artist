import React, { useState, useEffect } from 'react';
import { Button, Box, Stack } from '@mui/material';
import { ProgressBar } from '../../ProgressBar/ProgressBar';
import { useGlobalContext } from '../../../contexts/global/GlobalContext';
export const SpeakA = ({ objectA, objectB }: any) => {
  const [processingText, setProcessingText] = useState('Speak');

  const renderAlive = (obj: any) => {
    return (
      <Stack
        sx={{ height: '100%' }}
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        spacing={0}
      >
        <ProgressBar value={obj.health} message={obj.name?.toUpperCase()} />
      </Stack>
    );
  };

  const renderDead = (obj: any) => {
    return <Box>{obj.name?.toUpperCase() + 'Dead'}</Box>;
  };

  const animateCompute = () => {
    let i = 0;
    let timer = setInterval(function () {
      ++i;
      if (i === 10) clearInterval(timer);
      setProcessingText('.'.repeat(i));
    }, 30);
  };
  const fight = () => {
    objectA.speak();
    objectB.defend(objectA);
  };

  const compute = () => {
    animateCompute();
    fight();
  };
  useEffect(() => {
    if (objectB.health <= 0 || objectA.health <= 0) {
      console.log('dead');
      location.reload();
    }
  }, [objectB.health, objectA.health]);

  return (
    <Stack
      sx={{ height: '100%' }}
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
    >
      <Button variant="contained" onClick={compute}>{`${processingText}`}</Button>
      <Box>{objectB.health > 0 ? renderAlive(objectB) : renderDead(objectB)}</Box>
    </Stack>
  );
};
