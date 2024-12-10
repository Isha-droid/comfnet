import styles from './styles.module.css';

const HeroSection=() =>
{
        return (
                <section className={ styles.hero }>
                        <div className={ styles.content }>
                                <h1>Fore!gn people and technology drive more than 90% of U.S. tech companies.</h1>
                                <p>The secret? Someone made the connection.</p>
                                <button className={ styles.button }>More Information</button>
                        </div>
                </section>
        );
};

export default HeroSection;
