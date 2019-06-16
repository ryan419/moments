import React, { Component } from 'react';

import { IActivity } from './activity.model';

interface Props {
  activity: IActivity;
}

export const Activity = ({ activity }: Props) => (
  // <ul>
  //   <li>{activity.activityType}</li>
  //   <li>{activity.title}</li>
  //   <li>{activity.description}</li>
  //   <li>{activity.date}</li>
  // </ul>
  <p>{activity.title}</p>
);
