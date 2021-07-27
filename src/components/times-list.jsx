import React, {useState, useEffect} from 'react'
import firebase from '../firebase'

// Sort with hash
const SORT_OPTIONS = {
    'TIME_ASC': {column: 'time_seconds', direction: 'asc'},
    'TIME_DESC': {column: 'time_seconds', direction: 'desc'},

    'TITLE_ASC': {column: 'title', direction:'asc'},
    'TITLE_DESC': {column: 'title', direction: 'desc'}
}

function useTimes(sortBy = 'TIME_ASC') {
    const [times,setTimes] = useState([])

    useEffect(() => {
        const unsubscribe = firebase

        firebase
            .firestore()
            .collection('times')
            .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
            .onSnapshot((snapshot) => {
                const newTimes = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))

                setTimes(newTimes)
            })

            // drops subscribtion when component is unmounted to drop the connection
            return () => unsubscribe
    }, [sortBy])

    return times
}

// This component is used to display entries of data
// Firebase can be integrated
const TimesList = () => {
    const [sortBy, setSortBy] = useState('TIME_ASC')
    const times = useTimes(sortBy)
    return (
        <div>
            <h2>Times List</h2>
            <div>
                <label>Sort By:</label>{' '}
                <select value ={sortBy} onChange ={e => setSortBy(e.currentTarget.value)}>
                    <option value ='TIME_ASC'>Time (fastest first)</option>
                    <option value = "TIME_DESC">(slowest first)</option>
                    <option disabled>---</option>
                    <option value = "TITLE_ASC">Title (a-z)</option>
                    <option value = "TITLE_DESC">Title(z-a)</option>
                </select>
            </div>
            <ol>
                {/* MAPS collection entries from Firestore to format */}
                {times.map((time) =>
                    <li key = {time.id}>
                        <div className = "time-entry">
                            {time.title}
                        <code className ="time">{time.time_seconds} seconds</code>
                        </div>
                    </li>
                )}
                <li>
                    {/* STATIC ENTRY */}
                    <div className = "time-entry">
                        My Amazing Entry Title
                        <code className ="time">18 seconds</code>
                    </div>
                </li>
            </ol>
        </div>
    )
}

export default TimesList