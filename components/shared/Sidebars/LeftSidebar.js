import Navigation from '../Navigation/Navigation'
import UserProfile from '../User/UserProfile'
import Experience from "@/components/shared/Experience/Experience";

const LeftSidebar = () => {
	return (
		<div className='relative flex flex-col h-full'>
			<UserProfile />
			<Experience />
			<div className='absolute bottom-0 left-0 w-full'>
				<Navigation />
			</div>
		</div>
	)
}

export default LeftSidebar
