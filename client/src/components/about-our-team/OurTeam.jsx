import OurTeamDevs from "./about-our-team-devs/OurTeamDevs";

export default function OurTeam() {
    return (

        <div className="py-5 team4">
            <div className="container">
                <div className="row justify-content-center mb-4">
                    <div className="col-md-7 text-center">
                        <h3 className="mb-3">Experienced & Professional Team</h3>
                        <h6 className="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                    </div>
                </div>
                {/* People: */}
                <OurTeamDevs />
            </div>
        </div>
    );
}