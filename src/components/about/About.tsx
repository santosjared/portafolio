import { useTranslations } from "next-intl";

const About = () => {

    const t = useTranslations("about");

    return (

        <div className="space-y-4 text-muted-foreground">

            <h2 className="text-2xl font-bold text-foreground">
                {t("title")}
            </h2>

            <p>
                {t("p1")
                    .split(
                        /(accesibles|accessible|rendimiento|performance|usabilidad|usability)/gi
                    )
                    .map((part, i) =>
                        [
                            "accesibles",
                            "accessible",
                            "rendimiento",
                            "performance",
                            "usabilidad",
                            "usability",
                        ].includes(part.toLowerCase()) ? (
                            <span key={i} className="text-foreground font-medium">
                                {part}
                            </span>
                        ) : (
                            part
                        )
                    )}
            </p>

            <p>
                {t("p2")
                    .split(/(React|Next\.js|TypeScript|Nest\.js|Node\.js)/g)
                    .map((part, i) =>
                        ["React", "Next.js", "TypeScript", "Nest.js", "Node.js"].includes(
                            part
                        ) ? (
                            <span key={i} className="text-foreground font-medium">
                                {part}
                            </span>
                        ) : (
                            part
                        )
                    )}
            </p>

            <p>{t("p3")}</p>
        </div>
    );
}

export default About;
