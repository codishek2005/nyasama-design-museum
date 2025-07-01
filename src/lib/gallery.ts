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

interface GalleryEntry {
    title: string,
    description: string,
    images: string[]
}

function readToml() {
    const filePath = path.join(process.cwd(), "data.toml")
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const parsed = toml.parse(fileContent)

    return parsed
}

export function getGallery(slug: string): Gallery {
    const parsed = readToml()
    const galleryEntry: GalleryEntry = parsed[slug]

    return {
        slug: slug,
        title: galleryEntry.title,
        description: galleryEntry.description,
        images: galleryEntry.images
    }
}

export function listGallery(): Gallery[] {
    const result: Gallery[] = []
    const parsed = readToml()
    const entries = Object.entries(parsed)

    entries.map(entry => {
        const data = entry[1] as GalleryEntry
        const gallery: Gallery = {
            slug: entry[0],
            title: data.title,
            description: data.description,
            images: data.images,
        }

        result.push(gallery)
    })

    return result
}