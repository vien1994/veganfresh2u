import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers"
import './MenuTabs.css'
import Menu from './Menu.jsx';

const tabs = document.querySelectorAll(['data-tab-target'])
const tabContents = document.querySelectorAll(['data-tab-content'])

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')})
        target.classList.add('active')
    })
})