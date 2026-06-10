

# To do

When clicking on a song, it adds 

mejs__playlist-selected

as a class to the li entry

and when clicking on another it removes this from the previously selected one and adds it to the one clicked on

When songs advance from mejs__prev-button, mejs__next-button, or automatically advancing, it does not do this

It looks like the problem is that the code to play from those places is missing the logic to remove/add these classes

It happens in these three player object functions:
endedCallback
nextPlaylistCallback 
prevPlaylistCallback

Take photos

Make sure to mark this as under copyright.

Fix looping.

# Bug fixes

move playhead in music playlists

Clicking play on playlist controls does not actually play (maybe due to public script issues? ) Odd, it also happens in dev now

I think other js files need to be wrapped in viewtransition

Clicking on the right song places a span so that may be a good starting point

# To launch

Optimize images

Make mp3s private if possible