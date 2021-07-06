import React, {Component} from 'react'
import axios from 'axios'

import './Issues.css';

type Issue = {
    number: number
    title: string
    url: string
    state: string
}
type Props = {}
type State = {
    issues: Issue[]
}

class Issues extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            issues: []
        }
    }

    componentDidMount() {
        axios.get('https://api.github.com/repos/ContentPI/ContentPI/issues')
        .then((response: any) => {
            this.setState({
                issues: response.data
            })
        })
    }

    render() {
        const {issues = []} = this.state;
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
}

export default Issues;