
import BtnPrimary from "@/components/shared/Ui/BtnPrimary";
import {useMainContext} from "@/components/context/MainContext";

const UserProfile = () => {
	const { userParams } = useMainContext();

	return (
		<div>
			<div className='text-center rounded-full overflow-hidden ms-auto me-auto max-w-[180px]'>
				<img src={userParams.img} className='image-full' alt='#' />
			</div>
			<div className='name text-center mt-4'>
				<h4 className='text-xl-600'>
					{userParams.name} {userParams.family}
				</h4>
			</div>
			<div className='text-center'>
				<BtnPrimary text='Подробнее' link={'/about'} />
			</div>
		</div>
	)
}

export default UserProfile
