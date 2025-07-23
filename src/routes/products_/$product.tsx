import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products_/$product')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/products_/$product"!</div>
}
