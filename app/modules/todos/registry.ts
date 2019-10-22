interface iCommon {
  [key: string]: any,
}

type Component = (node: Node, { }: iCommon) => HTMLElement

const registry: iCommon = {}

const renderWrapper = (component: Component): Component => {
  return (targetElement: Node, state: iCommon) => {
    const element = <HTMLElement>component(targetElement, state)

    const childComponents: NodeListOf<HTMLElement> = element
      .querySelectorAll('[data-component]')

    Array
      .from(childComponents)
      .forEach((target: HTMLElement) => {
        const name = target
          .dataset
          .component

        const child = registry[name]
        if (!child) {
          return
        }

        target.replaceWith(child(target, state))
      })

    return element
  }
}

const add = (name: string, component: Component) => {
  registry[name] = renderWrapper(component)
}

const renderRoot = (root: Node, state: iCommon) => {
  const cloneComponent = (root: Node) => {
    return <HTMLElement>root.cloneNode(true)
  }

  return renderWrapper(cloneComponent)(root, state)
}

export default {
  add,
  renderRoot
}