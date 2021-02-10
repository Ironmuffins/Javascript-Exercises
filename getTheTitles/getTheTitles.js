const getTheTitles = function(books) {
let titles = books.map(x => x.title);
return titles;
};
module.exports = getTheTitles;