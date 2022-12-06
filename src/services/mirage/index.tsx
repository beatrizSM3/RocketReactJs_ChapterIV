import { createServer, Model, Factory, Response } from 'miragejs'
import faker from 'faker' //gera dados falsos 
// api fictícia para testar

type User={
    name: string;
    email: string;
    created_at: string;
}

export function makeServer(){

    const server = createServer({
        models: {
            user: Model.extend<Partial<User>>({})
        },
        factories:{ // geram dados em massa
            user: Factory.extend({
                name(i:number ) {
                    return  `User ${i + 1}`
                },
                email(){
                    return  faker.internet.email().toLowerCase()

                },
                createdAt() {
                    return faker.date.recent(10)
                }
            })
        },

        seeds(server){
            // geram um dado por vez
            server.createList('user', 200)

        },

        routes(){
            this.namespace = 'api';
            this.timing = 750;
            this.get('/users', function(schema, request){
                const {page = 1, per_page = 10} = request.queryParams;

                const total = schema.all('user').length;

                const pageStart = (Number(page) - 1) * Number(per_page);
                const pageEnd = pageStart + Number(per_page);

                const users = this.serialize(schema.all('user')).users.slice(pageStart, pageEnd);

                return new Response (200, 
                {'x-total-count': String(total)},
                {users}
                )

            }); /*shortlands o mirage já pega todos os users automaticamente*/ //sistema de paginação
            this.post('/users') /*shortlands o mirage fará toda a estrutura necessária para criar um novo user automaticamente*/
            this.namespace = '';
            this.passthrough();
        }
    })

    return server;
}