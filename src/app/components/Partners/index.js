import styles from './styles.module.css';

const PartnersSection=() =>
{
        const partners=[ 'Partner 1', 'Partner 2', 'Partner 3', 'Partner 4' ];

        return (
                <section className={ styles.partners }>
                        <h2>Trusted By</h2>
                        <div className={ styles.partnerLogos }>
                                { partners.map( ( partner, index ) => (
                                        <img key={ index } src={ `/partners/${ partner.toLowerCase() }.png` } alt={ partner } />
                                ) ) }
                        </div>
                </section>
        );
};

export default PartnersSection;
