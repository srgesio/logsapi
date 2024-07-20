export type Database = {
    logs: Omit<Log, "id">[]
}

export type Log = {
    id: string
    message: string
    type: "task" | "event" | "note"
    notes: string[]
    status: "todo" | "partialDone" | "done" | "closed" | "impediment"
    collectionId: string
    collection: Collection
}

export type Collection = {
    id: string
    name: string
    logs?: Log[]
}