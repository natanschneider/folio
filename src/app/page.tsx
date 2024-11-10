import { basicQuery } from '@/lib/DB/connection'

interface timeline {
  id: number,
  name: string,
  description: string,
  year: string,
  duration: string,
  status: boolean
}

interface projects {
  id: number,
  nome: string,
  img_url: string,
  url: string,
  repo: string,
  status: boolean,
  stack: string[]
}

export default async function Home() {
  const timeline:timeline = await basicQuery(`SELECT * FROM TIMELINE WHERE STATUS = TRUE`)
  const projects = await basicQuery(`SELECT * FROM PROJECTS WHERE STATUS = TRUE`)
  return (
      <div></div>
  );
}
