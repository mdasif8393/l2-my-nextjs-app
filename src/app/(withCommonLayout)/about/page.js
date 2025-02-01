import styles from './About.module.css';
export const metadata = {
    title: "About Page",
    description: "This is About page created by NextJs "
}

const About = () => {
    return (
        <div>
            <h1 className={styles.text_color}>About page</h1>
        </div>
    );
};

export default About;