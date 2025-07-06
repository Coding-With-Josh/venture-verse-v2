export interface User {
    email: string;
    password: string
    isActiveMember: boolean
    tasksCompleted: number
    hasMintedNFT: boolean
    claimedPoints: boolean
    role: Role
    profilePhoto: string
    username: string
    rank: Rank
    createdAt: string
    updatedAt: string
}

export interface Project {
    id: string
    name: string
    description: string
    discordLink: string
    twitterLink: string
    websiteLink: string
    members: User[]
    createdAt: string
    updatedAt: string
}

export interface Rank {
    benefits: string[]
    position: number
}

export type Role =
    "ADMIN" |
    "USER" |
    "TESTER" | 
    "PARTNER"
