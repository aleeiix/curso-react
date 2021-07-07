import { FC, useContext } from 'react';

import {IssueContext, Issue} from './../contexts/Issue'

const Issues: FC = () => {
    const {issues, url} = useContext(IssueContext);
    
    return (
        <>
            {issues.map((issue: Issue) => (
                <div key={`issue-${issue.number}`}>
                    <p><strong>#{issue.number}</strong> - <a href={issue.url}>{issue.title}</a></p>
                </div>
            ))}
        </>
    )
}

export default Issues;