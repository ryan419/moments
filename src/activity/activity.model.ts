export enum ActivityType {
  Reading = 'Reading',
  Studying = 'Studying',
  Playing = 'Playing',
  Coding = 'Coding',
}

export interface IActivity {
  activityType: ActivityType;
  title: string;
  description: string;
  date: Date;
}
