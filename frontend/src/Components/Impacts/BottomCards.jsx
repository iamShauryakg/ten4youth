
const BottomCards = () => {
    return (
        <div className="bg-gray-100 py-4 px-6 flex justify-center ml-36 mr-36">
            <div className="flex flex-row md:flex-row gap-6 text-center">
                <div className="flex flex-row items-center gap-4">
                    <h2 className="text-orange-500 text-2xl font-bold">18</h2>
                    <span>Training and Development Centers</span>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <h2 className="text-orange-500 text-2xl font-bold ml-35">4</h2>
                    <span>Green Villages</span>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <h2 className="text-orange-500 text-2xl font-bold ml-35">3</h2>
                    <span>Little Angles Academies</span>
                </div>
            </div>
        </div>
    );
};

export default BottomCards;