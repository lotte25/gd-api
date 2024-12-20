const gd = require("./src");

(async () => {
/*     const users = await gd.searchUsers("riot");

    console.log(users);
 */
    const { levels, users, songs } = await gd.searchLevels({
        query: "ncs"
    });

    for (const level of levels) {
        const creator = users.find(u => u.userID === level.playerID)
        let text = `- ${level.levelName} by ${creator?.username || "-"}`;
        text += `\nSong: ${(songs[level.customSongID])?.name}`
        console.log(text);
        console.log(" - - - - - - - - - - ");
    }
})()