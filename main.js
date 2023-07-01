import {upLoad} from "./upload";


upLoad ('#file', {
    multi : true,
    accept : ['.png', '.jpg', '.jpeg', '.gif'],
})
