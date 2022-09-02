import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
    projectId: "2aw2t9ot",
    dataset: "production",
    apiVersion: "2022-07-29",
    useCdn: true,
    token: "skQ5RHdGgozybv3i29CT2muYhOyzNmmuz9k45S0eMFolhXnfuQhHtBeTS2rQNI4muOz0Y7nvVHkMeIWu4NLVhnAjMY4gNiZRCQT2Po9r4WF6UgUgAUQWT9m6L4CvZCFOQsn54oHVIUAwvMHy1ShmK4VxiXfDtlAhbC6JOvL0c8bQDgjwMoTK",
})
const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source)