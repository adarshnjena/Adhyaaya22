import type { FirebaseApp } from '@firebase/app';
import { Firestore, limit } from 'firebase/firestore/lite';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore/lite';

export async function get_n_event_details(app: FirebaseApp, database: Firestore, n: number) {
    // This one returns the n tasks that are important and are in the future, ordered by end date.
    // AKA the dashboard function
    const data = {};
    const tasks_ref = collection(database, `/events`);
    const _query = query(
        tasks_ref,
        where('date', '>=', Date.now() / 1000),
        orderBy('date', 'desc'),
        limit(n),
    );
    const querySnapshot = await getDocs(_query);
    querySnapshot.forEach((doc) => {
        data[doc.id] = doc.data();
    });
    return data;
}
