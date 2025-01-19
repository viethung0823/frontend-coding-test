import '@/styles/pages/main-page/index.scss';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="main">
            <div className="container">
                <img src={'/images/logo.png'} alt="Logo" className="logo" />
                <h2 className="title">
                    This is test for the frontend developer position at Persona.
                    Please refer to README.md for the instructions.
                </h2>
                <ul className="links">
                    <li className="link-item">
                        <Link href="/landing-page" className="link">
                            Link to Task 1 page
                        </Link>
                    </li>
                    <li className="link-item">
                        <Link href="/todo-list" className="link">
                            Link to Task 2 page
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
