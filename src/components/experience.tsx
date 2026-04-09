import { useTranslations } from "next-intl";

const Experience = () => {

      const t = useTranslations("about");
  return (
        <section
      id="experience"
      className="snap-start min-h-screen scroll-mt-16 lg:scroll-mt-24"
      aria-label={t("title")}
    >
        <div className="mx-auto max-w-screen-xl px-6 py-12">
            <h2 className="text-3xl font-bold mb-8">Experiencia</h2>
            <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-2">Desarrollador Web - Empresa XYZ</h3>
                    <p className="text-gray-600 mb-4">Enero 2020 - Presente</p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Desarrollo de aplicaciones web utilizando React y Node.js.</li>
                        <li>Colaboración con equipos multidisciplinarios para diseñar soluciones innovadoras.</li>
                        <li>Optimización del rendimiento y la usabilidad de las aplicaciones.</li>
                    </ul>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-2">Desarrollador Backend - Empresa ABC</h3>
                    <p className="text-gray-600 mb-4">Junio 2018 - Diciembre 2019</p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Diseño e implementación de APIs RESTful utilizando Django y Flask.</li>
                        <li>Gestión de bases de datos relacionales y no relacionales.</li>
                        <li>Implementación de pruebas unitarias y de integración para garantizar la calidad del código.</li>
                    </ul>
                </div>
            </div>
        </div>

    </section>
  );
};

export default Experience;