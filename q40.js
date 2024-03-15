/**Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album. */
var Album = /** @class */ (function () {
    function Album(artist, title, tracks) {
        this.artist = artist;
        this.title = title;
        this.track = tracks;
    }
    Album.prototype.description = function () {
        console.log("Artist Name is ".concat(this.artist, ",Title Name is ").concat(this.title, ", with ").concat(this.track, "Tracks"));
    };
    return Album;
}());
var album1 = new Album("Artist1", "Album1", 10);
var album2 = new Album("Artist2", "Album2");
var album3 = new Album("Artist3", "Album3", 15);
album1.description();
album2.description();
album3.description();