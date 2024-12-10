import styles from './styles.module.css';

const CaseStudiesSection=() =>
{
        const caseStudies=[
                { title: 'Connected Mobility', description: 'Innovative solutions for autonomous vehicles.' },
                { title: 'Healthcare Tech', description: 'Revolutionizing patient care with AI.' },
        ];

        return (
                <section className={ styles.caseStudies }>
                        <h2>Success Stories from Our Clients</h2>
                        <div className={ styles.carousel }>
                                { caseStudies.map( ( caseStudy, index ) => (
                                        <div key={ index } className={ styles.case }>
                                                <h3>{ caseStudy.title }</h3>
                                                <p>{ caseStudy.description }</p>
                                        </div>
                                ) ) }
                        </div>
                </section>
        );
};

export default CaseStudiesSection;
