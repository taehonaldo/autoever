interface FAQContentProps {
	a?: string;
}

const FAQContent = ({ a }: FAQContentProps) => {
	return (
		<>
			{a}
			<hr />
		</>
	);
};

export default FAQContent;
