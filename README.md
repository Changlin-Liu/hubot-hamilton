# hubot-hamilton

Hamilton motivation.

Currently only replies with a random lyric - might eventually be expanded to
support memes and da gifs, nah mean?

All lyrics can be found under `resources/lyrics.json`.

## Installation

In hubot project repo, run:

`npm install hubot-hamilton --save`

Then add **hubot-hamilton** to your `external-scripts.json`:

```json
[
  "hubot-hamilton"
]
```

## Sample Interaction

Can specify either `hubot hamilton` or `hubot hamilton <character-name>`

```
user1>> hubot hamilton
hubot>> I think your pants look hot

user2>> hubot hamilton mulligan
hubot>> That's right - HERCULES MULLIGAN !!
```
