import { createFakeContact } from "../utils/createFakeContact.js";

const generateContacts = async (number) => {
    let generatedContacts = []
    for (let i = 0; i < number; i++) {
        const contact = createFakeContact();
        generatedContacts.push(contact)
    }
    console.log("🚀 ~ generateContacts ~ generatedContacts:", generatedContacts)
};

generateContacts(5);
