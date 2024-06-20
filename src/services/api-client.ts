import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'abd7d145282a483daafeb18a9d009a74'
    }
})