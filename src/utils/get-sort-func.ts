export function getSortFunc(upOrDown): (a, b) => number {
    switch (upOrDown) {
        case "up":
            return (a, b) => (
                a > b ? 1 : (a < b ? -1 : 0)
            )
        case "down":
            return (a, b) => (
                a < b ? 1 : (a > b ? -1 : 0)
            )
    }
    return () => 0
}

export function getSortFuncWithProperty(upOrDown, key): (a, b) => number {
    const f = getSortFunc(upOrDown)
    return (a, b) => f(a?.[key], b?.[key])
}
