const SECRETS = {
    COMMON: "Wmfd2893gb7",
    ACCOUNT: "Wmfv3899gc9",
    DELETE: "Wmfv2898gc9",
    MOD: "Wmfp3879gc3",
    ADMIN: "Wmfx2878gb9"
};

const KEYS = {
    SAVE_DATA: "\x0B",
    MESSAGES: "14251",
    VAULT_CODES: "19283",
    CHALLENGES: "19847",
    LEVEL_PASSWORD: "26364",
    COMMENT: "29481",
    ACCOUNT_PASSWORD: "37526",
    LEVEL_LEADERBOARD: "39673",
    LEVEL: "41274",
    LOAD_DATA: "48291",
    RATE: "58281",
    CHEST_REWARDS: "59182",
    STAT_SUBMISSION: "85271"
};

const LENGTHS = {
    0: "TINY",
    1: "SHORT",
    2: "MEDIUM",
    3: "LONG",
    4: "XL",
    5: "PLATFORMER",
    TINY: 0,
    SHORT: 1,
    MEDIUM: 2,
    LONG: 3,
    XL: 4,
    PLATFORMER: 5
};

const ICON_TYPES = {
    0: "CUBE",
    1: "SHIP",
    2: "BALL",
    3: "UFO",
    4: "WAVE",
    5: "ROBOT",
    6: "SPIDER",
    7: "SWING",
    8: "JETPACK",
    CUBE: 0,
    ICON: 0,
    SHIP: 1,
    BALL: 2,
    BIRD: 3,
    UFO: 3,
    WAVE: 4,
    DART: 4,
    ROBOT: 5,
    SPIDER: 6,
    SWING: 7,
    SWINGCOPTER: 7,
    JETPACK: 8
};

const SALTS = {
    LEVEL: "xI25fpAapCQg",
    COMMENT: "xPT6iUrtws0J",
    GJP2: "mI29fmAnxgTs",
    STAT_SUBMISSION: "xI35fsAapCRg",
    LIKE_OR_RATE: "ysg6pUrtjn0J",
    LEVEL_LEADERBOARDS: "yPg6pUrtWn0J",
    REWARDS: "pC26fpYaQCtg",
    CHALLENGES: "oC36fpYaPtdg"
};

const DEFAULT_ENDPOINTS = {
    "getLevels": "getGJLevels21.php",
    "getDailyLevel": "getGJDailyLevel.php",
    "getMapPacks": "getGJMapPacks21.php",
    "getGauntlets": "getGJGauntlets21.php",
    "downloadLevel": "downloadGJLevel22.php",
    "reportLevel": "reportGJLevel.php",
    "getUsers": "getGJUsers20.php",
    "getUserInfo": "getGJUserInfo20.php",
    "getAccountComments": "getGJAccountComments20.php",
    "getComments": "getGJComments21.php",
    "registerAccount": "accounts/registerGJAccount.php",
    "loginAccount": "accounts/loginGJAccount.php",
    "getCommentHistory": "getGJCommentHistory.php",
    "getSongInfo": "getGJSongInfo.php",
    "updateUserScore": "updateGJUserScore22.php",
    "getRewards": "getGJRewards.php",
    "requestModAccess": "requestUserAccess.php",
    "getLeaderboards": "getGJScores20.php",
    "deleteLevel": "deleteGJLevelUser20.php",
    "uploadAccountComment": "uploadGJAccComment20.php",
    "deleteAccountComment": "deleteGJAccComment20.php",
    "uploadComment": "uploadGJComment21.php",
    "deleteComment": "deleteGJComment20.php",
    "getTopArtists": "getGJTopArtists.php",
    "getLists": "getGJLevelLists.php",
    "likeItem": "likeGJItem211.php",
    "rateLevel": "rateGJStars211.php",
    "rateDemon": "rateGJDemon21.php",
    "updateDescription": "updateGJDesc20.php",
    "uploadLevel": "uploadGJLevel21.php",
    "deleteLevel": "deleteGJLevelUser20.php",
    "getUserList": "getGJUserList20.php",
    "loadSaveData": "accounts/syncGJAccountNew.php",
    "updateAccountSettings": "updateGJAccSettings20.php",
    "getMessages": "getGJMessages20.php",
    "readMessage": "downloadGJMessage20.php",
    "sendMessage": "uploadGJMessage20.php",
    "deleteMessage": "deleteGJMessages20.php",
    "blockUser": "blockGJUser20.php",
    "unblockUser": "unblockGJUser20.php",
    "deleteFriendRequests": "deleteGJFriendRequests20.php",
    "sendFriendRequest": "uploadFriendRequest20.php",
    "getFriendRequests": "getGJFriendRequests20.php",
    "readFriendRequest": "readGJFriendRequest20.php",
    "acceptFriendRequest": "acceptGJFriendRequest20.php",
    "removeFriend": "removeGJFriend20.php",
    "uploadList": "uploadGJLevelList.php",
    "deleteList": "deleteGJLevelList.php",
    "getAccountURL": "getAccountURL.php",
    "getLevelLeaderboards": "getGJLevelScores211.php",
    "getPlatformerLevelLeaderboards": "getGJLevelScoresPlat.php",
    "backupSaveData": "backupGJAccountNew.php",
    "getContentURL": "getCustomContentURL.php",
    "musicLibraryVersion": "music/musiclibrary_version_02.txt",
    "musicLibraryVersionOld": "music/musiclibrary_version.txt",
    "sfxLibraryVersion": "sfx/sfxlibrary_version.txt",
    "musicLibrary": "music/musiclibrary_02.dat",
    "musicLibraryOld": "music/musiclibrary.dat",
    "sfxLibrary": "sfx/sfxlibrary.dat",
    "getChallenges": "getGJChallenges.php",
    "getSecretReward": "getGJSecretReward.php"
};

const DEFAULT_HEADERS_22 = {
    "User-Agent": "",
    "Accept": "*/*",
    "Content-Type": "application/x-www-form-urlencoded",
    "Cookie": "gd=1;",
    "Host": "www.boomlings.com"
};

const DIFFICULTIES = {
    "-1": "AUTO",
    0: "NA",
    1: "EASY",
    2: "NORMAL",
    3: "HARD",
    4: "HARDER",
    5: "INSANE",
    6: "EASY_DEMON",
    7: "MEDIUM_DEMON",
    8: "HARD_DEMON",
    9: "INSANE_DEMON",
    10: "EXTREME_DEMON",
    AUTO: -1,
    NA: 0,
    EASY: 1,
    NORMAL: 2,
    HARD: 3,
    HARDER: 4,
    INSANE: 5,
    EASY_DEMON: 6,
    MEDIUM_DEMON: 7,
    HARD_DEMON: 8,
    INSANE_DEMON: 9,
    EXTREME_DEMON: 10
};

const VERSIONS = {
    gameVersion: 22,
    binaryVersion: 43
};

const DEFAULT_SERVER = "https://www.boomlings.com/database";

const ITEMS = {
    FIRE: 1,
    ICE: 2,
    POISON: 3,
    SHADOW: 4,
    LAVA: 5,
    KEY: 6,
    EARTH: 10,
    BLOOD: 11,
    METAL: 12,
    LIGHT: 13,
    SOUL: 14
};

module.exports = {
    SECRETS,
    KEYS,
    LENGTHS,
    ICON_TYPES,
    SALTS,
    DEFAULT_ENDPOINTS,
    DEFAULT_HEADERS_22,
    DIFFICULTIES,
    VERSIONS, 
    DEFAULT_SERVER,
    ITEMS
};