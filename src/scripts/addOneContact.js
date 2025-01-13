import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
    let data = await readContacts();
    let generatedContacts = [];
    generatedContacts = generatedContacts.concat(JSON.parse(data));
    const contact = createFakeContact();
    generatedContacts.push(contact);
    writeContacts(generatedContacts)
};

addOneContact();
