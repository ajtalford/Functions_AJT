var slideshow = {
    photoList: ['birds', 'puppies', 'rainbows', 'kittens', 'babies'],

    currentPhotoIndex: 0,

    nextPhoto: function() {
        if(this.currentPhotoIndex < this.photoList.length - 1) {
            this.currentPhotoIndex++;
            console.log('currentPhoto is: '+ this.photoList[this.currentPhotoIndex]);
        } else {
            console.log('End of Slideshow');
        // Automatically pause the slideshow at end of photolist
              this.pause();
        }
    },

    prevPhoto: function() {
        if(this.currentPhotoIndex > 0) {
            this.currentPhotoIndex--;
            console.log('currentPhoto is: ' + this.photoList[this.currentPhotoIndex]);
        } else {
            console.log('Start of Slideshow');
            
        }
    },

    getCurrentPhoto: function() {
        return this.photoList[this.currentPhotoIndex];  
    },
    // Create an empty property named playInterval
    playInterval: null,
    // A play() function that moves to the next photo ever 2000ms until the end.
    play: function() {
        var self = this;
        this.playInterval = setInterval(function(){self.nextPhoto()}, 2000)
    },
    // A pause() function that stops the slideshow
    pause: function() {
        clearInterval(this.playInterval);
    }

}
slideshow.play();