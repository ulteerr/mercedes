const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]')
const tabsContentElems = document.querySelectorAll('[data-tabs-field]')
const tabsTitleElems = document.querySelectorAll('[data-tabs-title]')

const tabs = () => {
    for (let btn of tabsHandlerElems) {
        btn.addEventListener('click', () => {
            tabsHandlerElems.forEach(item => {
                item.classList.remove('design-list__item_active')
            })
            tabsTitleElems.forEach(title => {
                const tabsTitle = (title.dataset.tabsTitle === btn.dataset.tabsHandler) ? title.classList.
                remove('hidden') : title.classList.add('hidden')
            })
            btn.classList.add('design-list__item_active')
            tabsContentElems.forEach(content => {
                const tabsContent = (content.dataset.tabsField === btn.dataset.tabsHandler) ? content.classList.
                remove('hidden') : content.classList.add('hidden')

            })
        })
    }
}

export {tabs}