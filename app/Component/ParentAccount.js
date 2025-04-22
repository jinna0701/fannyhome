// app/page.js
export default function ParentAccount() {
    return (
      <main className="min-h-screen bg-gray-50 p-8">
        <section className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Next.js</h1>
            <p className="text-lg text-gray-600">A React framework for production</p>
          </header>
  
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Fast Refresh</h2>
              <p className="text-gray-600">Enjoy instant feedback during development</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Server Components</h2>
              <p className="text-gray-600">Render components on the server automatically</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">File Routing</h2>
              <p className="text-gray-600">Create routes using the file system</p>
            </div>
          </div>
        </section>
      </main>
    );
  }
  