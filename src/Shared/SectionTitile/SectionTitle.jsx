const SectionTitle = ({Title,subTitle}) => {
    return (
        <div className="text-center w-1/4 mx-auto">
            <h1 className="text-[#D99904] text-xl ">{subTitle}</h1>
            <h3 className="text-4xl font-semibold mt-4 py-4 border-y-4">{Title}</h3>
        </div>
    );
};

export default SectionTitle;