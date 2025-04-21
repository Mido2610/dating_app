declare const UserRoute: {
    service: import("../proto/generated/user/UserRoutes").UserRoutesDefinition;
    implementation: {
        registerUser: (call: import("node_modules/@grpc/grpc-js/build/src").ServerUnaryCall<any, any> | import("node_modules/@grpc/grpc-js/build/src").ServerReadableStream<any, any>, callback: import("node_modules/@grpc/grpc-js/build/src").sendUnaryData<any>, roles?: import("../common/utils/enum.utils").ROLE[]) => Promise<void>;
    };
};
export default UserRoute;
