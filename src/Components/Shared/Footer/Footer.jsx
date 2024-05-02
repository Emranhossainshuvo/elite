import moment from 'moment';



const Footer = () => {
    return (
        <>
        <hr className="mx-2 my-4" />
            <footer className="footer ps-2 text-base-content">
                <aside>
                    <p className="text-custom-text">© Copyright {moment().format('YYYY')} - All right reserved by Md. Emran Hossain</p>
                </aside>
            </footer>
        </>
    );
};

export default Footer;