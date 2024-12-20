const request = require("../misc/request");
const { parseUsers, parseUser } = require("../parsers");

async function profileInfo(accountID) {
    const { status, data } = await request("getUserInfo", {
        targetAccountID: accountID
    });

    if (!status) return;

    return parseUser(data);
};

async function searchUsers(query) {
    const { status, data } = await request("getUsers", {
        str: query
    });

    if (!status) return;
    
    let [users, pages] = data.split("#");

    users = users ? parseUsers(users.split("|")) : [];
    const [total, offset, pageSize] = pages.split(":");


    return {
        users,
        total,
        offset,
        pageSize
    };
};

module.exports = {
    searchUsers,
    profileInfo
};
