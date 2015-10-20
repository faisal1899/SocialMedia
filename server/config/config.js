var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    rootPath: rootPath,
    db: 'mongodb://localhost/SocialMedia',
    port: 3030
}