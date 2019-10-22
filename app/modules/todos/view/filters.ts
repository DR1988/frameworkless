export default (targetElement: Node, { currentFilter }: { currentFilter: string }): HTMLElement => {
  const newCounter = <HTMLElement>targetElement.cloneNode(true)
  Array
    .from(newCounter.querySelectorAll('li a'))
    .forEach((a: HTMLLinkElement) => {
      if (a.textContent === currentFilter) {
        a.classList.add('selected')
      } else {
        a.classList.remove('selected')
      }
    })
  return newCounter
}