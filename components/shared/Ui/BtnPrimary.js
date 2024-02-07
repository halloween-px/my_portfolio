import Link from 'next/link'

const BtnPrimary = ({ text, link }) => {
	return (
		<Link
			href={`${link}`}
			className={`inline-block mt-4 py-2 px-12 bg-main rounded-full`}
		>
			{text}
		</Link>
	)
}

export default BtnPrimary;