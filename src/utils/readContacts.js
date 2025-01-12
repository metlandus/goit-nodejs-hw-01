import { PATH_DB } from '../constants/contacts.js';
import fs from "fs/promises"

export const readContacts = async () => {
    const fileContent = await fs.readFile(PATH_DB, "utf-8")
    return fileContent
};
