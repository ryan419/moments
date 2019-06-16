import React from 'react';

import { ActivityList } from '../activity';
import { IActivity, ActivityType } from '../activity/activity.model';

const activities: Array<IActivity> = [
  {
    activityType: ActivityType.Coding,
    date: new Date(),
    title: 'coding in React',
    description: 'use fp, styled component, mobx...',
  },
];

export const Home = () => (
  <div>
    home
    <div>
      <p>Activity List</p>
      <ActivityList activities={activities} />
    </div>
  </div>
);
