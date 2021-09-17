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

//Testing - Adding multiple album and then loggin the collection
addToCollection('The Eternol Idol', 'Black Sabbath', '1987');
addToCollection('Past Lives', 'Black Sabbath', '2002');
addToCollection('Songs About Jane', 'Maroon 5', '2002');
addToCollection('Abbey Road', 'The Beatles', '1969');
addToCollection('Nevermind', 'Nirvana', '1969');
addToCollection(`Sgt. Pepper's Lonely Hearts Club Band`, 'The Beatles', '1967');
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

//TESTING
console.log('TEST to show the collection');
console.log(showCollection(collection));

// a function to loop through the collection and find all albums with a given
// artist.  The function will place all albums with that artist into a new array
// and return the array

function findByArtist(artist) {
  let artistCollection = [];
  for(let album of collection) {
    if(album.artist === artist) {
      artistCollection.push(album)
    }//end if
  }//End For
  return artistCollection;
}//End findByArtist

//Testing findByArtist
console.log(`These albums are by The Beatles`);
console.log(findByArtist('The Beatles'));
console.log(`These albums are by Black Sabbath`);
console.log(findByArtist('Black Sabbath'));
console.log(`These albums are by Nirvana`);
console.log(findByArtist('Nirvana'));
console.log(`These albums are by Blink 182 (this should be an empty array)`);
console.log(findByArtist('Blink 182'));


// a function to take in an object with artist and yearPublished parameters
// then return an array containing all albums that meet both criteria.
// the function should return an empty array if the search items are not in the collection

'still need to add what to do if empty or no object'

function search(searchObject) {
  let searchResults = [];
  if(searchObject == null) {
    return collection;
  } else if (searchObject.artist == null || searchObject.yearPublished == null) {
    return collection;
  } else {
      for(let album of collection) {
        if(searchObject.artist === album.artist && searchObject.yearPublished === album.yearPublished) {
          searchResults.push(album);
        } //end if
      }// end for loop
    } // end else
    return searchResults;
}//end search()



//TESTING
console.log('Testing an object with Black Sabbath and 1987');
console.log(search({artist:'Black Sabbath', yearPublished:'1987'}));
console.log('Testing an object with Black Sabbath and 1988');
console.log(search({artist:'Black Sabbath', yearPublished:'1988'}));
console.log('Testing a null input, should return collection');
console.log(search());
console.log('Testing input objects with null values, should return collection');
console.log(search({artist: null, yearPublished: null}));
console.log(search({artist:'The Beatles', yearPublished: null}));
console.log(search({artist: null, yearPublished: '1967'}));
