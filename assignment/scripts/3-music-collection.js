console.log('***** Music Collection *****')

let collection = [];

//Track Arrays
let eternolIdol = [{title: 'The Shining', duration: '6:00'}, {title: 'Ancient Warrior', duration: '5:28'},
{title: 'Hard Life to Love', duration: '5:00'}, {title: 'Glory Ride', duration: '4:49'},
{title: 'Born to Lose', duration: '3:43'}, {title: 'Nightmare', duration: '5:19'},
{title: 'Scarlet Pimpernel', duration: '2:05'}, {title: 'Lost Forever', duration: '4:43'},
{title: 'Eternal Idol', duration: '6:33'}];

let pastLives = [{title: `Tomorrow's Dream`, duration: '3:03'}, {title: 'Sweet Leaf', duration: '5:26'},
{title: 'Killing Yourself to Live', duration: '5:29'}, {title: 'Cornucopia', duration: '3:57'},
{title: 'Snowblind', duration: '4:46'}, {title: 'Embryo', duration: '4:33'},
{title: 'War Pigs', duration: '7:36'}, {title: 'Wicked World', duration: '18:55'},
{title: 'Paranoid', duration: '3:14'}, {title: 'Hand of Doom', duration: '8:25'},
{title: 'Hole in the Sky', duration: '4:46'}, {title: 'Symptom of the Universe', duration: '4:52'},
{title: 'Megalomania', duration: '9:53'}, {title: 'Iron Man', duration: '6:25'},
{title: 'Black Sabbath', duration: '8:23'}, {title: 'N.I.B', duration: '5:31'},
{title: 'Behind the Wall of Sleep', duration: '5:03'}, {title: 'Fairies Wear Boots', duration: '6:39'}];

let songsAboutJane = [{title: 'Harder to Breathe', duration: '2:53'}, {title: 'This Love', duration: '3:26'},
{title: 'Shiver', duration: '2:59'}, {title: 'She Will Be Loved', duration: '4:17'},
{title: 'Tangled', duration:'3:18'}, {title: 'The Sun', duration: '4:11'},
{title: 'Must Get Out', duration: '3:59'}, {title: 'Sunday Morning', duration: '4:04'},
{title: 'Secret', duration: '4:55'}, {title: 'Through with You', duration: '3:01'},
{title: 'Not Coming Home', duration: '4:21'}, {title: 'Sweetest Goodbye', duration: '4:30'}];

let abbeyRoad =[{title: 'Come Together', duration: '4:19'}, {title: 'Something', duration: '3:02'},
 {title: `Maxwell's Silver Hammer`, duration: '3:27'}, {title: 'Oh! Darling', duration: '3:27'},
 {title: `Octopus's Garden`, duration: '2:51'}, {title: 'I Want You', duration: '7:47'},
 {title: 'Here Comes the Sun', duration: '3:05'}, {title: 'Because', duration: '2:45'},
 {title: 'You Never Give Me Your Money', duration: '4:03'}, {title: 'Sun King', duration: '2:26'},
 {title: 'Mean Mr. Mustard', duration: '1:06'}, {title: 'Polythene Pam', duration: '1:13'},
 {title: 'She Came In Through the Bathroom Window', duration: '1:58'}, {title: 'Golden Slumbers', duration: '1:31'},
 {title: 'Carry That Weight', duration: '1:36'}, {title: 'The End', duration: '2:05'},
 {title: 'Her Majesty', duration: '0:23'}];

let nevermind = [{title: 'Smells Like Teen Spirit', duration: '5:01'}, {title: 'n Bloom', duration: '4:14'},
{title: 'Come as You Are', duration: '3:39'}, {title: 'Breed', duration: '3:03'},
{title: 'Lithium', duration: '4:17'}, {title: 'Polly', duration: '2:57'},
{title: 'Territorial Pissings', duration: '2:22'}, {title: 'Drain You', duration: '3:43'},
{title: 'Lounge Act', duration: '2:36'}, {title: 'Stay Away', duration: '3:32'},
{title: 'On a Plain', duration: '3:16'}, {title: 'omething in the Way', duration: '3:52'},
{title: 'Endless, Nameless', duration: '6:43'}];

let sgtPeppers = [{title: `Sgt. Pepper's Lonely Hearts Club Band`, duration: '2:00'}, {title: 'With a Little Help from My Friends', duration: '2:42'},
{title: 'Lucy in the Sky with Diamonds', duration: '3:28'}, {title: 'Getting Better', duration: '2:48'},
{title: 'Fixing a Hole', duration: '2:36'}, {title: `She's Leaving Home`, duration: '3:25'},
{title: 'Being for the Benefit of Mr. Kite!', duration: '2:37'}, {title: 'Within You Without You', duration: '5:05'},
{title: `When I'm Sixty-Four`, duration: '2:37'}, {title: 'Lovely Rita', duration: '2:42'},
{title: 'Good Morning Good Morning', duration: '2:42'}, {title: `Sgt. Pepper's Lonely Hearts Club Band (Reprise)`, duration: '1:18'},
{title: 'A Day in the Life', duration: '5:38'}];

//a function to accept the artist, title, and yearpublished
//then create and object with those properties and add it to the Collection

function addToCollection (title, artist, yearPublished, trackArray) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: trackArray
  }//end object
  collection.push(album);
  console.log(`${title} was added to collection.`);
  return album;

}//end addToCollection

//Testing - Adding multiple album and then loggin the collection
addToCollection('The Eternol Idol', 'Black Sabbath', '1987', eternolIdol);
addToCollection('Past Lives', 'Black Sabbath', '2002', pastLives);
addToCollection('Songs About Jane', 'Maroon 5', '2002', songsAboutJane);
addToCollection('Abbey Road', 'The Beatles', '1969', abbeyRoad);
addToCollection('Nevermind', 'Nirvana', '1969', nevermind);
addToCollection(`Sgt. Pepper's Lonely Hearts Club Band`, 'The Beatles', '1967', sgtPeppers);
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
// the function should return collection if the input in null or has null values

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
console.log(search({}));
console.log('Testing input objects with null values, should return collection');
console.log(search({artist: null, yearPublished: null}));
console.log(search({artist:'The Beatles', yearPublished: null}));
console.log(search({artist: null, yearPublished: '1967'}));
