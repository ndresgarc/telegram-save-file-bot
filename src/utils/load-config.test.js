const loadConfig = require('./load-config.cjs');

process.env['TELEGRAM_BOT_TOKEN'] = '12345667890';
process.env['ALLOWED_USERS'] = 'alice:1111,bob:2222';
process.env['SAVE_FOLDER'] = './';

test('Should contain token config', () => {
    expect(
        loadConfig()
    ).toHaveProperty('token');
});

test('Should contain users config', () => {
    expect(
        loadConfig()
    ).toHaveProperty('users');
});

test('Should contain saveFolder config', () => {
    expect(
        loadConfig()
    ).toHaveProperty('saveFolder');
});
