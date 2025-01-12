import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

let data = await readContacts();
let generatedContacts = [];
generatedContacts = generatedContacts.concat(JSON.parse(data));

const generateContacts = async (number) => {
    for (let i = 0; i < number; i++) {
        const contact = createFakeContact();
        generatedContacts.push(contact);
    }
    return generatedContacts
};

const contacts = await generateContacts(5);
await writeContacts(contacts);