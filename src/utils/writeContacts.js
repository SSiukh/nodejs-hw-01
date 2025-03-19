import path from 'node:path';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  const dataPath = path.resolve(PATH_DB);

  try {
    await fs.writeFile(
      dataPath,
      JSON.stringify(updatedContacts, null, 2),
      'utf8',
    );
  } catch (e) {
    console.log(e);
  }
};
