import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core"

export default {
    entities: [Post],
    dbName: "redditclone",
    user: '',
    password: '',
    debug: !__prod__,
    type: 'postgresql'
} as Parameters<typeof MikroORM.init>[0]; //only allows valid microORM types, [0] as it returns an array

