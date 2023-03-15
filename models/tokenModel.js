exports.create = async (data) => {

    return await db.query(`INSERT INTO tokens SET ? `, data);
};