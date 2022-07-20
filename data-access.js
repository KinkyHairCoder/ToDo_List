//
// File: data-access.js
// Date: 7/15/2022
// Desc: CommonJS module that contains our data access code.
//

const { pool  } = require ('./postgres-pool')

const TEST = 'select * from test'

 module.exports.test = async () => {
    let retval = null;
    try {
        let r = await pool.query(TEST);
        retval = r.rows;
    } catch (err) {
        console.error(err);
    }
    return retval;
}

