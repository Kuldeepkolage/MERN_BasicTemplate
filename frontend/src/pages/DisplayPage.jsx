import { DoctorCard } from "../components2/doctorcard";
import { DonorCard } from "../components2/donorcard";
import { FlowerCard } from "../components2/flowercard";
import { BookCard } from "../components2/librarycard";
import { ProductCard } from "../components2/productcard";
import { ResumePreview } from "../components2/resumecard";
import { StudentCard } from "../components2/studentcard";
import { TrainSearch } from "../components2/trainsearch";
// use whatever component you want from components2
export default function DisplayPage(){
    return(
        <div>
            <div className="flex justify-center items-center">
            <DoctorCard /> <DoctorCard /> <DoctorCard />
            </div>
            <div className="flex justify-center items-center">
            <DonorCard />
            </div>
            <div className="flex justify-center items-center"><FlowerCard /></div>

            <div className="flex justify-center items-center"><BookCard /></div>

            <div className="flex justify-center items-center"><ProductCard /></div>

            <div className="flex justify-center items-center"><ResumePreview /></div>

            <div className="flex justify-center items-center"><StudentCard /></div>

            <div className="flex justify-center items-center"><TrainSearch /></div>


        </div>
    );
}
