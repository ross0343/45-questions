// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guest = ["Albert Einstein", "Leonardo da Vinci", "Ada Lovelace"];

guest.forEach(guests =>{
    console.log(`Dear ${guests},\n You are cordially invited to dinner. We would be honored to have your presence.\n Sincerely`);
});