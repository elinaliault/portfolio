import { useParams } from "react-router"
import { getUiTranslation } from "../utils/getUiTranslation"
import { getProjects } from "../utils/getProjects"
import ScrollIndicator from "../components/modules/ScrollIndicator.jsx"
import { Button } from "../components/Button.jsx"
import ProjectCard from "../components/ProjectCard.jsx"

function RecentProjects() {
    const { lang } = useParams();
    const t = getUiTranslation(lang);
    const projects = getProjects(lang);

    const recentProjects = projects.slice(0, 4);

    return (
        <section className="px-4 mb-44">
            {/* Header row: title + subtitle */}
            <div className="flex flex-col gap-2 text-left mb-10">
                <h2 className="w-fit px-2 m-0
                bg-(--marine) text-(--light-gray)
                text-2xl sm:text-3xl font-(family-name:--heading)">
                    {t.home.recentProjectsTitle}
                </h2>
                <p className="m-0 text-(--marine) text-base sm:text-lg">
                    {t.home.recentProjectsSubtitle}
                </p>
            </div>

            {/* Project grid — same layout as the full Projects page */}
            <div className="grid grid-cols-1 sm:grid-cols-2
            gap-12 md:gap-18 mb-20">
                {recentProjects.map((project, index) => (
                    <ProjectCard
                        key={project.url ?? index}
                        index={index + 1}
                        langUrl={lang}
                        projectUrl={project.url}
                        coverUrl={project.coverUrl}
                        isSchool={project.isSchool}
                        orgName={project.orgName}
                        endDate={project.endDate}
                        title={project.title}
                        description={project.description}
                        types={project.types}
                    />
                ))}
            </div>

            {/* Button: centered below the grid */}
            <div className="flex justify-center mt-16">
                <Button
                    text={t.home.viewAllProjects}
                    to={`/${lang}/projets`}
                    variant="primary"
                />
            </div>
        </section>
    )
}
export function AboutIntro() {
    const { lang } = useParams();
    const t = getUiTranslation(lang);
    return (
      <section className="bg-(--medium-gray) bg-[url(/texture/medium-gray-tile.png)] bg-repeat bg-center
      w-full  px-8 sm:px-10 md:px-16 lg:px-60 xl:px-60 2xl:px-80
            py-20 md:py-24">

      <div className="w-full flex flex-row gap-12 md:gap-20 items-center">
        <div className="flex flex-col gap-4 text-left">
          <h2 className="font-(family-name:--heading) text-2xl md:text-3xl text-(--marine)">
            {t.home.aboutTitle}</h2>
          <p className="text-lg text-(--marine)">{t.home.aboutText}</p>
          <Button variant="secondary" 
            text={t.home.aboutButton} to={`/${lang}/about`} />
        </div>
        <img src={t.home.aboutImg.src} 
        alt={t.home.aboutImg.src} className="max-w-xs"/>
      </div>
      </section>
    )
}

export default function Home() {
  const { lang } = useParams();
  const t = getUiTranslation(lang);

  return (
    <>
      <div className="text-left w-fit m-auto py-6 flex flex-col">
        <div className="relative inline-block mt-26 mb-7 w-fit">
            <h1 className="font-(family-name:--heading)
            text-(--marine) text-4xl sm:text-7xl"
            dangerouslySetInnerHTML={{ __html: t.home.pagesTitle }} />
             <span 
                className="text-[2.5rem] text-(--marine-clair) 
                absolute top-10 -right-22
                rotate-[-16deg]
                hidden sm:inline"
                aria-hidden="true"
            >
                ✽
            </span>
            <span 
                className="text-[2.5rem] text-(--marine-clair) 
                absolute -top-18 right-10
                rotate-[-16deg]
                hidden sm:inline"
                aria-hidden="true"
            >
                ✽
            </span>
            <span 
                className="text-base text-(--marine) bg-(--marine-clair) px-1
                absolute -top-8 right-28
                rotate-14
                hidden sm:inline"
                aria-hidden="true"
            >
                {t.home.keywords.ui}
            </span>
            <span 
                className="text-base text-(--marine) bg-(--marine-clair) px-1
                absolute top-26 -right-14
                rotate-16
                hidden sm:inline"
                aria-hidden="true"
            >
               {t.home.keywords.graphic}
            </span>
            <span 
                className="text-base text-(--marine) bg-(--marine-clair) px-1
                absolute 
                -top-6 -right-24
                -rotate-14
                hidden sm:inline"
                aria-hidden="true"
            >
               {t.home.keywords.ux}
            </span>
            {/* mobile only */}
             <span 
                className="text-[2.5rem] text-(--marine-clair) 
                absolute -top-8 left-94
                rotate-[-16deg]
                inline sm:hidden"
                aria-hidden="true"
            >
                ✽
            </span>
        </div>
        <p className="text-base sm:text-lg">{t.home.pagesSubtitle} </p>
        {/* mobile only */}
        <p className="inline sm:hidden pt-4">
            <span 
                className="text-sm text-(--marine) bg-(--marine-clair) px-1"
                aria-hidden="true"
            >
                {t.home.keywords.ux}
            </span>
            {" ✽ "}
            <span 
                className="text-sm text-(--marine) bg-(--marine-clair) px-1"
                aria-hidden="true"
            >
               {t.home.keywords.ui}
            </span>
            {" ✽ "}
            <span 
                className="text-sm text-(--marine) bg-(--marine-clair) px-1"
                aria-hidden="true"
            >
               {t.home.keywords.graphic}
            </span>
            
        </p>
      </div>

      <ScrollIndicator
          leftText={t.home.scrollDown}
          rightText={t.home.scrollToProjects}
      />
      <RecentProjects />
      {/* AboutIntro is rendered in LayoutPage before the footer */}
    </>
  )
}
