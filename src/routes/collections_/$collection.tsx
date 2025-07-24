import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/collections_/$collection')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/collections_/$collection"!</div>
}
