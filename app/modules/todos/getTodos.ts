import * as faker from 'faker'
import { iTodo } from './schemas'

const createElement = (): iTodo => ({
  text: faker.random.words(2),
  completed: faker.random.boolean()
})

const repeat = (elementFactory: any, number: number): Array<any> => {
  const array = []
  for (let index = 0; index < number; index++) {
    array.push(elementFactory())
  }
  return array
}

export default (): Array<iTodo> => {
  const howMany = faker.random.number(10)
  return repeat(createElement, howMany)
}