let sid = null;
module.exports = {
    helpers: {
        getSID() {
            if (!sid) {
                const now = new Date();
                const year = `${now.getFullYear()}`;
                const month = `${now.getMonth() + 1}`.padStart(2, '0');
                const day = `${now.getDate()}`.padStart(2, '0');
                const hour = `${now.getHours()}`.padStart(2, '0');
                const minutes = `${now.getMinutes()}`.padStart(2, '0');
                const seconds = `${now.getSeconds()}`.padStart(2, '0');
                const ms = `${now.getMilliseconds()}`.padStart(4, '0');
                sid = `${year}${month}${day}${hour}${minutes}${seconds}${ms}`;
            }
            return sid;
        }
    }
};
