var path = './gulp';

function requireTask (name) {
    if (name.match(/\.js$/i)) {
        require(path + '/' + name);
    }
}

require('fs')
    .readdirSync(path)
    .forEach(requireTask);
