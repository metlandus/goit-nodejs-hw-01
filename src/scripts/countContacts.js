import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    let data = JSON.parse(await readContacts());
    console.log("🚀 ~ countContacts ~ data:", data)
    let sum = 0;
    for (let i of data) {
        sum++;
    }
    return sum;
};

console.log(await countContacts());
