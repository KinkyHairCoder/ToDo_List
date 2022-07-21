//
// File: data-access.js
// Date: 7/15/2022
// Desc: CommonJS module that contains our data access code.
//

const { pool  } = require ('./postgres-pool')

const GET_TODO_LISTS= 'select * from todo_list'


exports.getTodolists = async () => {
    let retval = null;
    try {
        let r = await pool.query(GET_TODO_LISTS);
        retval = r.rows;
    } catch (err) {
        console.error(err);
    }
    return retval;
}
