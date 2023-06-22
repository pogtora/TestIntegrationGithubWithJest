const request = require('supertest');
const app = require('../../app')

let username = 'pogtora'

describe('Testando Rota do Github', () => {
    it('Verifica se o número de repositórios públicos do github é igual ao esperado', async() => {
        const response = await request(app).get(`/github/${username}`)
        console.log(`O número de repositórios público atuais é ${response.body}`)
        expect(response.body).toEqual(3)
    })
})