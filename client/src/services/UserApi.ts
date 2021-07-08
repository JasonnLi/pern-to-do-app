import ApiClient from "./ApiClient";

const api = new ApiClient(<string>process.env.API_URL);

export interface IUser {
  user_id?: number;
  user_name: string;
  user_age: number;
  user_address: string;
}

interface IGetUsersResponse {
  users: IUser[];
}

export default class UserApi {
  public static async createUser(
    name: Partial<IUser>,
  ): Promise<IUser> {
    try{
      return (await api.POST<IUser>('/users/createUser', name)).data;
    }catch(err) {
      throw (err)
    }
  }

  public static async getUsers(
  ): Promise<IGetUsersResponse> {
    return (await api.GET<IGetUsersResponse>("/users")).data;
  }
}
 