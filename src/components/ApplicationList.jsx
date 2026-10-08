import ApplicationCard from "./ApplicationCard";

export default function ApplicationList({applications}){
    const sortedApplications =[...applications].sort((a,b)=>
        b.appliedOn.localeCompare(a.appliedOn)
    );
    return(
        <section className="job-list">
            {sortedApplications.map((application)=>(
                <ApplicationCard key={application.id} application={application}/>
            ))}

        </section>
    );
}