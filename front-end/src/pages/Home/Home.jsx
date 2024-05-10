import { useEffect } from "react";
import FeatureItem from "../../components/FeatureItem/FeatureItem";
import FeaturesContent from "../../data/featuresContent.json";
import "./Home.css";

const Home = () => {
    useEffect(() => {
        document.title = "ArgentBank - Accueil";
        return () => {};
    }, []);

    return (
        <main>
            <div className="hero">
                <section className="hero-content">
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="subtitle">No fees.</p>
                    <p className="subtitle">No minimum deposit.</p>
                    <p className="subtitle">High interest rates.</p>
                    <p className="text">
                        Open a savings account with Argent Bank today!
                    </p>
                </section>
            </div>
            <section className="features">
                {FeaturesContent.map((feature, index) => (
                    <FeatureItem
                        key={index}
                        img={feature.img}
                        title={feature.title}
                        paragraph={feature.paragraph}
                    />
                ))}
            </section>
        </main>
    );
};

export default Home;
