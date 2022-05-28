const string = 'Enjoy this mini project? Consider following me on Twitter! @akaEnable';
const openingMarkdown = '**'; //  **  <b>  <strong>
const closingMarkdown = '**'; //  **  </b>  </strong>
let half, bold, regular, final;

function quickread(string) {
    const newString = [];

    string.split(' ').forEach(word => {
        // First, find the halfway point of the word, and round it up if its a decimal
        half = Math.ceil(word.length/2);

        // Next, take the first-half of the word
        bold = word.slice(0, half);

        // Then, take the end-half of the word
        regular = word.slice(half);

        // Now, combine it all together into one word, with the markdown sandwiching the bolded part
        final = openingMarkdown + bold + closingMarkdown + regular;

        // Finally, push the word into the array we created
        newString.push(final);
    })

    return newString.join(' ');
}

console.log(quickread(string));

// **Enj**oy **th**is **mi**ni **proj**ect? **Cons**ider **follo**wing **m**e **o**n **Twit**ter! **@akaE**nable