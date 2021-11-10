import request from 'supertest';
import { getConnection } from 'typeorm';

import { app } from '../app';
import createConnection from '../database';

describe('User', () => {

    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    afterAll(async () => {
        const connection = getConnection();
        await connection.dropDatabase();
        await connection.close();
    });

    it('Ao dar um get em usuários, devemos receber todos que estão no banco de dados.', async () => {
        const response = await request(app).get('/users');

        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThanOrEqual(1);
    });

    it('Ao dar um get em um usuário específico, devemos receber todos os dados dele.', async () => {
        const response = await request(app).get('/users/1');

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id');
    });

    it('Ao dar update em um usuário específico, devemos receber uma mensagem de sucesso.', async () => {
        const response = await request(app).put('/users/1');

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('message');
    });

    it('Ao dar um delete em um usuário específico, devemos receber uma mensagem de sucesso.', async () => {
        const response = await request(app).delete('/users/1');

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('message');
    });

    it('Se não houver usuários no banco, retorna uma mensagem de erro', async () => {
        const response = await request(app).get('/users');

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message');
    });

    it('Se um usuário específico não existir, retorna uma mensagem de erro.', async () => {
        const response = await request(app).get('/users/5000');

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message');
    });

});