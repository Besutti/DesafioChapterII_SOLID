import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string;
}

class ListAllUsersUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ user_id }: IRequest): User[] {
        const user = this.usersRepository.findById(user_id);

        if (user_id !== "" && !user.admin) {
            throw new Error("Only admins can access the list.");
        }

        const users = this.usersRepository.list();

        return users;
    }

    //     // valida se eh o usuário admin
    //     const user = this.usersRepository.findById(user_id);

    //     if (!user.admin) {
    //         throw new Error("User is not admin!");
    //     }

    //     const users = this.usersRepository.list();
    //     return users;
    // }
}

export { ListAllUsersUseCase };
