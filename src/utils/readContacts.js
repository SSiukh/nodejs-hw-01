import path from 'node:path';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  const dataPath = path.resolve(PATH_DB);

  try {
    const data = await fs.readFile(dataPath, 'utf8');
    return JSON.parse(data);
  } catch (e) {
    console.log(e);
  }
};
