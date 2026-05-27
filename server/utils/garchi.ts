

import GarchiCMS from "@garchicms/garchi-node-sdk"

export const garchi = new GarchiCMS({
    api_key: useRuntimeConfig().GARCHI_API_KEY as string,
})

