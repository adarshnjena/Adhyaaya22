import type { taskDetails } from '$lib/types/taskDetails';
import type { FirebaseApp } from '@firebase/app';
import {
    doc,
    Firestore,
    getDoc,
    collection,
    query,
    getDocs,
    where,
    orderBy,
    limit,
} from 'firebase/firestore/lite';

export async function get_all_task_details(
    app: FirebaseApp,
    database: Firestore,
): Promise<{ [key: string]: taskDetails }> {
    // This one gets all task details and keys for each and every task
    // AKA the viewall function
    const data = {};
    const tasks_ref = collection(database, `/tasks`);
    const _query = query(tasks_ref);
    const querySnapshot = await getDocs(_query);
    querySnapshot.forEach((doc) => {
        data[doc.id] = doc.data() as taskDetails;
    });
    return data;
}

export async function get_n_task_details(
    app: FirebaseApp,
    database: Firestore,
    n: number,
): Promise<{ [key: string]: taskDetails }> {
    // This one returns the n tasks that are important and are in the future, ordered by end date.
    // AKA the dashboard function
    const data = {};
    const tasks_ref = collection(database, `/tasks`);
    const _query = query(
        tasks_ref,
        //where('end_date', '>=', Date.now() / 1000),
        orderBy('end_date', 'desc'),
        where('is_important', '==', true),
        limit(n),
    );
    const querySnapshot = await getDocs(_query);
    querySnapshot.forEach((doc) => {
        data[doc.id] = doc.data() as taskDetails;
    });
    return data;
}

export async function get_task_details(
    app: FirebaseApp,
    database: Firestore,
    task_id: string,
): Promise<taskDetails> {
    const tasks_ref = doc(database, `/tasks/${task_id}`);
    const data_snap = await getDoc(tasks_ref);
    if (data_snap.exists()) {
        return data_snap.data() as taskDetails;
    } else {
        return null;
    }
}
