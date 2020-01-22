var Config = {};
Config.db = {};
Config.app={};
Config.auth = {};

if(process.env.DB_URL) {
    Config.db.url = process.env.DB_URL;
    console.log('Loaded DB URL from environment variable: ' + Config.db.url);
} else {
    Config.db.url = 'mongodb+srv://precicount:CRFtI1BAtouDXn9O@cluster0-i3jck.gcp.mongodb.net/test?retryWrites=true';
    console.log('Using default DB URL: ' + Config.db.url);
}

// Use environment defined port or 3000
Config.app.port = process.env.PORT || 3000;
Config.auth.jwtSecret = "preci secret";
module.exports = Config;
