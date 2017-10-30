import { Injectable } from '@angular/core';
import { 
    AngularFirestore,
    AngularFirestoreCollection, 
    AngularFirestoreDocument 
} from 'angularfire2/firestore';


@Injectable()

export class ItemService {
  itemsCollection: AngularFirestoreCollection<Item>;

  constructor(public afs: AngularFirestore) { }

}

interface Item{
  id?: string;
  title?: string;
  description?: string;
  
}