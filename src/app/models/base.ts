
export abstract class BaseObj {
    abstract table:string
    id:string

    serialize() {
        var copy = JSON.parse(JSON.stringify(this))
        Object.keys(copy).forEach(k => {
            if (k.startsWith("_") || k == "table")
                copy[k] = undefined
            if (Array.isArray(copy[k]) && !k.endsWith("_ids"))
                copy[k] = copy[k][0]
        })
        return JSON.stringify(copy)
    }
    
}