class TimeMap {
    constructor(private keyStore = new Map<string, Array<[string, number]>>()) {
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, [])
        }
        this.keyStore.get(key).push([value, timestamp])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        let res: string = ""
        const vals = this.keyStore.get(key)
        if (!vals) return res
        let l = 0, r = vals.length - 1
        while (l <= r) {
            let m = Math.floor((l + r)/2)
            if (vals[m][1] <= timestamp) {
                res = vals[m][0]
                l = m + 1
            } else {
                r = m -1
            }
        }
        return res
    }
}
