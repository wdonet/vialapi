export enum SEX {
  Male = 'MALE',
  Female = 'FEMALE',
}

export enum SUBJECT_STATUS {
  'In Screening' = 'In Screening',
  Enrolled = 'Enrolled',
  Failed = 'Failed',
}

type Subject = {
  id: number,
  name: string,
  sex: SEX,
  diagnosis: string,
  date: string,
  status: SUBJECT_STATUS,
};

export default Subject;
