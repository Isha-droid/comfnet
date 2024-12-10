import styles from './styles.module.css';

const WhyChooseUsSection=() =>
{
        const reasons=[
                { title: 'Global Reach', description: 'Expanding your business worldwide.' },
                { title: 'Customized Solutions', description: 'Tailored strategies for unique needs.' },
        ];

        return (
                <section className={ styles.whyChooseUs }>
                        <h2>Why Choose Us?</h2>
                        <div className={ styles.cards }>
                                { reasons.map( ( reason, index ) => (
                                        <div key={ index } className={ styles.card }>
                                                <h3>{ reason.title }</h3>
                                                <p>{ reason.description }</p>
                                        </div>
                                ) ) }
                        </div>
                </section>
        );
};

export default WhyChooseUsSection;
