import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/modeling')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/modeling"!</div>
}
