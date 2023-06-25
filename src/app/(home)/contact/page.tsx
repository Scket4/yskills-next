const time = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export default async function HomePage() {
  let data = ''

  await time(2000)
  data = 'Contact'
  return <div>{data}</div>
}
