import styles from './styles.module.css';

const ServiceCard=( { title, description } ) =>
{
        return (
                <div className={ styles.card }>
                        <h3>{ title }</h3>
                        <p>{ description }</p>
                </div>
        );
};

export default ServiceCard;
