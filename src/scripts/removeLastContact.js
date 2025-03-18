import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (!contacts.length) {
      console.log('There are no contacts');
      return;
    }

    contacts.pop();

    await writeContacts(contacts);
  } catch (e) {
    console.log(e);
  }
};

removeLastContact();
