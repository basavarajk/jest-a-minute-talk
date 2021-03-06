import thumbWar from '../thumb-war'
import {getWinner as getWinnerMock} from '../utils'

jest.mock('../utils')

afterEach(() => {
  ;(getWinnerMock as jest.Mock<{}>).mockClear()
})

test('returns winner', async () => {
  const winner = await thumbWar('Kent C. Dodds', 'Ken Wheeler')
  expect(winner).toBe('Kent C. Dodds')
  expect((getWinnerMock as jest.Mock<{}>).mock.calls).toEqual([
    ['Kent C. Dodds', 'Ken Wheeler'],
    ['Kent C. Dodds', 'Ken Wheeler'],
  ])
})
