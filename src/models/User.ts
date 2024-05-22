export type User = {
    userId: number,
    username: string,
    profilePicture: ImageData | null,
    createdAt: string,
    displayName: string | null,
    status: string,
    description: string | null,
    settings: string | null,
    banner: ImageData | null
}
