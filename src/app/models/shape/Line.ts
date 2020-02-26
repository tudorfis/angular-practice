import { Point } from './Point'
import { Shape } from './Shape'

export class Line implements Shape {
    private readonly _pointA: Point
    private readonly _pointB: Point

    constructor(pointA: Point = new Point(), pointB: Point = new Point()) {
        this._pointA = pointA
        this._pointB = pointB
    }
    draw() {
        console.log(`draw line from ${this._pointA} -> ${this._pointB}`)
    }
}
