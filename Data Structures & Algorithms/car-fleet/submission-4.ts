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
        let fleet = 0
        let top = -1 
        for (const [pos,spe] of cars) {
            const time = (target - pos) / spe
            if (top < time) {fleet++; top = time}
        }
        return fleet
    }
}
