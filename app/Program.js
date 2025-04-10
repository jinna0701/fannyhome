import Image from 'next/image';

export default function Program() {
    return (
        <div className="pl-20 p-10 bg-#FFF8F2">
            <h1 className="text-4xl font-bold mb-8 text-center">What we believe</h1>
            <div className="flex items-center mb-10">
                <div className="flex-1 text-center">
                    <h2 className="text-3xl font-semibold mb-4">We value their smiles</h2>
                    <p className="text-lg">
                        We believe that a child's smile is a reflection of their happiness and well-being. We are dedicated to creating a safe, nurturing environment where every child feels valued and supported.
                    </p>
                </div>
                <div className="flex-1">
                    <Image src="/p1.png" alt="Children playing" width={500} height={300} />
                </div>
            </div>

            <div className="flex items-center mb-10">
                <div className="flex-1 text-center">
                    <h2 className="text-3xl font-semibold mb-4">Playing is FUN!</h2>
                    <p className="text-lg">
                        Through fun and engaging activities, children learn important skills like creativity, problem-solving, and teamwork. Playtime fosters social connections and helps children express themselves in a relaxed, joyful environment.
                    </p>
                </div>
                <div className="flex-1">
                    <Image src="/p2.png" alt="Children playing" width={500} height={300} />
                </div>
            </div>

            <h1 className="text-4xl font-bold mb-8 text-center">Ages</h1>
            <div className="flex items-center mb-10">
                <div className="flex-1 text-center">
                    <h2 className="text-3xl font-semibold mb-4">Infants schedule with development</h2>
                    <p className="text-lg">
                        At our daycare, we focus on providing a nurturing environment that supports cognitive, emotional, and physical development from day one. Our curriculum includes age-appropriate stimulation that encourages curiosity and problem-solving, laying the foundation for future learning.
                    </p>
                </div>
                <div className="flex-1">
                    <Image src="/p3.png" alt="Children playing" width={500} height={300} />
                </div>
            </div>

            <div className="flex items-center mb-10">
                <div className="flex-1 text-center">
                    <h2 className="text-3xl font-semibold mb-4">2-3 years schedule with development</h2>
                    <p className="text-lg">
                        "Between the ages of 2 and 3, children experience significant growth in language, motor skills, and social interaction, setting the stage for future learning."
                        "Socially, 2-3-year-olds start to engage more with peers, practicing sharing, turn-taking, and building essential friendship skills."
                    </p>
                </div>
                <div className="flex-1">
                    <Image src="/p4.png" alt="Children playing" width={500} height={300} />
                </div>
            </div>

            <div className="flex items-center mb-10">
                <div className="flex-1 text-center">
                    <h2 className="text-3xl font-semibold mb-4">Pre-school kids schedule with development</h2>
                    <p className="text-lg">
                        "At this stage, children begin to develop critical thinking skills, learning how to solve problems, make decisions, and understand cause-and-effect relationships.”
                        "Socially, preschoolers thrive in group settings, practicing cooperation, empathy, and conflict resolution with both peers and caregivers."
                    </p>
                </div>
                <div className="flex-1">
                    <Image src="/p5.png" alt="Children playing" width={500} height={300} />
                </div>
            </div>
        </div>
    );
}
