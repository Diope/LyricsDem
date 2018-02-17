# LyricsDem

Users can add songs and lyrics, as well as vote. Created to learn GraphQL, decided on Apollo over Lokka, as Relay looked WAY too intimidating atm. Created an earlier GraphQL project to learn the basics, wanted to translate that to something more than dealing with the GraphiQL interface, which is great for building queries and mutations.

To run, clone then run `yarn install` (or npm install), then run `yarn run dev`

## Feb 14, 2018
* Deleted entire Lyrics branch to start from scratch as there was a rendering error I could not figure out.
* Turns out the error was a bug with Apollo, as a work around, make sure the relavent queries and mutations call the same variables. Example being `fetchSong` and `addLyricMutation` both need to have the same 3 variables.

## Feb 12, 2018
* Worked on song and lyric display list

