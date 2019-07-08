import { User } from '../interfaces/user';

export class Validation{

    public static validateDate( date: Date): boolean {
        const dateNow = new Date();
        return ( (dateNow.getFullYear() - date.getFullYear()) > 17);
    }

    public static validateNames( words: string): boolean {
        const regex = new RegExp('^[a-zA-Z0-9_ ]*$');
        return regex.test(words);
    }

    public static validateExist( user: User , users: User[] ): boolean {
        if ( (user.identification + '') !== '' && (''+ user.identification) !== 'NaN') {
            for (const us of users) {
                console.log('us' , us);
                if (user.identification === us.identification) {
                    return false;
                }
            }
            return true;
        } else {
            return false;
        }
    }
}