export class Range {
  min: number
  max: number

  constructor(dataSet: number[]) {
    this.min = Math.min(...dataSet)
    this.max = Math.max(...dataSet)
  }

  get distance() {
    return this.max - this.min
  }
}
