import { getFirestore, getDocs, collection } from 'firebase/firestore';
import firebaseApp from '@/app/firebase/config';

const db = getFirestore(firebaseApp)
export default async function getCollection(collectionName: string): Promise<any> {
    const collectionItems: any[] = [];

    let result = null;
    let error = null;

    try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        querySnapshot.forEach((doc) => {
            collectionItems.push(doc.data());
        });
        result = collectionItems;
    } catch(e) {
        error = null;
    }

    return { result, error };
}