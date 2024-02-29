import SideBar from '../../components/SideBar/SideBar';
import MessagesBar from '../../components/MessageBar/MessagesBar';

const Home = () => {
    return <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding
    backdrop-filter backdrop-blur-lg bg-opacity-0">
    <SideBar></SideBar>
    <MessagesBar></MessagesBar>
    </div>
}

export default Home;
