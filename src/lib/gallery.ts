import path from "path";
import fs from "fs";
import toml from "toml";
import Gallery from "@/components/Gallery";

export interface Gallery {
    slug: string,
    title: string,
    description: string,
    images: string[],
}

function readToml() {
    const filePath = path.join(process.cwd(), "data.toml")
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const parsed = toml.parse(fileContent)

    return parsed
}

export function getGallery(slug: string): Gallery {
    const parsed = readToml()
    const galleryData = parsed[slug]

    return {
        slug: slug,
        title: galleryData.title as string,
        description: galleryData.description as string,
        images: galleryData.images as string[],
    }
}

export function listGallery(): Gallery[] {
    const parsed = readToml()

    return Object.keys(parsed).sort().reverse().map(key => {
        const galleryData = parsed[key]
        const gallery: Gallery = {
            slug: key,
            title: galleryData.title as string,
            description: galleryData.description as string,
            images: galleryData.images as string[],
        }

        return gallery
    })
}