// TODO: Complete this, taking data from the server.
import type { FirebaseApp } from '@firebase/app';
import type { Auth } from '@firebase/auth';
import { Database, set, ref, onValue } from '@firebase/database';
import type { profileDetails } from '$lib/types/profileDetails';
import type { taskDetails } from '$lib/types/taskDetails';

const defaultProfileData = {
    first_name: '',
    last_name: '',
    mobile_number: '',
    address: '',
    locality: '',
    city: '',
    state: '',
    country: '',
    bio: '',
};

export async function init_profile_data(app: FirebaseApp, auth: Auth, db: Database) {
    const user = auth.currentUser;
    const userProfileRef = ref(db, `/users/${user.uid}/profile`);
    await set(userProfileRef, {
        username: auth.currentUser.displayName,
        email: auth.currentUser.email,
        ...defaultProfileData,
    });
}
