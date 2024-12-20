const request = require("../misc/request");
const constants = require("../constants");
const { parseLevel, parseSongs, parseLevelUsers, robtopSplitDict } = require("../parsers");

async function searchLevels(params) {
    let searchParams = {};

    if (params.length) {
        if (!isNaN(parseInt(params.length))) len = parseInt(params.length);
        else searchParams.len = constants.LENGTHS[params.length];
    }


    if (params.demonFilter && params.demonFilter >= 1 && params.demonFilter <= 5) {
        searchParams.diff = -2;
        searchParams.demonFilter = params.demonFilter;
    } else if (params.difficulties && params.difficulties.length > 0) {
        if (params.difficulties.includes(-2)) {
            params.difficulties = params.difficulties.filter(d =>  d !== -2 && d !== -1);

            searchParams.diff = params.difficulties.length > 1 ? params.difficulties.join(",") : params.difficulties.at(0);
        }
    }

    let str = params.query || "";
    switch (params.type) {
        case 5:
            str = params.playerID;
            break;
        case 10:
        case 19:
            str = params.levelIDs.join(",");
            break;
        case 25:
            str = params.listID;
            break;
    }

    searchParams.str = str;

    Object.assign(searchParams, {
        page: params.page || 0,
        type: params.type || params.query ? 0 : 2,
        noStar: Number(!!params.unrated) || 0,
        star: Number(!!params.rated) || 0,
        epic: Number(!!params.epic) || 0,
        legendary: Number(!!params.legendary) || 0,
        mythic: Number(!!params.mythic) || 0,
        coins: Number(!!params.coins) || 0,
        twoPlayer: Number(!!params.twoPlayer) || 0,
        original: Number(!!params.original) || 0,
        followed: params.accountIDs ? params.accountIDs.join(",") : "",
        uncompleted: Number(!!params.uncompleted) || 0,
        onlyCompleted: Number(!!params.completed) || 0,
        completedLevels: params.completed ? `(${params.levelIDs.join(",")})` : "",
        customSong: Number(!!params.customSong) || 0,
        song: Number(params.songID) || 0,
    });

    const { status, data } = await request("getLevels", searchParams);

    if (!status) return;

    let [levels, users, songs] = data.split("#");

    levels = levels.split("|").map(l => parseLevel(l));
    users = parseLevelUsers(users);
    songs = parseSongs(songs);

    return {
        levels,
        users,
        songs
    }
}

async function downloadLevel(id) {
    const { status, data } = await request("downloadLevel", {
        levelID: id,
    });

    if (!status) return;

    let response = {};
    let [level, hash1, hash2, songs, extraArtists] = data.split("#");

    if (level) response.level = parseLevel(level);
    response.hash1 = hash1;
    response.hash2 = hash2;

    if (songs) {
        response.songs = parseSongs(songs);
    }

    if (extraArtists) {
        response.extraArtists = robtopSplitDict(extraArtists, ",");
    }

    return response;
}

async function getDailyLevel(weekly = false) {
    const { status, data } = await request("getDailyLevel", {
        weekly: Number(weekly)
    });

    if (!status) return;

    const [dailyID, timeLeft] = data.split("|");

    return {
        id: Number(dailyID),
        timeLeft: Number(timeLeft)
    }
}

async function reportLevel(levelID) {
    const { status, data } = await request("reportLeve", {
        levelID
    });

    if (!status) return;
    if (data > 0) return data;
}

module.exports = {
    searchLevels,
    downloadLevel,
    getDailyLevel,
    reportLevel
}