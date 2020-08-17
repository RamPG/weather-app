import React, { FunctionComponent } from 'react';

import './today-date.scss';

export type TodayDatePropsType = {
  monthDay: number,
  nameMonth: string,
  year: number,
  nameDay: string
}
export const TodayDate: FunctionComponent<TodayDatePropsType> = (
  {
    monthDay, nameDay, year, nameMonth,
  },
) => (
  <p>
    {`Today is 
    ${monthDay} 
    ${nameMonth} 
    ${year} 
    ${nameDay}`}
  </p>
);
