import StatusBadge from "./StatusBadge";
import { formatDate } from "../statuses";

export default function ApplicationCard({application}) {
    return(
        <article className="job-card">
            <h2>{application.company}</h2>
            <p>{application.role}</p>
            <StatusBadge status={application.status}/>
            <p>Applied {formatDate(application.appliedOn)}</p>
            <p>Source: {application.source}</p>
            {application.notes && <p>Notes: {application.notes}</p>}
            <a href={application.url}>View Job</a>

        </article>
    );
}