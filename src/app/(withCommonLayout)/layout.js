import Navbar from '@/components/shared/Navbar';

const CommonLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className='min-h-screen'>
                {children}
            </div>
            <footer className='text-center bg-gray-600 py-6'>This is footer</footer>
        </div>
    );
};

export default CommonLayout;