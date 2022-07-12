import { IRepository } from "~/interface/IRepository";

const BASE_URL = "https://api.github.com/users/mertcanduldul/repos";

export const getRepository: () => Promise<IRepository[]> = async () => {
    const response = await fetch(BASE_URL)
    return await response.json();
}
