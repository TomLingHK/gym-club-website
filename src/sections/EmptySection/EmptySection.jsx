import './EmptySection.scss';
import Footer from '../../components/Footer/Footer';

function EmptySection({ setActiveNav }) {
    return (
        <>
            <section className={'emptySection scroll-checkpoint'}>
            </section>
            <Footer setActiveNav={setActiveNav}></Footer>
        </>
    )
}

export default EmptySection;