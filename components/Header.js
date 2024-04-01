
const items = [
    { icon: 'fab fa-youtube', link: 'https://youtube.com/@parsher_?si=1DLup7tPqd6u9FqT' },
    { icon: 'fab fa-twitch', link: '' },
    { icon: 'fab fa-discord', link: 'https://discord.com/invite/bdfd' },
    { icon: 'fab fa-instagram', link: 'https://www.instagram.com/egeefe.er4?igsh=YzU1NGVlODEzOA==' },
    { icon: 'fab fa-facebook', link: '' },
    { icon: 'fab fa-github', link: 'https://github.com/NamiTrakyali' },
  ]

const navItems = [
    { icon: 'fal fa-home', active: 'fa fa-home', label: 'Home', href: '/' },
    { icon: 'fal fa-compass', active: 'fa fa-compass', label: 'Projects', href: '/projects' },
    { icon: 'fal fa-phone', active: 'fa fa-phone', label: 'Contact', href: '/contact' },
    { icon: 'fal fa-rss', active: 'fa fa-rss', label: 'Parsher', href: 'https://www.parsher.xyz/' }
]

import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => { //burdan
    const router = useRouter();
    const [yazi, setYazi] = useState('');
    const swinglerJS = 'Swingler.JS';

    // Belirli bir gecikme sonrasında metni harf harf göster
    useEffect(() => {
        let i = 0;
        const zamanlayici = setInterval(() => {
            setYazi(prevYazi => prevYazi + swinglerJS[i]);
            i++;
            if (i === swinglerJS.length) clearInterval(zamanlayici);
        }, 100); // Her harf için 100 milisaniye gecikme

        // Bileşenin sonlandırılması durumunda zamanlayıcıyı temizle
        return () => clearInterval(zamanlayici);
    }, []);

    const items = [/* Items diziniz */];

    return (
        <div className="w-full border-b-2 border-neutral-800/20 pb-2">
            <div className="flex flex-col md:flex-row w-full items-center md:justify-between">
                <p className="font-semibold font-Poppins text-xl">{yazi}</p>
                <div className="flex items-center space-x-2">
                    {items.map(item => (
                        <a key={item.link} href={item.link} target="_blank" rel="noreferrer" className="flex items-center justify-center hover:bg-neutral-700/20 rounded-xl transition-all duration-150 p-2 px-3">
                            <i className={`${item.icon} text-3xl`} />
                        </a>
                    ))} // buraya
                </div>
            </div>
            <div className="flex justify-center md:justify-start items-center space-x-4 py-2">
                {navItems.map(item => (
                    <Link key={item.label} href={item.href}>
                        <a className={`flex items-center justify-center text-white/50 cursor-pointer hover:text-white/100 rounded-xl transition-all duration-150 ${router.asPath === item.href && 'text-white/100'}`}>
                            <i className={`${router.asPath === item.href ? item.active : item.icon} mr-2`} />{item.label}
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    </>
}

export default Header;
