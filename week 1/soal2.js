class PlaylistMusic {
  //   static playlist = [];
  constructor(playList) {
    this.playList = playList;
    this.currentSong = 0;
  }

  play() { // CURENT SONG
    return `mainkan ${JSON.stringify(this.playList[0])}`;
  }
  next() { // NEXT SONG
    this.currentSong++;
    return (
      "Playing : " +
      [
        this.playList[this.currentSong].title,
        this.playList[this.currentSong].author,
      ]
    );
  }
  previous() { // PREVIOUS SONG
    this.currentSong--;
    return (
      "Playing : " +
      [
        this.playList[this.currentSong].title,
        this.playList[this.currentSong].author,
      ]
    );
  }
  shuffleArray() { // RANDOM SONG 
    for (var i = this.playList.length - 1; i > 0; i--) {
      // Generate random number
      var j = Math.floor(Math.random() * (i + 1));

      var temp = this.playList[i];
      this.playList[i] = this.playList[j];
      this.playList[j] = temp;
    }

    return this.playList;
  }
}
class Music {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

const shawnMendes = new Music("Imagination", "Shawn Mendes");
const jamesArthur = new Music("Can I Be Him", "James Arthur");
const brunoMars = new Music("Grenade", "Bruno Mars");
const edSheeran = new Music("PhotoGraph", "Ed Sheeran");
const deanLewis = new Music("Be Alright", "Dean Lewis");

const playList = new PlaylistMusic([
  shawnMendes,
  jamesArthur,
  brunoMars,
  edSheeran,
  deanLewis,
]);



console.log(playList.play());
console.log(playList.next());
console.log(playList.next());
console.log(playList.next());
console.log(playList.shuffleArray());


