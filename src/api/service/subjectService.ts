import { subjects } from "./demoData";
import Subject from "../../definitions/subjects";

const DEFAULT_PAGE_SIZE = 20;

export const getByPage = async ({
  name = '',
  sex = '',
  diagnosis = '',
  date = '',
  status = '',
  skip = 0,
  take = DEFAULT_PAGE_SIZE
}) => {
  console.debug({name, sex, diagnosis, date, status, skip, take })
  let filtered = [ ...subjects, ];
  const filters = { name, sex, diagnosis, date, status };
  try {
    for(const key in filters) {
      // @ts-ignore FIXME
      if (!filters[key]) {
          continue;
      }
      // @ts-ignore FIXME
      filtered = filtered.filter(o => o[key] === filters[key])
      console.debug('filtered >', filtered)
    }
    return await Promise.resolve(filtered.slice(skip, take));
  }
  catch (error) {
    return { error: error.message };
  }
}

export const addSubject = async(subject: Partial<Subject>) => {
  try {
    const id = subjects.length + 1
    const added = {...subject, id, } as Subject
      subjects.push(added)
    return await Promise.resolve(added);
  }
  catch(error) {
    return { error: error.message };
  }
};

export const changeSubject = async(id: number, subject: Partial<Subject>) => {
  try {
    const foundIndex = subjects.findIndex(o => o.id === id);
    if (!foundIndex) {
      return { error: 'Subject not found' }
    }
    subjects[foundIndex] = { ...subjects[foundIndex], ...subject }
    return await Promise.resolve(subjects[foundIndex])
  }
  catch(error) {
    return { error: error.message };
  }
};

export const removeSubject = async(id: number) => {
  try {
    const foundIndex = subjects.findIndex(o => o.id === id);
    if (!foundIndex) {
      return { error: 'Subject not found' }
    }
    subjects.splice(foundIndex, 1)
    return await Promise.resolve()
  }
  catch(error) {
    return { error: error.message };
  }
};

