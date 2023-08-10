// decided to use a React, moment.js and local storage as a db for journal storage.
// https://dev.to/chaituknag/a-simple-journal-app-using-react-localstorage-and-fun-23j8

import { useState, useEffect } from 'react';
import moment from 'moment';

function useJournal() {
    const [entries, setEntries] = useState([]);
    
    const getEntriesFromStorage = () =>
        JSON.parse(window.localStorage.getItem('journalEntries'));

    const setEntriesFromStorage = items =>
        window.localStorage.setItem('journalEntries', JSON.stringify(items));

    useEffect(() => {
        const entriesFromStorage = getEntriesFromStorage();
        if (entriesFromStorage) {
            setEntries(entriesFromStorage);
        }
    }, []);
    
    const storeEntry = (entry) => {
        const newEntries = [entry, ...entries];
        setEntries(newEntries);
        setEntriesFromStorage(newEntries);
    }

    const removeEntry = (index) => {
        const newEntries = [...entries.slice(0, index), ...entries.slice(index + 1)];
        setEntries(newEntries);
        setEntriesFromStorage(newEntries);
    }

    const handleDeleteClick = (index) => () => {
        removeEntry(index);
    }

    return [entries, storeEntry, removeEntry, handleDeleteClick];
}

export default useJournal;
