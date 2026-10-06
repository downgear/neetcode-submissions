class MinStack {
    constructor(private stack: number[] = [], private minStack: number[] = []) {
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val)
        this.minStack.push(Math.min(val, this.minStack.at(-1) ?? val))
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop()
        this.minStack.pop()
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack.at(-1)
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack.at(-1)
    }
}
