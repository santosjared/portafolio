import { useTranslations } from "next-intl";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

const Skills = ({ icon, name, color, percent }: any) => (
  <div className="flex flex-col items-center gap-2 w-20">
    <Icon icon={icon} className={`text-3xl ${color}`} />
    <p className="text-sm font-medium text-foreground">{name}</p>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-blue-600 h-2 rounded-full"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
    <span className="text-xs text-gray-500">{percent}%</span>
  </div>
);

const Skill = () => {

    const t = useTranslations("skills");

    return (
        <div className="rounded-xl overflow-hidden border border-border bg-card shadow-sm mt-12">
          <div className="px-6 py-4">
            <h3 className="text-xl font-bold text-foreground tracking-[-0.02em] uppercase">
              {t("title")}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-2">
            <div className="col-span-2 md:col-span-1 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 px-4 py-2 rounded-t-xl bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="ml-4 text-sm text-gray-500">Backend</span>
              </div>

              <div className="p-4 space-y-6">
                <section>
                  <h3 className="text-sm font-semibold text-gray-600 mb-3">{t("languages")}</h3>
                  <div className="flex flex-wrap gap-6 justify-center">
                    <Skills icon="simple-icons:php" name="PHP" color="text-purple-600" percent={45} />
                    <Skills icon="simple-icons:python" name="Python" color="text-yellow-400" percent={30} />
                    <Skills icon="simple-icons:typescript" name="TypeScript" color="text-blue-600" percent={90} />
                    <Skills icon="devicon:java" name="Java" color="text-blue-600" percent={45} />
                  </div>
                </section>
                <section>
                  <h3 className="text-sm font-semibold text-gray-600 mb-3">{t("databases")}</h3>
                  <div className="flex flex-wrap gap-6 justify-center">
                    <Skills icon="simple-icons:mysql" name="MySQL" color="text-red-600" percent={60} />
                    <Skills icon="simple-icons:postgresql" name="PostgreSQL" color="text-blue-600" percent={50} />
                    <Skills icon="simple-icons:firebase" name="Firebase" color="text-yellow-300" percent={30} />
                    <Skills icon="simple-icons:mongodb" name="MongoDB" color="text-green-500" percent={85} />
                  </div>
                </section>
                <section>
                  <h3 className="text-sm font-semibold text-gray-600 mb-3">{t("frameworks")}</h3>
                  <div className="flex flex-wrap gap-6 justify-center">
                    <Skills icon="simple-icons:django" name="Django" color="text-green-600" percent={35} />
                    <Skills icon="simple-icons:nestjs" name="NestJS" color="text-red-600" percent={85} />
                    <Skills icon="simple-icons:laravel" name="Laravel" color="text-red-500" percent={45} />
                  </div>
                </section>

              </div>
            </div>
            <div className="col-span-2 md:col-span-1 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 px-4 py-2 rounded-t-xl bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="ml-4 text-sm text-gray-500">Frontend</span>
              </div>

              <div className="p-4 space-y-6">
                <section>
                  <h3 className="text-sm font-semibold text-gray-600 mb-3">{t("frameworks")}</h3>
                  <div className="flex flex-wrap gap-6 justify-center">
                    <Skills icon="simple-icons:react" name="React" color="text-blue-600" percent={85} />
                    <Skills icon="devicon:nextjs-wordmark" name="Next.js" color="text-gray-600" percent={80} />
                    <Skills icon="logos:vue" name="Vue.js" color="text-green-600" percent={45} />
                    <Skills icon="simple-icons:angular" name="Angular" color="text-red-600" percent={20} />
                    <Skills icon="simple-icons:flutter" name="Flutter" color="text-blue-500" percent={50} />
                  </div>
                </section>
                <section>
                  <h3 className="text-sm font-semibold text-gray-600 mb-3">{t("languages")}</h3>
                  <div className="flex flex-wrap gap-6 justify-center">
                    <Skills icon="simple-icons:html5" name="HTML5" color="text-orange-500" percent={85} />
                    <Skills icon="simple-icons:css3" name="CSS3" color="text-blue-500" percent={80} />
                    <Skills icon="simple-icons:javascript" name="JavaScript" color="text-yellow-400" percent={90} />
                  </div>
                </section>
              </div>
            </div>
            <div className="col-span-2 w-full bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 px-4 rounded-t-xl py-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="ml-4 text-sm text-gray-500">{t("implementation")}</span>
              </div>

              <div className="p-4 space-y-6">
                <section>
                  <h3 className="text-sm font-semibold text-gray-600 mb-3">{t("tools")}</h3>
                  <div className="flex flex-wrap gap-6 justify-center">
                    <Skills icon="simple-icons:git" name="Git" color="text-red-600" percent={80} />
                    <Skills icon="simple-icons:docker" name="Docker" color="text-blue-600" percent={60} />
                    <Skills icon="simple-icons:linux" name="Linux" color="text-yellow-500" percent={65} />
                    <Skills icon="mdi:network-outline" name="Redes" color="text-black-600" percent={55} />
                    <Skills icon="simple-icons:owasp" name="OWASP" color="text-white-300" percent={50} />
                    <Skills icon="simple-icons:kubernetes" name="Kubernetes" color="text-blue-500" percent={45} />
                  </div>
                </section>
                <section>
                  <h3 className="text-sm font-semibold text-gray-600 mb-3">{t("cloud")}</h3>
                  <div className="flex flex-wrap gap-6 justify-center">
                    <Skills icon="fontisto:aws" name="AWS" color="text-black-500" percent={30} />
                    <Skills icon="logos:google-cloud" name="GPC" color="text-blue-500" percent={75} />
                    <Skills icon="devicon:azure" name="Azure" color="text-blue-500" percent={30} />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        );
}

export default Skill;