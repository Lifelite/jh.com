import "../../styles/Magazine.scss"

export function Magazine(props) {
    const {
        contentUpperLeft,
        contentLowerLeft,
        centerText,
        pageImage,
        pageImageAlt,
        pageHeadline,
        paragraphTitle,
        paragraphText,
        contentUpperRight,
        contentLowerRight,
        contentCenterTitle,
        contentCenterSubTitle,
        quoteLineOne,
        quoteLineTwo,
        quoteCredit,
        quoteCreditTitle,
        contentCenterImage,
        contentCenterImageAlt,
        contentSectionTitle,
        contentSectionParagraph,
        noOfPages,
    } = props




    return (
        <div className="magazine">
            <div className="pages">
                <input
                    id="one"
                    type="radio"
                    name="trigger"
                />
                <input
                    id="two"
                    type="radio"
                    name="trigger"
                />
                <input
                    id="three"
                    type="radio"
                    name="trigger"
                />
                <input
                    id="four"
                    type="radio"
                    name="trigger"
                />
                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="logo">{contentUpperLeft}</div>
                        <div className="pagenumber">{contentLowerLeft}</div>
                        <div className="content">
                            <div className="content_center">
                                <h4>{centerText}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="content">
                            <div className="content_center right">
                                <h4>{centerText}</h4>
                            </div>
                            <div className="overlay"/>
                        </div>
                        <div className="control next">
                            <label htmlFor='two'/>
                        </div>
                    </div>
                </div>
                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="logo">{contentUpperLeft}</div>
                        <div className="pagenumber">{contentLowerLeft}</div>
                        <div className="control">
                            <label htmlFor="one"/>
                        </div>
                        <div className="content">
                            <div className="content_picture">
                                <img
                                    src={pageImage}
                                    alt={pageImageAlt}
                                />
                            </div>
                            <div className="content_offset">
                                <h2>{paragraphTitle}</h2>
                                <p>{paragraphText}</p>
                            </div>
                            <h1>
                                <span>{pageHeadline}</span>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="hamburger">
                            {contentUpperRight}
                        </div>
                    </div>
                    <div className="control next">
                        <label htmlFor="three"/>
                    </div>
                    <div className="bg"/>
                    <div className="footer">
                        {contentLowerRight}
                    </div>
                    <div className="content">
                        <div className="content_quote">
                            <h5>
                                <span className="quo">``</span>
                                <span>{quoteLineOne}</span>
                                <span>{quoteLineTwo}</span>
                                <span className="name">{quoteCredit}</span>
                                <span className="auth">{quoteCreditTitle}</span>
                                <span className="quo">``</span>
                            </h5>
                        </div>
                        <div className="content_picture">
                            <img
                                src={pageImage}
                                alt={pageImageAlt}
                                />
                        </div>
                        <h1>
                            <span>{pageHeadline}</span>
                        </h1>
                    </div>
                </div>
                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="logo">
                            {contentUpperLeft}
                        </div>
                        <div className="pagenumber">
                            {contentLowerLeft}
                        </div>
                        <div className="content">
                            <div className="content_center">
                                <h4>{contentCenterTitle}</h4>
                                <h6>{contentCenterSubTitle}</h6>
                            </div>
                        </div>
                        <div className="control right">
                            <label htmlFor={"two"}/>
                        </div>
                    </div>
                </div>
                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="logo">{contentUpperLeft}</div>
                        <div className="pagenumber">{contentLowerLeft}</div>
                    </div>
                    <div className="content">
                        <div className="content_center">
                            <h4>{contentCenterTitle}</h4>
                            <h6>{contentCenterSubTitle}</h6>
                        </div>
                        <div className="control">
                            <label htmlFor="two" />
                        </div>
                    </div>
                </div>
                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="hamburger">
                            {contentUpperRight}
                        </div>
                        <div className="control next">
                            <label htmlFor="four"/>
                        </div>
                        <div className="bg" />
                        <div className="content_centerimage">
                            <img
                                src={contentCenterImage}
                                alt={contentCenterImageAlt} />
                        </div>
                        <div className="content">
                            <div className="content_center right">
                                <h4>{contentCenterTitle}</h4>
                                <h6>{contentCenterSubTitle}</h6>
                            </div>
                        </div>
                        <div className="footer">
                            {contentLowerRight}
                        </div>
                        <div className="content">
                            <div className="content_quote">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="logo">{contentUpperLeft}</div>
                        <div className="pagenumber">{contentLowerLeft}</div>
                        <div className="content">
                            <div className="content_section">
                                <h2>{contentSectionTitle}</h2>
                                <p>{contentSectionParagraph}</p>
                            </div>
                            <div className="content_section">
                                <h2>{contentSectionTitle}</h2>
                                <p>{contentSectionParagraph}</p>
                            </div>
                            <div className="content_section">
                                <h2>{contentSectionTitle}</h2>
                                <p>{contentSectionParagraph}</p>
                            </div>
                        </div>
                        <div className="control">
                            <label htmlFor="three" />
                        </div>
                    </div>
                </div>
                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="hamburger">
                            {contentUpperRight}
                        </div>
                        <div className="bg" />
                        <div className="content" />
                        <div className="footer">
                            {contentLowerRight}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}