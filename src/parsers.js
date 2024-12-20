const { LENGTHS, KEYS } = require("./constants");
const XOR = require("./misc/xor");

const xor = new XOR();

function robtopSplit(string, separator) {
    let map = new Map();
    let array = string.split("#")[0].split("|")[0].split(separator || ":");
    for (let i = 0; i < array.length; i += 2) {
        map.set(array[i], array[i + 1]);
    };

    return map;
};

function robtopSplitDict(string, separator) {
    const map = new Map();
    const arr = string.split(separator);

    for (let i = 0; i < arr.length; i += 2) {
        map.set(arr[i], arr[i + 1]);
    };

    return map;
};

function parseSongs(str) {
    let songs = {};
    for (let song of str.split("~:~")) {
        const response = robtopSplitDict(song, "~|~");

        songs[response.get("1")] = {
            name: response.get("2"),
            artist: {
                id: Number(response.get("3")),
                name: response.get("4")
            },
            size: Number(response.get("5")),
            isVerified: !!Number(response.get("8")),
            link: decodeURIComponent(response.get("10")),
            new: !!Number(response.get("13"))
        };


        if (response.has("6")) songs[response.get("1")].videoID = response.get("6");
        if (response.has("7")) songs[response.get("1")].youtubeURL = response.get("7");
        if (response.has("9")) songs[response.get("1")].songPriority = Number(response.get("9"));
        if (response.has("11")) songs[response.get("1")].nongEnum = Number(response.get("11")) // 0: none, 1: NCS
        if (response.has("12")) songs[response.get("1")].extraArtistIDs = response.get("12").split(".").map((id) => Number(id));
        if (response.has("14")) songs[response.get("1")].newType = Number(response.get("14")) // 0: Yellow, 1: Blue
        if (response.has("15")) songs[response.get("1")].extraArtistNames = response.get("15");
    };

    return songs;
};

function parseLevel(str) {
    const splitted = robtopSplit(str, ":");

    // Available only when downloading the level
    const levelString = splitted.get("4");
    const password = splitted.has("27") ? xor.decrypt(splitted.get("27"), KEYS.LEVEL_PASSWORD) : "";
    const uploadDate = splitted.get("28");
    const updateDate = splitted.get("29");
    const lowDetailMode = !!Number(splitted.get("40"));
    const songIDs = splitted.get("52")?.split(",");
    const sfwIDs = splitted.get("53")?.split(",");

    // Verification time in frames (at 240 ticks)
    const verificationTime = splitted.get("57");
    // Available when the level is a daily or weekly
    const dailyNumber = Number(splitted.get("41"));

    let levelData = {
        levelID: Number(splitted.get("1")),
        levelName: splitted.get("2"),
        description: Buffer.from(splitted.get("3"), "base64").toString("utf-8"),
        version: Number(splitted.get("5")),
        playerID: Number(splitted.get("6")),
        difficulty: Number(splitted.get("9")),
        downloads: Number(splitted.get("10")),
        completions: Number(splitted.get("11")) || 0,
        officialSong: Number(splitted.get("12")),
        gameVersion: Number(splitted.get("13")),
        likes: Number(splitted.get("14")),
        length: {
            name: LENGTHS[Number(splitted.get("15"))],
            int: Number(splitted.get("15"))
        },
        demon: !!Number(splitted.get("17")),
        stars: Number(splitted.get("18")),
        featureScore: Number(splitted.get("19")),
        auto: !!Number(splitted.get("25")),
        copiedID: Number(splitted.get("30")) || 0,
        twoPlayer: !!Number(splitted.get("31")),
        customSongID: Number(splitted.get("35")) || 0,
        coins: Number(splitted.get("37")),
        verifiedCoins: !!Number(splitted.get("38")),
        starsRequested: Number(splitted.get("39")),
        epic: Number(splitted.get("42")), // 0: none, 1: epic, 2: legendary, 3: mythic,
        demonDifficulty: Number(splitted.get("43")), // 3: easy, 4: medium, 0: hard, 5: insane, 6: extreme
        isGauntlet: !!Number(splitted.get("44")),
        objects: Number(splitted.get("45")), // capped at 65535,
        editorTime: Number(splitted.get("46")),
        editorTimeOnCopies: Number(splitted.get("47")),
    };

    if (levelString) levelData.levelString = levelString;
    if (password) levelData.password = password;
    if (uploadDate) levelData.uploadDate = uploadDate;
    if (updateDate) levelData.updateDate = updateDate;
    if (lowDetailMode !== undefined) levelData.lowDetailMode = lowDetailMode;
    if (songIDs) levelData.songIDs = songIDs;
    if (sfwIDs) levelData.sfwIDs = sfwIDs;
    if (verificationTime) levelData.verificationTime = verificationTime;
    if (dailyNumber) levelData.dailyNumber = dailyNumber;

    return levelData;
};

