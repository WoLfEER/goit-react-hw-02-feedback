import React from 'react';
import { Button } from './FeedbackOptions.module';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(el => {
        return (
          <Button key={el} type="button" value={el} onClick={onLeaveFeedback}>
            {el}
          </Button>
        );
      })}
    </div>
  );
};
