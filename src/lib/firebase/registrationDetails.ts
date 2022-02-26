import type { registrationDetails } from '$lib/types/registrationDetails';
import type { FirebaseApp } from '@firebase/app';
import type { Auth, UserInfo } from 'firebase/auth';
import type { Firestore } from 'firebase/firestore/lite';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore/lite';

export const event_name_mapping = {
    VPM: 'Virtual Placement',
    CADMS: 'Cadddction Mechanical Solo',
    CADMD: 'Cadddction Mechanical Duo',
    CADCS: 'Cadddction Civil Solo',
    CADCD: 'Cadddction Civil Duo',
    VAV: 'Vaad Vivad',
    RPNBS: 'Respawn BGMI Squad',
    RPNBT: 'Respawn BGMI TeamDeathMatch',
    RPNVS: 'Respawn Valorant Squad',
    RPNCI: 'Respawn Chess Individual',
    MUNA: 'Model United Nations AIPPM',
    MUNU: 'Model United Nations UNHRC',
    COV: 'Code Venture',
    CSW: 'CSE Webinar',
    UPG: 'Upgrad',
    AVK: 'Avishkar',
    TSI: 'Trishakti Interview',
    COS: 'CAD-O-Shop',
    STG: 'StarGaze',
    FOH: 'Foodoholics',
    CCB: 'Cricbash',
    BSYD: 'Bornpsycos Duo',
    BSYT: 'Bornpsycos Team',
    // FOR DEV
    BSY: '[DEV] Bornpsycos'
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
    switch (event_code) {
        case "RPNBS":
            return 160;
        case "RPNBT":
            return 80;
        case "RPNVS":
            return 150;
        case "RPNCI":
            return 50;
        case "VPM":
            return 70;
        case "CADMS":
            return 60;
        case "CADMD":
            return 100;
        case "CADCS":
            return 60;
        case "CADCD":
            return 100;
        case "MUNA":
            return 150;
        case "MUNU": 
            return 150;
        case "VAV":
            return 50;
        case 'AVK':
            return 120;
        case 'BSYD':
            return 80;
        case 'BSYT':
            return 150;
        case 'COV':
            return 0;
        case 'FOH':
            return 200;
        case 'CCB':
            return 300;
        case 'STG':
            return 0;
        case 'TSI':
            return 0;
        case 'CSW':
            //TODO: CHANGE THIS VALUE FOR CSE WEBINAR
            return 0;
        case 'UPG':
            return 0;
        default:
            return 0;
    }
}