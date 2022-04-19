import { RenderListItems } from 'components/modals/RenderListItems'

export const Resources = () => {
  const resources = [
    { href: '/dashboard/list/verbs/irregular', title: 'Irregular verb list' },
    { href: '/dashboard/list/verbs/irregular', title: 'More coming soon...' },
  ]

  return <RenderListItems data={resources} />
}
