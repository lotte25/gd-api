# GD API
Geometry Dash library made to interact with the servers without much hassle.

> Currently supports the basic requests: user & level search, user profile and level download

## TODO (not in order)
- [ ] Support account login & register
- [ ] Add more level and user endpoints
- [ ] Add support for lists (i was lazy)
- [ ] Add support for private servers even though i don't find it useful anymore
- [ ] Add support for exporting levels to `.gmd` format
- [ ] Port this to typescript once i learn it

## Examples
So here it goes.


### Searching levels

> Refer to [gd.docs](https://wyliemaster.github.io/gddocs/#/endpoints/levels/getGJLevels21) for params.

> If you set demonFilter to something between the range of 1 and 5, search type -2 (demon filter) will be set automatically.

```js
const gd = require("./src");

async function main() {
    const request = await gd.searchLevels({
        query: "Bloodbath"
    });

    console.log(request)
}
```
<details>
<summary>Level search response</summary>

```js
{
  "levels": [
    {
      "levelID": 10565740,
      "levelName": "Bloodbath",
      "description": "Whose blood will be spilt in the Bloodbath? Who will the victors be? How many will survive? Good luck...",
      "version": 3,
      "playerID": 503085,
      "difficulty": 50,
      "downloads": 90519065,
      "completions": 0,
      "officialSong": 0,
      "gameVersion": 21,
      "likes": 4274478,
      "length": {
        "name": "LONG",
        "int": 3
      },
      "demon": true,
      "stars": 10,
      "featureScore": 10330,
      "auto": false,
      "copiedID": 7679228,
      "twoPlayer": false,
      "customSongID": 467339,
      "coins": 0,
      "verifiedCoins": false,
      "starsRequested": 0,
      "epic": 0,
      "demonDifficulty": 6,
      "isGauntlet": false,
      "objects": 24746,
      "editorTime": 1,
      "editorTimeOnCopies": 2,
      "lowDetailMode": false
    },
    {
      "levelID": 10792915,
      "levelName": "Bloodbath Auto",
      "description": "Original by Riot and more. V14 Final update.",
      "version": 6,
      "playerID": 7577674,
      "difficulty": 30,
      "downloads": 7634149,
      "completions": 0,
      "officialSong": 0,
      "gameVersion": 21,
      "likes": 342733,
      "length": {
        "name": "LONG",
        "int": 3
      },
      "demon": false,
      "stars": 0,
      "featureScore": 0,
      "auto": false,
      "copiedID": 10629260,
      "twoPlayer": false,
      "customSongID": 467339,
      "coins": 0,
      "verifiedCoins": false,
      "starsRequested": 1,
      "epic": 0,
      "demonDifficulty": 0,
      "isGauntlet": false,
      "objects": 25102,
      "editorTime": 1,
      "editorTimeOnCopies": 2,
      "lowDetailMode": false
    },
    {
      "levelID": 21761387,
      "levelName": "Bloodbath Z",
      "description": "Remake of BB, but Shorter and much easier XD More of a gameplay level!  Just a fun easy demon. Verified By Xiodazer! Enjoy :D",
      "version": 1,
      "playerID": 3277407,
      "difficulty": 20,
      "downloads": 9987151,
      "completions": 0,
      "officialSong": 0,
      "gameVersion": 20,
      "likes": 333089,
      "length": {
        "name": "LONG",
        "int": 3
      },
      "demon": true,
      "stars": 10,
      "featureScore": 17840,
      "auto": false,
      "copiedID": 0,
      "twoPlayer": false,
      "customSongID": 223469,
      "coins": 3,
      "verifiedCoins": true,
      "starsRequested": 10,
      "epic": 0,
      "demonDifficulty": 4,
      "isGauntlet": false,
      "objects": 0,
      "editorTime": 1,
      "editorTimeOnCopies": 2,
      "lowDetailMode": false
    },
    ...
  ],
  "users": [
    {
      "userID": 503085,
      "username": "Riot",
      "accountID": 37415
    },
    {
      "userID": 3277407,
      "username": "Zyzyx",
      "accountID": 88354
    },
    {
      "userID": 4957748,
      "username": "jukaras",
      "accountID": 215350
    },
    {
      "userID": 5936733,
      "username": "Luis8380",
      "accountID": 871302
    }
  ],
  "songs": {
    "223469": {
      "name": "ParagonX9 - HyperioxX",
      "artist": {
        "id": 31,
        "name": "ParagonX9"
      },
      "size": 3.77,
      "isVerified": true,
      "link": "http://audio.ngfiles.com/223000/223469_ParagonX9___HyperioxX.mp3",
      "new": false,
      "videoID": "",
      "youtubeURL": ""
    },
    "467339": {
      "name": "At the Speed of Light",
      "artist": {
        "id": 52,
        "name": "Dimrain47"
      },
      "size": 9.56,
      "isVerified": true,
      "link": "https://geometrydashcontent.b-cdn.net/songs/467339.mp3",
      "new": false,
      "videoID": "",
      "youtubeURL": ""
    },
    "706340": {
      "name": "-At the Speed of Light- (8 bit Remix)",
      "artist": {
        "id": 46724,
        "name": "ThaPredator"
      },
      "size": 4.78,
      "isVerified": true,
      "link": "http://audio.ngfiles.com/706000/706340_-At-the-Speed-of-Light--8-.mp3",
      "new": false,
      "videoID": "",
      "youtubeURL": ""
    }
  }
}
```
</details>


### Downloading a level
> Refer to [gd.docs](https://wyliemaster.github.io/gddocs/#/resources/server/level) for property names and types

```js
const gd = require("./src");

async function main() {
    const request = await gd.downloadLevel(10565740);

    console.log(request)
}
```
<details>
<summary>Level response</summary>

```json
{
  "level": {
    "levelID": 10565740,
    "levelName": "Bloodbath",
    "description": "Whose blood will be spilt in the Bloodbath? Who will the victors be? How many will survive? Good luck...",
    "version": 3,
    "playerID": 503085,
    "difficulty": 50,
    "downloads": 90519296,
    "completions": 0,
    "officialSong": 0,
    "gameVersion": 21,
    "likes": 4274486,
    "length": {
      "name": "LONG",
      "int": 3
    },
    "demon": true,
    "stars": 10,
    "featureScore": 10330,
    "auto": false,
    "copiedID": 7679228,
    "twoPlayer": false,
    "customSongID": 467339,
    "coins": 0,
    "verifiedCoins": false,
    "starsRequested": 0,
    "epic": 0,
    "demonDifficulty": 6,
    "isGauntlet": false,
    "objects": 24746,
    "editorTime": 582,
    "editorTimeOnCopies": 0,
    "levelString": "H4sIAAAAAAAAC-x9SdIsKY_ghd4Lc2awf1VnqAPkAfoKbX32BpcEQkgeQ_aqrRaZ7wtJzKAZ_H_9d6h_3D_XP77_F_p_8Z-_7p_8j7uu65_yj_vHpQ50tf-v_uP-t07pTEp3-U7rU_rHOfjHwz8AXFU0qsLxKmJUWvP_DKpP-xY_pPyMzKtkYyh9XG0MtbG2wwP19dm8JD5YJ_s2aD-qJhvV_Plf_-XCn-rGv-nP_U-Gf-Ifl8rLh_9z_Z_xR8n3H_XlK_6RAdVe8Rp_5OuVbkh2L38TZ_-6PP5RABVeMd1_xJe_8I8GqPTK5f4jvyKUKi9X8Y8GpXqjAKFGy_W6Cv5R4Q_3yg7_qKOePhYYUflzjXHhP3X889-h3b_8TRDuv2_Ef8X7_4B1F_zj...",
    "uploadDate": "9 years",
    "updateDate": "4 years",
    "lowDetailMode": false,
    "verificationTime": "0"
  },
  "hash1": "5bbeae4fa2c332341d37120d191ff2359e18d182",
  "hash2": "458ac958a2849253e834c8741e2721098a468707"
}
```
</details>

### Getting the daily level
> If you want to get the weekly level, add `true` as the first argument. `false` is the default value. 

> `timeLeft` is in seconds btw 

```js
const gd = require("./src");

async function main() {
    const request = await gd.getDailyLevel(false);

    console.log(request)
}
```
<details>
<summary>Daily level response</summary>

```json
{
  "id": 2946,
  "timeLeft": 59660
}
```
</details>

### Searching users
> [gd.docs](https://wyliemaster.github.io/gddocs/#/endpoints/users/getGJUsers20) 

> Just so you know... This doesn't return an `user object` as the docs says, but returns this:
```ts
{
    userName: string,
    userID: number,
    stars: number,
    demons: number,
    ranking: number,
    creatorpoints: number,
    iconID: number,
    color: number,
    color2: number,
    secretCoins: number,
    iconType: number,
    special: number,
    accountID: number,
    userCoins: number,
    moons: number
}
```

```js
const gd = require("./src");

async function main() {
    const request = await gd.searchUsers("mbed");

    console.log(request)
}
```

<details>
<summary>User search response</summary>

```json
{
  "users": [
    {
      "userName": "mbed",
      "userID": 7381956,
      "stars": 69462,
      "demons": 2505,
      "ranking": 0,
      "creatorpoints": 13,
      "iconID": 110,
      "color": 3,
      "color2": 12,
      "secretCoins": 164,
      "iconType": 0,
      "special": 2,
      "accountID": 1403996,
      "userCoins": 7732,
      "moons": 1085
    }
  ],
  "total": "999",
  "offset": "0",
  "pageSize": "10"
}
``` 
</details>

### Getting some account profile
> [gd.docs](https://wyliemaster.github.io/gddocs/#/resources/server/user)

```js
const gd = require("./src");

async function main() {
    const request = await gd.profileInfo(37415);

    console.log(request)
}
```
<details>
<summary>Profile response</summary>

```json
{
  "userName": "Riot",
  "userID": 503085,
  "stars": 17833,
  "demons": 526,
  "ranking": 0,
  "accountHighlight": 0,
  "creatorpoints": 6,
  "color": 7,
  "color2": 3,
  "secretCoins": 149,
  "iconType": 0,
  "special": 0,
  "accountID": 37415,
  "usercoins": 944,
  "messageState": 1,
  "friendsState": 1,
  "youTube": "UCkyi5MwbCz1TnV-Mq3c0yNg",
  "accIcon": 35,
  "accShip": 10,
  "accBall": 10,
  "accBird": 1,
  "accDart": 1,
  "accRobot": 1,
  "accStreak": 0,
  "accGlow": 0,
  "isRegistered": true,
  "globalRank": 7667,
  "friendstate": 0,
  "messages": 0,
  "friendRequests": 0,
  "newFriends": 0,
  "NewFriendRequest": false,
  "accSpider": 1,
  "twitter": "xriott",
  "twitch": "riot",
  "diamonds": "4339",
  "accExplosion": "15",
  "modlevel": 0,
  "commentHistoryState": 0,
  "color3": 15,
  "moons": 0,
  "accSwing": 1,
  "accJetpack": 1,
  "demonCount": [
    "242",
    "148",
    "55",
    "34",
    "7",
    "0",
    "0",
    "0",
    "0",
    "0",
    "3",
    "7"
  ],
  "classicLevels": [
    "365",
    "164",
    "275",
    "734",
    "736",
    "245",
    "44",
    "40"
  ],
  "platformerLevels": [
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0"
  ]
}
```
</details>
