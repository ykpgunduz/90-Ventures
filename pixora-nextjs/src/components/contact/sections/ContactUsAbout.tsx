
import Link from "next/link";

const ContactUsAbout = () => {
    return (
        <div className="cn-contactform-support-area mb-140">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="cn-contactform-support-bg d-flex align-items-center justify-content-center"
                            style={{ backgroundImage: `url(/assets/img/contact/contact-us/contact-us-shape.png)` }}>
                            <div className="cn-contactform-support-text text-center">
                                <span>Ya da doğrudan <Link href="mailto:hello@90.ventures" style={{ textDecoration: "underline", color: "inherit" }}>hello@90.ventures</Link> adresi üzerinden bizimle iletişime geçebilirsiniz.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsAbout;