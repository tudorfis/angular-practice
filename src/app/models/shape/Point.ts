import { Shape } from './Shape'

export class Point implements Shape {
    constructor(
        private _x: number = 0,
        private readonly _y: number = 0
    ) { }

    get x() {
        return this._x
    }

    set x(value) {
        if (value < 0)
            throw new Error('value cannot be less than 0.')

        this._x = value
    }

    toString() {
        return `(x=${this._x}, y=${this._y})`
    }
    draw() {
        // ...
        console.log(`draw point x=${this._x}, y=${this._y}`)
    }
    getDistance(another?: Point) {
        // ...
    }
}