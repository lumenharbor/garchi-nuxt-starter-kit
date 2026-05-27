
import {garchi} from "../utils/garchi"

export default defineEventHandler(async (event) => {

    const {slug} = await readBody(event)
    const page = await garchi.headless.getPage({
        slug: slug as string,
        space_uid: "your space uid",
        mode: "draft"
    })
    return page
})