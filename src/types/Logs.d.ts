interface Database {
    logs: Log[]
}

interface Log {
    id: string
    message: string
    type: "task" | "event" | "note"
    notes: string[]
    status: "todo" | "partialDone" | "done" | "closed" | "impediment"

}