import BtnPrimary from '@/components/shared/Ui/BtnPrimary'
import { useMainContext } from '@/components/context/MainContext'

const UserProfile = () => {
	const { userParams } = useMainContext()

	return (
		<div>
			<div className='text-center rounded-full overflow-hidden ms-auto me-auto max-w-[130px]'>
				<img src={userParams.img} className='image-full' alt='#' />
			</div>
			<h5 className='text-[12px] text-center mt-4 tracking-[2px] uppercase text-main'>
				Frontend developer
			</h5>
			<div className='name text-center mt-4'>
				<h4 className='text-xl-600'>
					{userParams.family} {userParams.name} {userParams.surname}
				</h4>
			</div>
		</div>
	)
}

export default UserProfile
