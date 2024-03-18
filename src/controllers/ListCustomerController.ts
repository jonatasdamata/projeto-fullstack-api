import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomerService } from "../services/ListCustomerService";


class ListCustomersController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listCustomerService = new ListCustomerService();

        const customers = await ListCustomerService.execute();

        reply.send(customers);
    }
}

export { ListCustomersController }