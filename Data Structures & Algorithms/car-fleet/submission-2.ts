class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        // time = (target - position) / speed
        const cars = position.map((v, i) => [v, speed[i]]);
        cars.sort((a,b) => b[0] - a[0])
        const stack = []
        for (const [pos,spe] of cars) {
            const time = (target - pos) / spe
            const top = stack.at(-1)
            if (!top || top < time) stack.push(time)
        }
        return stack.length
    }
}
