FlowRouter.route('/', {
  action() {
    mount(Layout, {
      children: () => <div>hello</div>
    })
  }
})
