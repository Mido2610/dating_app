import * as grpc from "@grpc/grpc-js";
import OtpRoute from "./user/user.route";

const server = new grpc.Server({
  "grpc.max_receive_message_length": 10 * 1024 * 1024,
  "grpc.max_send_message_length": 10 * 1024 * 1024,
});

const controllers: {
  service: grpc.ServiceDefinition;
  implementation: grpc.UntypedServiceImplementation;
}[] = [
    OtpRoute,
];

// Dynamically add each service to the server
controllers.forEach(({ service, implementation }) => {
  server.addService(service, implementation);
});

export default server;