import { $fetch } from 'ofetch'

export const APIInstance = $fetch.create({
  baseURL: 'https://apsnybillboard-production.up.railway.app/api',
  headers: {},
  async onResponse({ response }) {
    return console.log('всё хорошо: ', response)
  },
  async onResponseError({ response }) {
    return Promise.reject('ошибка ', response)
  }
})
