import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile/order_/$order')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/order_/$order"!</div>
}
