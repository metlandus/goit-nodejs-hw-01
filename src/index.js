import { readContacts } from "./utils/readContacts.js";

const displayContacts = async () => {
    const contacts = await readContacts();
};

displayContacts();
