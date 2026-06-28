
import {garchi} from "../utils/garchi"

export default defineEventHandler(async (event) => {

    const {slug} = await readBody(event)
    const config = useRuntimeConfig()

    const page = await garchi.headless.getPage({
        slug: slug as string,
        space_uid: config.GARCHI_SPACE_UID as string,
        mode: "draft"
    })
   
    return page
})