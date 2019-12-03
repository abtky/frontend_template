const path = require('path');
module.exports = (env, options) => {
    return {
        entry: {
            'assets/scripts/index': path.join(__dirname, 'src/assets/scripts/index.ts')
        }
    }
}