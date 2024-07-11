import S from './dict/ja/S.json'
import V from './dict/ja/V.json'
import O from './dict/ja/O.json'

export function generate(type:"SOV") {
  const randomS = S[Math.floor(Math.random() * S.length)]
  const randomV = V[Math.floor(Math.random() * V.length)]
  const randomO = O[Math.floor(Math.random() * O.length)]
  return `${randomS}${randomV}${randomO}`
}