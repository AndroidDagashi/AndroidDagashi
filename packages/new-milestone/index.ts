import { Octokit } from '@octokit/rest'
import { parseISO, addDays, formatISO } from 'date-fns'

const OWNER = 'AndroidDagashi'
const REPO = 'AndroidDagashi'

async function main(): Promise<string> {
  const octokit = new Octokit({
    auth: process.env.PUSH_ACCESS_TOKEN,
    timeZone: 'Asiz/Tokyo',
  })

  const milestones = await octokit.rest.issues.listMilestones({
    owner: OWNER,
    repo: REPO,
    state: 'all',
    sort: 'due_on',
    direction: 'desc',
    per_page: 2,
    page: 1,
  })

  console.log(milestones)

  const latest = milestones.data[0]
  console.log('latest milestone:', latest)

  if (latest.state === 'open') {
    // milestone with 'open' state exists. nothing to do.
    return `open milestone(${latest.number}) still exists.`
  }

  const dueOn = parseISO(latest.due_on!)

  const nextMilestoneNumber = latest.number + 1
  const nextDueOn = addDays(dueOn, 7)

  const nextTitle = `${nextMilestoneNumber} ${formatISO(nextDueOn, {
    representation: 'date',
  })}`

  const result = await octokit.rest.issues.createMilestone({
    owner: OWNER,
    repo: REPO,
    title: nextTitle,
    due_on: formatISO(nextDueOn),
  })

  console.log('result:', result.data)

  return `${result.data.number}, ${result.data.title}, ${result.data.due_on}`
}

main()
  .then((result) => console.log('finished', result))
  .catch((e) => console.error(e))
