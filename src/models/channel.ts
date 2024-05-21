/**
 * Represents a Channel from the database.
 */
export type Channel = {
    channelId: number;
    channelName: string;
    description: string;
    icon: ImageData;
    createdAt: string;
    createdByUserId: number
}
