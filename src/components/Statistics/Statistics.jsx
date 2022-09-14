import React from 'react';
import { StatisticItem, Span } from './Statistics.module';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  //   console.log(positivePercentage);
  return (
    <div>
      <ul>
        <StatisticItem>
          <Span>Good:</Span>
          {good}
        </StatisticItem>
        <StatisticItem>
          <Span>Neutral:</Span>
          {neutral}
        </StatisticItem>
        <StatisticItem>
          <Span>Bad:</Span>
          {bad}
        </StatisticItem>
        <StatisticItem>
          <Span>Total:</Span>
          {total}
        </StatisticItem>
        <StatisticItem>
          <Span>PositivePercentage:</Span>
          {positivePercentage}%
        </StatisticItem>
      </ul>
    </div>
  );
};

export default Statistics;
