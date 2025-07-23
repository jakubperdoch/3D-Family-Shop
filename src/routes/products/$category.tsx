import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/$category')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/products/$category"!</div>
}
