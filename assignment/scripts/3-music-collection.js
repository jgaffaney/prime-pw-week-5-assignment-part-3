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
  return title;

}//end addToCollection
addToCollection('Eternol Idol', 'Black Sabbath', '1987');
