import type { registrationDetails } from '$lib/types/registrationDetails';
import type { FirebaseApp } from '@firebase/app';
import type { Auth, UserInfo } from 'firebase/auth';
import type { Firestore } from 'firebase/firestore/lite';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore/lite';

export const event_name_mapping = {
    VPM: 'Virtual Placement',
    CAD: 'Cadddction',
    VAV: 'Vaad Vivad',
    RNPS: 'Respawn BGMI Squad',
    RNPT: 'Respawn BGMI TeamDeathMatch',
    RNVS: 'Respawn Valorant Squad',
    RNCI: 'Respawn Chess Individual',
    MUN: 'Model United Nations',
    COV: 'Code Venture',
    CSW: 'CSE Webinar',
    UPG: 'Upgrad',
    TSI: 'Trishakti Interview',
    COS: 'CAD-O-Shop',
    STG: 'StarGaze',
    FOH: 'Foodoholics',
    CCB: 'Cricbash',
    BSY: 'Bornpsycos',
};

export async function get_user_registrations(app: FirebaseApp, auth: Auth, db: Firestore) {
    const user = auth.currentUser;
    const user_id = user.uid;
    const ref = doc(db, `registrations/${user_id}`);
    const user_doc = await getDoc(ref);
    if (user_doc.exists()) {
        return user_doc.data();
    } else {
        return {};
    }
}

export async function add_new_user_registration(
    app: FirebaseApp,
    auth: Auth,
    db: Firestore,
    event_code: string,
    registration: registrationDetails,
) {
    const user = auth.currentUser;
    const user_id = user.uid;
    const ref = doc(db, `registrations/${user_id}`);
    const user_doc = await getDoc(ref);
    const _data = user_doc.exists() ? user_doc.data() : {};
    _data[event_code] = registration;
    await setDoc(ref, _data);
}

export async function verify_transaction(
    app: FirebaseApp,
    db: Firestore,
    transaction_id: string,
) {
    // transaction_id is made up of user_id and event_code
    const [user_id, event_code, _] = transaction_id.split('-')
    //const user_id = _[0];
    //const event_code = _[1];
    const ref = doc(db, `registrations/${user_id}`);
    const user_doc = await getDoc(ref);
    const _data = user_doc.data();
    _data[event_code].transaction_status = 'PAID';
    await setDoc(ref, _data);
    const trans_ref = doc(db, `transactions/${user_id}-${event_code}`)
    const __data = _data[event_code];
    await setDoc(trans_ref, __data)
}

export function get_event_date(event_code) {
    return '2022-04-02'
}

export function get_event_cost(event_code) {
    return 150;
}