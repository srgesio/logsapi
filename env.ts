export function env() {
    if (!process.env.DATABASE_URL) {
        throw new Error("DATABASE_URL not set")
    }
    return {
        DATABASE_URL: process.env.DATABASE_URL
    }
}