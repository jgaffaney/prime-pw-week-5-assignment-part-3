console.log('***** Music Collection *****')

let collection = [];

//a function to accept the artist, title, and yearpublished
//then create and object with those properties and add it to the Collection

function addToCollection (title, artist, yearPublished) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }//end object
  collection.push(album);
  console.log(`${title} was added to collection.`);
  return album;

}//end addToCollection
addToCollection('The Eternol Idol', 'Black Sabbath', '1987');
addToCollection('Past Lives', 'Black Sabbath', '2002');
console.log(collection);

//a function to take any array and first show the number of items in the array
// and then list the informaiton in each index of the array

function showCollection(array) {
  console.log(`This collection has ${array.length} items.`);
  for(let index of array) {
    console.log(`${index.title} by ${index.artist}, published in ${index.yearPublished}`)
  }//end for
  return true;
}//end showCollection

console.log(showCollection(collection));
