import { subjects } from "./demoData";
import Subject from "../../definitions/subjects";

const DEFAULT_PAGE_SIZE = 20;

export const getByPage = async ({
  name = '',
  sex = '',
  diagnosis = '',
  date = '',
  status = '',
  skip = '',
  take = ''
}) => {
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
    }
    const from = parseInt(skip) || 0;
    const to = from + (parseInt(take) || DEFAULT_PAGE_SIZE);
    return await Promise.resolve({
      list: filtered.slice(from, to),
      totalRows: filtered.length,
    });
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
    if (foundIndex < 0) {
      const message = 'Subject not found';
      console.error(`${message}: ${id}`);
      throw new Error(message);
    }
    subjects[foundIndex] = { ...subjects[foundIndex], ...subject }
    return await Promise.resolve(subjects[foundIndex])
  }
  catch(error) {
    await Promise.reject(error.message);
  }
};

export const removeSubject = async(id: number) => {
  try {
    const foundIndex = subjects.findIndex(o => o.id === id);
    if (foundIndex < 0) {
      const message = 'Subject not found';
      console.error(`${message}: ${id}`);
      throw new Error(message);
    }
    const deleted = subjects.splice(foundIndex, 1)
    return await Promise.resolve(deleted)
  }
  catch(error) {
    console.error(`Deleting subject ${id} - ${error.message}`)
    await Promise.reject(error.message);
  }
};

