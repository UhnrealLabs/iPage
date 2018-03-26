import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
@Injectable()
export class StorageService
{

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
    storeReading(selectedBook, isReading) {
        return this.storage.get('books').then((books) => {
            books = books.map((book) => {
                if (book.id === selectedBook.id) book.isReading = isReading;
                return book;
            });
            console.log(books);
            this.storage.set('books', books);
        });
    }
    storeTimes(selectedBook, duration) {
        return this.storage.get('books').then((books) => {
            books = books.map((book) => {
                if (book.id === selectedBook.id) book.durationLeft = duration;
                return book;
            });
            
            this.storage.set('books', books);
        })
    }
    // create function that gets ifReading
    constructor(private storage: Storage) {
    }
}