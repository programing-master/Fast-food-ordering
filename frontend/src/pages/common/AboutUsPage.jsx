import React from 'react'

export default function AboutUsPage() {
  return (
    <div className="min-h-screen w-full mt-4 text-sm flex items-center justify-center">
    <div className=" w-[90%] md:w-[60%] p-4 min-h-[50vh]  flex flex-col items-center">
        <img
            src="https://th.bing.com/th/id/R.469e3fad962b0587577396a582b27232?rik=q99rWWjXeJmfOQ&riu=http%3a%2f%2fconecto.senacyt.gob.pa%2fconecto%2ffile%2fn5313%2fdescarga%2b(3).png&ehk=hUX%2fePgsjbkn99LkfkGykhl6N46E3RkuKq1ciGT%2bgNM%3d&risl=&pid=ImgRaw&r=0"
            alt=""
        />
        <p className="p-1 md:p-4 mt-2">
            <span className="text-md font-semibold">
                Resumen ejecutivo:
            </span>{' '}
            El presente trabajo de investigación aborda la importancia
            del desarrollo de aplicaciones web full stack y la
            optimización de SEO (Search Engine Optimization) en el
            contexto actual de la tecnología. <br /> En este estudio, se
            analiza cómo la combinación de habilidades en programación
            front-end y back-end, junto con conocimientos en SEO,
            resultan cruciales para crear soluciones web eficaces y
            visibles en los motores de búsqueda. <br />
            <br />{' '}
            <span className="text-md font-semibold">
                Objetivos del estudio:
            </span>
            Investigar las tendencias actuales en el desarrollo de
            aplicaciones web full stack. <br />
            Analizar los principios fundamentales de SEO y su impacto en
            el ranking de sitios web. Examinar cómo se pueden integrar
            técnicas de SEO en el proceso de desarrollo de aplicaciones
            web full stack. <br /> Evaluar herramientas y frameworks
            populares utilizados en el desarrollo full stack. Determinar
            cómo la optimización de SEO mejora la visibilidad y el
            tráfico de usuarios a las páginas web. <br /> Metodología:
            Se realizó una investigación bibliográfica exhaustiva sobre
            temas relacionados con el desarrollo full stack y SEO.
            Además, se llevó a cabo un análisis de casos prácticos de
            proyectos desarrollados utilizando tecnologías populares en
            el sector.
            <br />
            <br />
            <span className="text-md font-semibold">
                Resultados y conclusiones:
            </span>{' '}
            El estudio reveló que la integración de conocimientos en
            desarrollo full stack y SEO resulta fundamental para crear
            aplicaciones web eficaces y visibles. Se identificaron
            patrones comunes en el uso de tecnologías como React,
            Node.js, MongoDB, y Express.js para el desarrollo front-end
            y back-end, así como estrategias efectivas para optimizar el
            SEO de estas aplicaciones.
            <br />
            <br />
            .
        </p>
    </div>
</div>
  )
}
