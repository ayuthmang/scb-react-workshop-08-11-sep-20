import { divide } from './math'

describe('divide', () => {
  test('given x=4, y=2, when divide, then it should be 2', () => {
    // Arrage
    const x = 4
    const y = 2

    // Act
    const actual = divide(x, y)

    // Assert
    const result = 2
    expect(actual).toBe(result)
  })

  it('should throw error when x or y is not a number', () => {
    // Arrage
    const x = 100
    const y = 'Apple'

    // Act
    const actual = () => divide(x, y)

    // Assert
    expect(actual).toThrow()
  })
})
