import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
@Injectable()
export class StorageService {

    addBook (book) {
        this.storage.get('books').then((books) => {
            if (books === null) {
            books = []
            }
            books.push(book)
            this.storage.set('books', books)
        })
    }

    getBooks(): Promise<Array<any>> {
        return this.storage.get('books').then((books) => {
            return books as Array<any>;
        })
    }

    constructor(private storage: Storage) {
    }
}