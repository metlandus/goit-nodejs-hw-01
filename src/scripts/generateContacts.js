import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';


export const generateContacts = async (number = 5) => {
    let data = await readContacts();
    let generatedContacts = [];
    generatedContacts = generatedContacts.concat(JSON.parse(data));
    for (let i = 0; i < number; i++) {
        const contact = createFakeContact();
        generatedContacts.push(contact);
    }
    writeContacts(generatedContacts)
};

await generateContacts(5);
