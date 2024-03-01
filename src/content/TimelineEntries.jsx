import TimelineItem from "../components/timeline/TimelineItem.jsx";

export const TimelineEntries = () => {
    return (
        <>
            <TimelineItem
                key="001"
                dateText="March 2023 – Present"
                dateInnerStyle={{ background: '#0e4067', color: '#ffffff' }}
                style={{ color: '#183b77' }}
                bodyContainerStyle={{
                    background: 'rgba(24,24,24)',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                }}
            >
                <h3>Lead Quality Engineer</h3>
                <h4>Arvest Bank</h4>
                <p>
                    Currently Leading a team of Quality Engineers developing a state of the art enterprise
                    fraud system which uses machine learning to recognize and flag potential fraud activity, even
                    automatically placing holds on check deposits to be reviewed by the Fraud team.
                </p>
                <p>
                    Duties include PCI and PII data security, creating test plans, implementing test
                    automation for end to end testing.  Implement test automation into build pipelines,
                    and creating tools beyond test automation to support quality initiatives.
                </p>
                <p>
                    Other duties include assigning work to Quality Engineers, providing assistance to
                     developers and quality engineers for testing and integrating systems, as the subject
                     matter expert on the system, as well as being the arbiter for quality.
                </p>
            </TimelineItem>
            <TimelineItem
                key="002"
                dateText="July 2022 - March 2023"
                dateInnerStyle={{ background: '#0e4067', color: '#ffffff' }}
                bodyContainerStyle={{
                    background: 'rgba(24,24,24)',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                }}
            >
                <h3>Quality Engineer</h3>
                <h4>Arvest Bank</h4>
                <p>
                    Worked on the mobile banking team, eventually taking over quality roles for all online
                    banking.  Worked with product and development teams to implement processes that reduced
                    feature update time to release exponentially.  Improvements includes test automation,
                    improving process utilizing Agile Methodologies, and proving quality processes through
                    results.
                </p>
            </TimelineItem>
            <TimelineItem
                key="003"
                dateText="Jan 2021 - July 2022"
                dateInnerStyle={{ background: '#5af500', color: '#000000' }}
                bodyContainerStyle={{
                    background: 'rgba(24,24,24)',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                }}

            >
                <h3>Quality Engineer III</h3>
                <h4>NCR Corporation (Now known as NCR Voyix)</h4>
                <p>
                    Worked on the Digital Insights team testing feature updates for online
                    banking software, primary efforts involving migration to Google Cloud Platform
                    and enhancing Experience Builder, a tool that allows users to heavily customize their
                    UI/UX for their online banking portal.
                </p>
                <p>
                    Built up and implemented new test automation framework utilizing Playwright/Jest. Sped up
                    turnaround time for QA phase by enhancing processes and implementing automation where viable.
                </p>
            </TimelineItem>
            <TimelineItem
                key="004"
                dateText="Jan 2015 - Dec 2021"
                dateInnerStyle={{ background: '#00b0cb', color: '#000000' }}
                bodyContainerStyle={{
                    background: 'rgba(24,24,24)',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                }}
            >
                <h3>Quality Engineer</h3>
                <h4>ABC Financial Services (Now known as ABC Fitness)</h4>
                <p>
                    My first foray into quality assurance; Responsible for Test Planning,
                    Quality Assurance, Process Management, PCI Compliance, Assessing Requirements,
                    and Deployment/DevOps on assigned projects.
                </p>
                <p>
                    Test lead on projects, including: EMV integration, API, PCI Compliance, POS Hardware,
                    and many more.
                </p>
            </TimelineItem>
            <TimelineItem
                key="005"
                dateText="May 2011 - Dec 2014"
                dateInnerStyle={{ background: '#00b0cb', color: '#000000' }}
                bodyContainerStyle={{
                    background: 'rgba(24,24,24)',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                }}
            >
                <h3>Technical Project Manager</h3>
                <h4>ABC Financial Services (Now known as ABC Fitness)</h4>
                <p>
                    A role that was a balance between a support role for specialty systems, such as
                    Access Control Systems, User Facing Kiosks, and others; VIP Client relations, and implementation projects.
                </p>
                <p>
                    Job duties included overseeing large scale implementation of new products, assisting VIP
                    clients, troubleshooting &amp34;impossible&amp34; issues, and working with Software Development to test,
                    prototype, and integrate solutions with a focus on Hardware.  Being on a very small team, we
                    are known as the &amp34;miracle workers&amp34; of the business... finding solutions to problems using any means
                    available.
                </p>
            </TimelineItem>
        </>
    )
}