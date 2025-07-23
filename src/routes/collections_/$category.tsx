import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/collections_/$category')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/products/"!</div>
}
