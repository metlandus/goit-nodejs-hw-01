import { PATH_DB } from '../constants/contacts.js';
import fs from "fs/promises"

export const writeContacts = async (updatedContacts) => {
    const data = JSON.stringify(updatedContacts, null, 2);
    console.log("🚀 ~ writeContacts ~ data:", data)
    await fs.writeFile(PATH_DB, data, 'utf8');
};
