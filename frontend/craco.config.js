
const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());

module.exports = {
    webpack: {
        alias: {
            "@api": path.resolve(appDirectory, 'src', 'api'),
            "@assets": path.resolve(appDirectory, 'src', 'assets'),
            "@components": path.resolve(appDirectory, 'src', 'components'),
            "@config": path.resolve(appDirectory, 'src', 'config'),
            "@hooks": path.resolve(appDirectory, 'src', 'hooks'),
            "@redux": path.resolve(appDirectory, 'src', 'redux'),
            "@routers": path.resolve(appDirectory, 'src', 'routers'),
            "@services": path.resolve(appDirectory, 'src', 'services'),
            "@apptypes": path.resolve(appDirectory, 'src', 'types'),
            "@utilities": path.resolve(appDirectory, 'src', 'utilities'),
        }
    },
};