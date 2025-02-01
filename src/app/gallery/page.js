import Image from "next/image";
import nextImage from '../../assets/nextjs.jpg';

const GalleryPage = () => {
    return (
        <div>
            {/* extenal image */}
            <Image
                src="https://miro.medium.com/v2/resize:fit:1000/1*v3XndYeIsBtk4CkpMf7vmA.jpeg"
                height={500}
                width={500}
                alt=""
            />
            {/* local image */}
            <Image
                src={nextImage}
                alt=""
            />
        </div>
    );
};

export default GalleryPage;