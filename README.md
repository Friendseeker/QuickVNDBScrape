# QuickVNDBScrape

## Tech Stack

Node.js with Typescript

REST API query

## Purpose

Small CLI Project (<100 lines) that prints out a list of games from VNDB (Visual Novel Database) that shares the same Voice Actor and Tag.

Made for fun

## How to use

- Clone the project
- Run src/index.ts
- To modify default Voice Actor and Tag, edit the default Voice Actor id (sid) and Tag id (gid).
  - Both IDs are located in the last line of src/index.ts, as argument for main() function.
  - Both ID can be find on the corresponding VNDB page for Voice Actors and Tags.
