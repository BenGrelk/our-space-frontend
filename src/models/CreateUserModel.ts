export type CreateUserModel = {
    username: string,
    password: string,
    profilePicture: ImageData | null,
    displayName: string | null,
    status: string,
    description: string | null,
    settings: string | null,
    banner: ImageData | null
}
