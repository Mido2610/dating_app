import UserLoader from '../proto/loaders/user.loader';
import CatchAsync from '../middlewares/catchAsync.middleware';
import Validation from '../middlewares/validation.middleware';
import UserController from './user.controller';
import * as UserValidation from '../user/user.validation';

const UserRoute = {
    service: UserLoader.UserRoutes.service,
    implementation: {
        registerUser: CatchAsync({
            validation: Validation(UserValidation.registerUser),
            controller: UserController.registerUser,
        }),
    }
}
export default UserRoute; 