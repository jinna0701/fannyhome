import image from 'next/image';


export default function Landing() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ff8f2', color: 'black' }}>
    
      <title>Spring Break Enrollment</title>
     
    {/* <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex space-x-4">
        <a href="#" className="text-black hover:text-gray-900">Home</a>
        <a href="#" className="text-black hover:text-gray-900">Location</a>
        <a href="/Program" className="text-black hover:text-gray-900">Program</a>
        <a href="#" className="text-black hover:text-gray-900">Contact</a>
        <a href="#" className="text-black hover:text-gray-900">About</a>
        <a href="#" className="text-black hover:text-gray-900">FAQ</a>
      </div>
      <div className="flex space-x-4">
        <a href="#" className="text-black hover:text-gray-900">Login</a>
        <a href="#" className="text-black hover:text-gray-900">Sign up</a>
      </div>
      </div>
    </nav> */}
    <main className="container mx-auto px-4 py-16">
      <div className="flex items-center">
      <div className="w-1/2">
        <h1 className="text-4xl font-bold mb-4">Spring Break Enrollment Time!</h1>
        <p className="mb-4">An enim nullam tempor sapien gravida donec enim ipsum porta justo congue magna at pretium purus pretium ligula</p>
        <div className="flex space-x-4">
        <button className="bg-orange-500 text-white px-4 py-2 rounded">Enroll</button>
        <button className="bg-orange-500 text-white px-4 py-2 rounded">Book a tour</button>
        </div>
      </div>
      <div className="w-1/2">
        <img src="/Landing.png" alt="Children playing" className="rounded shadow-md"/>
      </div>
      </div>
    </main>
    </div>
  );
}


// export default function Landing() {


//   return (
//     <div>
    
//     </div>
//   )
// }
