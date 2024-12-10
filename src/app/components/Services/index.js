import styles from './styles.module.css';
import ServiceCard from './ServiceCard';

const ServicesSection=() =>
{
        const services=[
                { title: 'Technology Transfer', description: 'Bring global tech to local businesses.' },
                { title: 'Cross-Border Staffing', description: 'Global talent for your projects.' },
                { title: 'Business Consulting', description: 'Strategic solutions for growth.' },
                { title: 'Partnership Advisory', description: 'Connecting you with global leaders.' },
        ];

        return (
                <section className={ styles.services }>
                        <h2>Our Expertise at a Glance</h2>
                        <div className={ styles.cards }>
                                { services.map( ( service, index ) => (
                                        <ServiceCard key={ index } title={ service.title } description={ service.description } />
                                ) ) }
                        </div>
                </section>
        );
};

export default ServicesSection;
