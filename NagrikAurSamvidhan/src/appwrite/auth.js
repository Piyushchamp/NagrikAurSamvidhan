import conf from '../conf/conf';
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client.setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call login method
                // return this.login({email,password});

                const session = await this.login({ email, password });
                return session;

            }
            return null;
            //  else {
            //     return userAccount;
            // }
        }
        catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;

        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
            throw error;
        }
        // return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions()

        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);

        }
    }
}


const authService = new AuthService();
export default authService;