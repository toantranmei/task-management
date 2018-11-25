module.exports = {
	renderTaskScripts: () => {
		const lobilist = document.createElement('script')
    lobilist.setAttribute('src', 'static/plugins/extra-libs/taskboard/js/lobilist.min.js')
    document.head.appendChild(lobilist)

    const lobibox = document.createElement('script')
    lobibox.setAttribute('src', 'static/plugins/extra-libs/taskboard/js/lobibox.min.js')
    document.head.appendChild(lobibox)

		const configInit = document.createElement('script')
    configInit.setAttribute('src', 'static/plugins/extra-libs/taskboard/js/task-init.js')
    document.head.appendChild(configInit)
  },
  renderProjectScripts: () => {
    const customjs = document.createElement('script')
    customjs.setAttribute('src', 'static/dist/js/custom.min.js')
    document.head.appendChild(customjs)
  }
}