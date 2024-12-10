import styles from './styles.module.css';
import Accordion from './Accordion';

const IndustriesSection=() =>
{
        const industries=[
                { title: 'Automotive', content: 'Innovative solutions for manufacturing.' },
                { title: 'Healthcare', content: 'Enhancing patient outcomes with tech.' },
        ];

        return (
                <section className={ styles.industries }>
                        <h2>Industries We Serve</h2>
                        { industries.map( ( industry, index ) => (
                                <Accordion key={ index } title={ industry.title } content={ industry.content } />
                        ) ) }
                </section>
        );
};

export default IndustriesSection;
