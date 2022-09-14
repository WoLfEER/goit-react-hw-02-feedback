import React from 'react';
import { SectionWrap, Title } from './Section.module';

export const Section = ({ title = '', children }) => {
  return (
    <SectionWrap>
      <Title>{title}</Title>
      <div>{children}</div>
    </SectionWrap>
  );
};
