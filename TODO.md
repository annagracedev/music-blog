

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

I probably don't have time but if I have time, add another div ? underneath the current song title with the current song artist in a slightly smaller font

Take photos

Make sure to mark this as under copyright. Music, etc. I mean.

Fix looping. Might need an else if under endedCallback function to handle looping because of the incremented src index?

Yeah, add a little bit of logic to handle the end of the playlist and should be able to handle looping too

# Bug fixes

move playhead in music playlists

Clicking play on playlist controls does not actually play (maybe due to public script issues? ) Odd, it also happens in dev now

I think other js files need to be wrapped in viewtransition

# To launch

Optimize images

Make mp3s private if possible