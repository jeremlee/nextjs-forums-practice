

export default function HomeNavBar() {
    return (
        <nav className="bg-blue-600 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-end space-x-6">
                <a href="/" className="hover:underline hover:text-gray-200 transition duration-300">
                    Home
                </a>
                <a href="/auth/login" className="hover:underline hover:text-gray-200 transition duration-300">
                    Login
                </a>
                <a href="/auth/register" className="hover:underline hover:text-gray-200 transition duration-300">
                    Register
                </a>
            </div>
        </nav>
    );
}
