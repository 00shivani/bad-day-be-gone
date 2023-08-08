// decided to use a React, moment.js and local storage as a db for journal storage.
// https://dev.to/chaituknag/a-simple-journal-app-using-react-localstorage-and-fun-23j8

function useJournal() {
    const [entries, setEntries] =useState([]);
    
    const getEntriesFromStorage = () => JSON.parse(
        window.localStorage.getItem('journalEntries')
    );

    const setEntriesFromStorage = items => 
    window.localStorage.setItem('journalEntries', JSON.stringify(items));
    useEffect(() =>{
        const entriesFromStorage = getEntriesFromStorage();
        fieldRef.current.focus();
        if(entriesFromStorage) {
            setEntries(entriesFromStorage);
        }
    }, []);
    
    const storeEntry = (entry) => {
        const itemDate = moment(item.date).fromNow();
        const newEntries = [entry, ...entries];
        setEntries(newEntries);
        setEntriesToStorage(newEntries);
    }

    const removeEntry = (index) => {
        const newEntries = [...entries.slice(0, index), ...entries.slice(index+1)];
        setEntrie(newEntries);
        setEntriesToStorage(newEntries);
    }

    const handleDeleteClick = (index) => e => {
        deleteEntry(index);
    }

    return [entries, storeEntry, removeEntry];
}