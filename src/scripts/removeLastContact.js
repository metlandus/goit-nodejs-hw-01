import { writeContacts } from "../utils/writeContacts.js";
import { countContacts } from "./countContacts.js";
import { getAllContacts } from "./getAllContacts.js";

export const removeLastContact = async () => {
    let num = await countContacts();
    if (num > 0) {
        let contacts = JSON.parse(await getAllContacts());
        const newContacts = contacts.slice(0, num - 1)
        writeContacts(newContacts)
        console.log(`Last Contact ${contacts[num - 1].name} Removed`)
    }
    else {
        console.log("There are no contacts in the database")
    }
};

removeLastContact();
