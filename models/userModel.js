const { isEmpty } = require("lodash");

exports.findOne = async (where = {}, orderBy = "order by users.created_at desc", gropuBy = "") => {
    let filterdWhere = "";
    let condition = [];

    if (!isEmpty(where)) {
        filterdWhere = "where ";

        for (let i in Object.keys(where)) {
            condition.push(` users.${Object.keys(where)[i]}="${Object.values(where)[i]}" `);
        }
    }

    filterdWhere += condition.length > 0 ? condition.join("and") : filterdWhere;

    const result = await db.query(`SELECT users.* FROM users  ${filterdWhere} ${orderBy} ${gropuBy}`);
    return result.length ? result[0] : null
};

exports.create = async data => {
    return await db.query(`INSERT INTO users SET ? `, data);
};

exports.update = async (where, data) => {
    let filterdWhere = "";
    let condition = [];

    if (!isEmpty(where)) {
        for (let i in Object.keys(where)) {
            condition.push(` ${Object.keys(where)[i]}="${Object.values(where)[i]}" `);
        }
    }
    filterdWhere = condition.length > 0 ? condition.join("and") : filterdWhere;

    let user = [];
    for (var i in data) {
        user.push(` ${i}="${data[i]}"`);
    }

    data = user.join();

    return await db.query(`UPDATE users SET ${data} where ${filterdWhere}`);
};

exports.remove = async where => {
    let filterdWhere = "";
    let condition = [];

    if (!isEmpty(where)) {
        for (let i in Object.keys(where)) {
            condition.push(` ${Object.keys(where)[i]}="${Object.values(where)[i]}" `);
        }
    }
    filterdWhere = condition.length > 0 ? condition.join("and") : filterdWhere;

    return await db.query(`DELETE FROM users where ${filterdWhere}`);
};