function parseUser(str) {
    const splitted = robtopSplit(str, ":");

    return {
        userName: splitted.get("1"),
        userID: Number(splitted.get("2")),
        stars: Number(splitted.get("3")),
        demons: Number(splitted.get("4")),
        ranking: Number(splitted.get("6")) || 0,
        accountHighlight: Number(splitted.get("7")) || 0,
        creatorpoints: Number(splitted.get("8")),
        color: Number(splitted.get("10")),
        color2: Number(splitted.get("11")),
        secretCoins: Number(splitted.get("13")),
        iconType: Number(splitted.get("14")) || 0,
        special: Number(splitted.get("15")) || 0,
        accountID: Number(splitted.get("16")),
        usercoins: Number(splitted.get("17")),
        messageState: Number(splitted.get("18")),
        friendsState: Number(splitted.get("19")),
        youTube: splitted.get("20"),
        accIcon: Number(splitted.get("21")),
        accShip: Number(splitted.get("22")),
        accBall: Number(splitted.get("23")),
        accBird: Number(splitted.get("24")),
        accDart: Number(splitted.get("25")),
        accRobot: Number(splitted.get("26")),
        accStreak: Number(splitted.get("27")) || 0,
        accGlow: Number(splitted.get("28")),
        isRegistered: !!Number(splitted.get("29")),
        globalRank: Number(splitted.get("30")),
        friendstate: Number(splitted.get("31")), // 0: none, 1: already friend, 3: sent friend request, 4: account sent you a request
        messages: Number(splitted.get("38")) || 0,
        friendRequests: Number(splitted.get("39")) || 0,
        newFriends: Number(splitted.get("40")) || 0,
        NewFriendRequest: !!Number(splitted.get("41")),
        age: splitted.get("42"),
        accSpider: Number(splitted.get("43")),
        twitter: splitted.get("44"),
        twitch: splitted.get("45"),
        diamonds: splitted.get("46"),
        accExplosion: splitted.get("48"),
        modlevel: Number(splitted.get("49")),
        commentHistoryState: Number(splitted.get("50")), // 0: all, 1: only friends, 2: none
        color3: Number(splitted.get("51")),
        moons: Number(splitted.get("52")),
        accSwing: Number(splitted.get("53")),
        accJetpack: Number(splitted.get("54")),
        demonCount: splitted.get("55")?.split(","), // easy, medium, hard, insane, extreme, easy plat, medium plat, hard plat, insane plat, extreme plat
        classicLevels: splitted.get("56")?.split(","), // auto, easy, normal, hard, harder, insane, daily, gauntlet
        platformerLevels: splitted.get("57")?.split(",") // auto, easy, normal, hard, harder, insane 
    };

};

function parseUsers(arr) {
    let users = [];
    
    for (const str of arr) {
        const splitted = robtopSplit(str);

        users.push({
            userName: splitted.get("1"),
            userID: Number(splitted.get("2")),
            stars: Number(splitted.get("3")),
            demons: Number(splitted.get("4")),
            ranking: Number(splitted.get("6")),
            creatorpoints: Number(splitted.get("8")),
            iconID: Number(splitted.get("9")),
            color: Number(splitted.get("10")),
            color2: Number(splitted.get("11")),
            secretCoins: Number(splitted.get("13")),
            iconType: Number(splitted.get("14")),
            special: Number(splitted.get("15")),
            accountID: Number(splitted.get("16")),
            userCoins: Number(splitted.get("17")),
            moons: Number(splitted.get("52"))
        });
    };

    return users;
};

function parseLevelUsers(str) {
    const raw = str.split("|");
    const users = [];
    
    for (let i of raw) {
        const user = i.split(":");
        users.push({
            userID: Number(user[0]),
            username: user[1],
            accountID: Number(user[2]) || 0 
        });
    };

    return users;
};

module.exports = {
    robtopSplit,
    robtopSplitDict,
    parseLevel,
    parseUser,
    parseUsers,
    parseLevelUsers,
    parseSongs
};