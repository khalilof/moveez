import { getFirestore, doc, setDoc } from "firebase/firestore";
import firebaseApp from '@/app/firebase/config';

const db = getFirestore(firebaseApp)
export default async function addData(collectionName: string, id: string, data: any): Promise<any> {
    let result = null;
    let error = null;

    try {
        console.log('adding..', collectionName, id, data);
        result = await setDoc(doc(db, collectionName, id), data, {
            merge: true,
        });
    } catch (e) {
        error = e;
    }

    return { result, error };
}