import './EmptySection.scss';
import Footer from '../../components/Footer/Footer';

function EmptySection() {
    return (
        <>
            <section className={'emptySection scroll-checkpoint'}>
            </section>
            <Footer></Footer>
        </>
    )
}

export default EmptySection;