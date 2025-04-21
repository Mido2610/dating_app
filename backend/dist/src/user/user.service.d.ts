import { RegisterRequest } from "src/proto/generated/user/RegisterRequest";
declare class UserService {
    static registerUser(request: RegisterRequest): Promise<void>;
}
export default UserService;
