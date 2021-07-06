import React, {useState, useEffect} from 'react'
import axios from 'axios'

import './Issues.css';

type Issue = {
    number: number
    title: string
    url: string
    state: string
}

const Issues = () => {
    const [issues, setIssues] = useState<Issue[]>([])

    useEffect(() => {
        axios.get('https://api.github.com/repos/ContentPI/ContentPI/issues')
            .then((response: any) => {
                setIssues(response.data)
            })
    }, [])


    return (
        <>
            <h2>ContentPI Issues</h2>
            {issues.map((issue: Issue) => (
                <div key={issue.number}>
                    <strong>#{issue.number}</strong>
                    <a href={issue.url} rel="noreferrer" target="_blank">{issue.title}</a>
                    <p>{issue.title}</p>
                </div>
            ))}
        </>
    )
}

export default Issues;