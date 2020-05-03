export interface Book {
    bookInfo: BookInfo,
    cover: BookThumbnails,
    googleInfo: GoogleInfo
}

interface BookInfo {
    title: string,
    subtitle: string,
    authors: string[],
    description: string,
    publisher: string,
    publishedDate: Date,
    pageCount: number,
}

interface BookThumbnails {
    thumbnail: string,
    medium: string,
    large: string
}

interface GoogleInfo {
    id: string
}