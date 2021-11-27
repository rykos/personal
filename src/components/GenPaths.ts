export const GenPaths = (path: string, amount: number, ext: string = ".png") => {
    // img (1)

    return [...Array(amount)].map((x, i) => { return { original: `${path}/img (${i + 1})${ext}` } })
}