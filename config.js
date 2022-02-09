import env from 'dotenv';

function getenv(key){
    const env = process.env[key];
    if(!env){
        throw new Error('ENV NOT FOUND!!');
    }
    return env
}

env.config();

export const config = {
    db : {
        name : getenv('DB_NAME'),
        username : getenv('DB_USERNAME'),
        password : getenv('DB_PASSWORD'),
        host : getenv('DB_HOST'),
        dialect : getenv('DB_DIALECT'),
    }
}