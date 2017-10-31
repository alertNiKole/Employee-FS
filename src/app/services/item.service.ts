import { Injectable } from '@angular/core';
import { 
    AngularFirestore,
    AngularFirestoreCollection, // represents collections
    AngularFirestoreDocument //single documents updates and deletes (item changes)
} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import { Item } from '../models/Item';


//Methods
@Injectable()

export class ItemService {
      itemsCollection: AngularFirestoreCollection<Item>; //type of collection is Item as described below
      items: Observable<Item[]>;


  constructor(public afs: AngularFirestore) {     //this.items = this.afs.collection('items').valueChanges();
  this.items = this.afs.collection('items').snapshotChanges().map(changes => {
    return changes.map( a => {
      const data = a.payload.doc.data() as Item;
      data.id = a.payload.doc.id;
      return data;
    })
  })
}

 getItems () {
    return this.items;
 }
}

/*/ Moved interfact item and will be importing it back at the top. /*/