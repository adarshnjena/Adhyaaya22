const dev = true;
import type { profileDetails } from '$lib/types/profileDetails';
import type { FirebaseApp } from '@firebase/app';
import type { UserInfo } from 'firebase/auth';
import type { Firestore } from 'firebase/firestore/lite';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore/lite';

export const defaultProfileData = {
    first_name: '',
    last_name: '',
    mobile_number: '',
    address: '',
    locality: '',
    city: '',
    state: '',
    country: '',
    bio: '<!---->',
};

export async function get_user_details(app: FirebaseApp, user: UserInfo, db: Firestore) {
    const users_ref = doc(db, `users/${user.uid}`);
    const data_ref = await getDoc(users_ref);
    if (data_ref.exists()) {
        return data_ref.data() as profileDetails;
    } else {
        return null;
    }
}

export async function set_initial_user_details(
    app: FirebaseApp,
    user: UserInfo,
    db: Firestore,
    fallback_username: string,
): Promise<void> {
    const _data = defaultProfileData;
    _data['username'] = user.displayName?.toLowerCase().replaceAll(' ', '_') || fallback_username;
    _data['email'] = user.email;
    const data = {
        profile: _data,
        tasks: {},
    };
    const users_ref = doc(db, `/users/${user.uid}`);
    await setDoc(users_ref, data);
    return;
}

export async function update_user_details(
    app: FirebaseApp,
    user: UserInfo,
    db: Firestore,
    data,
): Promise<void> {
    dev ? console.log(db) : '';
    const profile_ref = doc(db, `/users/${user.uid}`);
    const _data = {
        profile: data,
    };
    await updateDoc(profile_ref, _data);
}

export async function update_user_task_details(
    app: FirebaseApp,
    user: UserInfo,
    db: Firestore,
    task_id: string,
): Promise<void> {
    // We have to get the old data first, otherwise it overwrites the old data, Ideally firestore should allow us to update a specific field.
    const data = await get_user_details(app, user, db);
    const tasks_ref = doc(db, `/users/${user.uid}`);
    data['tasks'][task_id] = true;
    await updateDoc(tasks_ref, data as uploadTasks);
}

interface uploadTasks extends profileDetails {
    // Extend the uploaded data to correspond to the AddPrefixToKeys type for updateDoc.
    [key: `${string}.${string}`]: string;
}
