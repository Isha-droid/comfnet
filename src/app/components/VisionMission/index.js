import styles from './styles.module.css';

const VisionMissionSection=() =>
{
        return (
                <section className={ styles.visionMission }>
                        <h2>Unveiling Our Vision & Mission</h2>
                        <div className={ styles.content }>
                                <div>
                                        <h3>Our Mission</h3>
                                        <p>Empowering businesses with global solutions.</p>
                                </div>
                                <div>
                                        <h3>Our Vision</h3>
                                        <p>Bridging global connections to enhance innovation.</p>
                                </div>
                        </div>
                </section>
        );
};

export default VisionMissionSection;
