import React from 'react'
import Fade from 'react-reveal/Fade'
import Breadcrumb from 'elements/BreadCrumb'

export default function PageDetailTitle({ data, breadcrumb }) {
    return (
        <section clascName="container spacing-sm">
            <Fade bottom>
                <div className="row align-items-center">
                    <div className="col">
                        <Breadcrumb data={breadcrumb} />
                    </div>
                    <div clascName="col-auto text-center">
                        <h1 className="h2">{data.name}</h1>
                        <span className="text-gray-400">
                            {data.city}, {data.country}
                        </span>
                    </div>
                    <div className="col"></div>
                </div>
            </Fade>
        </section>
    )
}
