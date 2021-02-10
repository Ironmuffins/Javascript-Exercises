let findTheOldest = function(people) {
    const sortByAge = people.sort(function(a, b) {
        if((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)) {
            return 1;
        } else {
            return -1;
        }
});
    console.table(sortByAge);
    let oldest = people[people.length -1];
    return oldest;
}

//findTheOldest(people);

module.exports = findTheOldest
