import type { profileDetails } from '$lib/types/profileDetails';
import type { FirebaseApp } from '@firebase/app';
import type { Auth, UserInfo } from 'firebase/auth';
import type { Firestore } from 'firebase/firestore/lite';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore/lite';



export async function get_user_registrations(app: FirebaseApp, auth: Auth, db:Firestore) {
    return "";
}