import React from 'react';
import { map } from 'rambda';

import { Activity } from './activity';

import { IActivity } from './activity.model';

interface Props {
  activities: Array<IActivity>;
}

export const ActivityList = ({ activities }: Props) => (
  <div>
    {map<IActivity, any>(a => <Activity activity={a} key={a.title} />)(
      activities,
    )}
  </div>
);
