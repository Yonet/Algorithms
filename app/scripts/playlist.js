// You are given a playlist of songs, can you create a system that lets you shuffle the songs (as in, no repeats and a constant random order every loop through the playlist), with options to go back and also to repeat the current song? Followup: How can you optimize for space?
// 

var ShuffleSongs = function(){
	this.played = [];
	this.currentSong = null;
	this.songs = {};
	this.size = 0;
};

ShuffleSongs.prototype.addSong = function(song){
	this.songs[this.size] = song;
	this.size++;
};

ShuffleSongs.prototype.playRandom = function(){
	if(this.size === 0) {
		console.log('no more songs left');
		return;
	}
	var keys = Object.keys(this.songs);
	var ind = Math.floor(Math.random() * this.size);
	var key = keys[ind];
	console.log('ind ', ind, this.songs);
	console.log('playing ', this.songs[key]);
	this.played.push(this.songs[key]);
	delete this.songs[key];
	this.size--;
};

ShuffleSongs.prototype.playPrevious = function(){
	var prev = this.played[this.played.length - 1];
	this.played.push(prev);
}

var shuffle = new ShuffleSongs();

// shuffle.addSong('My');
// shuffle.addSong('Sweet');
// shuffle.addSong('Potato');
// shuffle.addSong('Love');
// shuffle.addSong('You');

// shuffle.playRandom();






