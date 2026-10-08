import { STATUSES, STATUS_LABELS } from "../statuses";

export default function SummaryStrip({applications}){
    return(
    <section className="summary">
        <div className="summary-tile">
            <strong>{applications.length}</strong>
            <span>Total</span>
        </div>
        {STATUSES.map((status) => (
            <div className="summary-tile" key={status}>
                <strong>
                    {applications.filter((application) => application.status === status).length}
                </strong>
                <span>{STATUS_LABELS[status]}</span>
            </div>

        ))}
        

    </section>
    );
}